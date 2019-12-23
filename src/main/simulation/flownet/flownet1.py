import numpy as np
from scipy import linalg

import sys
import json

from inner_node import InnerNode
from boundary_node import BoundaryNode
from valve import Valve
from pump import Pump

device_class = {
    'Valve': Valve,
    'Pump': Pump
}

data = json.loads(sys.stdin.readline())
modules = data['modules']
connect_info = data['connectInfo']

inner_nodes = {}
boundary_nodes = {}
device_nodes = {}

for module in modules:
    params = {}
    for param in module['params']:
        params[param['name']] = param['value']

    if module['type'] == 'InnerNode':
        inner_nodes[module['id']] = InnerNode(module['id'], params)
    elif module['type'] == 'BoundaryNode':
        boundary_nodes[module['id']] = BoundaryNode(module['id'], params)
    else:
        device_nodes[module['id']] = device_class[module['type']](
            module['id'], params)

# print(boundary_nodes["1552274866392"].params['P'])
# print(inner_nodes["1552274869502"].params['P'])
# print(device_nodes["1552274867965"].params['Vp'])

path = {}

for conn in connect_info:
    source_module_id = conn['source']['moduleId']
    target_module_id = conn['target']['moduleId']
    if conn['source']['moduleType'] in ['InnerNode', 'BoundaryNode']:
        if target_module_id not in path.keys():
            path[target_module_id] = {}
        path[target_module_id]['source'] = source_module_id
    else:
        if source_module_id not in path.keys():
            path[source_module_id] = {}
        path[source_module_id]['target'] = target_module_id

# print(path)

# 合并inner_nodes和boundary_nodes
all_nodes = {}
all_nodes.update(inner_nodes)
all_nodes.update(boundary_nodes)

for conn in path.values():
    all_nodes[conn['source']].add_output_node(conn['target'])
    all_nodes[conn['target']].add_input_node(conn['source'])

# for v, k in all_nodes.items():
#     print(v, k.input_nodes, k.output_nodes)

inner_path = {}
boundary_path = {}
for k, v in path.items():
    if v['source'] != [] and v['target'] != []:
        if all_nodes[v['source']].type == 'InnerNode' and all_nodes[v['target']].type == 'InnerNode':
            inner_path[(v['source'], v['target'])] = device_nodes[k].id
            inner_path[(v['target'], v['source'])] = device_nodes[k].id
        else:
            boundary_path[(v['source'], v['target'])] = device_nodes[k].id
            boundary_path[(v['target'], v['source'])] = device_nodes[k].id

# print('inner_path:\n', inner_path)
# print('boundary_path:\n', boundary_path)

inner_nodes_list = list(inner_nodes.values())
boundary_nodes_list = list(boundary_nodes.values())

# boundary_nodes_list = [boundary_nodes['1552310163646'], boundary_nodes['1552310273155'], boundary_nodes['1552310188969'], boundary_nodes['1552310185527'], boundary_nodes['1552310210012']]

# for node in inner_nodes_list:
#     print(node.id, node.input_nodes, node.output_nodes)
# for node in boundary_nodes_list:
#     print(node.id, node.input_nodes, node.output_nodes)


# 计算邻接矩阵 D DE
inner_nodes_length = len(inner_nodes_list)
boundary_nodes_length = len(boundary_nodes_list)

D = np.zeros((inner_nodes_length, inner_nodes_length))
for i in range(inner_nodes_length):
    for j in range(inner_nodes_length):
        if inner_nodes_list[j].id in inner_nodes_list[i].input_nodes:
            D[i][j] = 1
        elif inner_nodes_list[j].id in inner_nodes_list[i].output_nodes:
            D[i][j] = -1
        else:
            D[i][j] = 0

DE = np.zeros((inner_nodes_length, boundary_nodes_length))
for i in range(inner_nodes_length):
    for j in range(boundary_nodes_length):
        if inner_nodes_list[i].id in boundary_nodes_list[j].input_nodes:
            DE[i][j] = -1
        elif inner_nodes_list[i].id in boundary_nodes_list[j].output_nodes:
            DE[i][j] = 1
        else:
            DE[i][j] = 0

# print('D = \n', D)
# print('DE = \n', DE)

# 计算支路长度矩阵L和直径矩阵D
L = np.zeros((inner_nodes_length, inner_nodes_length))
Dia = np.zeros((inner_nodes_length, inner_nodes_length))
rho = np.zeros((inner_nodes_length, inner_nodes_length))

# 内支路流量矩阵G、阻力因子矩阵R、扬程矩阵H
G = np.zeros((inner_nodes_length, inner_nodes_length))
R = np.zeros((inner_nodes_length, inner_nodes_length))
H = np.zeros((inner_nodes_length, inner_nodes_length))
Fvp = np.zeros((inner_nodes_length, inner_nodes_length))
for i in range(inner_nodes_length):
    for j in range(inner_nodes_length):
        inner_device_id = inner_path.get(
            (inner_nodes_list[i].id, inner_nodes_list[j].id))
        inner_device = device_nodes.get(inner_device_id)
        if inner_device:
            G[i][j] = inner_device.params['Qm']
            R[i][j] = inner_device.params['R']
            L[i][j] = inner_device.params['l']
            Dia[i][j] = inner_device.params['d']
            rho[i][j] = inner_nodes_list[i].state.rho
            H[i][j] = inner_device.H()
            Fvp[i][j] = inner_device.fvp()
        else:
            G[i][j] = 0.001
            R[i][j] = 0.001
            rho[i][j] = 0.001
            Fvp[i][j] = 0.001

# print('L = \n', L)
# print('D = \n', D)
# print('G = \n', G)
# print('R = \n', R)
# print('Fvp = \n', Fvp)

# 边界支路流量矩阵GE、阻力因子矩阵RE、扬程矩阵HE
GE = np.zeros((inner_nodes_length, boundary_nodes_length))
RE = np.zeros((inner_nodes_length, boundary_nodes_length))
rhoE = np.zeros((inner_nodes_length, boundary_nodes_length))
HE = np.zeros((inner_nodes_length, boundary_nodes_length))
FvpE = np.zeros((inner_nodes_length, boundary_nodes_length))
for i in range(inner_nodes_length):
    for j in range(boundary_nodes_length):
        boundary_device_id = boundary_path.get(
            (inner_nodes_list[i].id, boundary_nodes_list[j].id))
        boundary_device = device_nodes.get(boundary_device_id)
        if boundary_device:
            GE[i][j] = boundary_device.params['Qm']
            RE[i][j] = boundary_device.params['R']
            rhoE[i][j] = boundary_nodes_list[j].state.rho
            HE[i][j] = boundary_device.H()
            FvpE[i][j] = boundary_device.fvp()
        else:
            GE[i][j] = 0.001
            RE[i][j] = 0.001
            rhoE[i][j] = 0.001
            FvpE[i][j] = 0.001

# print('GE = \n', GE)
# print('RE = \n', RE)
# print('FvpE = \n', FvpE)
# print('rho = \n', rho)
# print('rhoE = \n', rhoE)

# 节点初始参数P、PE
P = np.zeros((inner_nodes_length, 1))
for i in range(inner_nodes_length):
    P[i] = inner_nodes_list[i].params['P']

PE = np.zeros((boundary_nodes_length, 1))
for i in range(boundary_nodes_length):
    PE[i] = boundary_nodes_list[i].params['P']

# print('P = \n', P)
# print('PE = \n', PE)

A = np.zeros((inner_nodes_length, inner_nodes_length))
for i in range(inner_nodes_length):
    for j in range(inner_nodes_length):
        if i == j:
            A[i][j] = np.sum(D**2/(R*np.abs(G))) + np.sum(DE**2/(RE*np.abs(GE)))
        else:
            A[i][j] = -2*D[i][j]**2/(R[i][j]*np.abs(G[i][j]))
        # if i == j:
        #     A[i][j] = np.sum(D**2/(2*R*G*rho)) + np.sum(DE**2/(2*RE*GE*rhoE))
        # else:
        #     A[i][j] = -D[i][j]**2*P[j]/(2*R[i][j]*G[i][j]*rho[i][j])


# print('A = \n', A)

B = np.zeros((inner_nodes_length, 1))
for i in range(inner_nodes_length):
    inner = 0
    boundary = 0
    for j in range(inner_nodes_length):
        inner += D[i][j]**2*H[i][j]/(R[i][j]*np.abs(G[i][j]))
    for k in range(boundary_nodes_length):
        boundary += DE[i][k]**2*(PE[k] + HE[i][k])/(RE[i][k]*np.abs(GE[i][k]))
    # for j in range(inner_nodes_length):
    #     inner += D[i][j]*G[i][j]/(2*rho[i][j]) + D[i][j]**2*H[i][j]/(2*R[i][j]*G[i][j]*rho[i][j])
    # for k in range(boundary_nodes_length):
    #     boundary += DE[i][k]*GE[i][k]/(2*rhoE[i][k]) + DE[i][k]**2*PE[k]/(2*RE[i][k]*GE[i][k]*rhoE[i][k]) + DE[i][k]**2*HE[i][k]/(2*RE[i][k]*GE[i][k]*rhoE[i][k])
    B[i] = inner + boundary
    # B[i] = np.sum(D**2*H/(R*np.abs(G))) + np.sum(DE**2*(PE))

# print('B = \n', B)

# 计算节点压力P
Px = linalg.solve(A, B)

# print('Px = \n', Px)

# 计算支路流量G GE
Gx = np.zeros((inner_nodes_length, inner_nodes_length))
for i in range(inner_nodes_length):
    for j in range(inner_nodes_length):
        Gx[i][j] = G[i][j]/2 + D[i][j]*(Px[j] - Px[i] + D[i][j]*H[i][j])/(2*R[i][j]*G[i][j])


GEx = np.zeros((inner_nodes_length, boundary_nodes_length))
for i in range(inner_nodes_length):
    for k in range(boundary_nodes_length):
        GEx[i][k] = GE[i][k]/2 + DE[i][k]*(PE[k] - Px[i] + DE[i][k]*HE[i][k])/(2*RE[i][k]*GE[i][k])

# print('Gx = \n', Gx)
# print('GEx = \n', GEx)

result = {}
inner_node_id = [node.id for node in inner_nodes_list]
id_px = zip(inner_node_id, Px)

for id, px in id_px:
    result[id] = {'P': abs(px[0])}

for i in range(inner_nodes_length):
    for j in range(inner_nodes_length):
        if i >= j:
            inner_device_id = inner_path.get(
                (inner_nodes_list[i].id, inner_nodes_list[j].id))
            if inner_device_id:
                result[inner_device_id] = {'Qm': abs(Gx[i][j])}

for i in range(inner_nodes_length):
    for j in range(boundary_nodes_length):
        boundary_device_id = boundary_path.get(
            (inner_nodes_list[i].id, boundary_nodes_list[j].id))
        if boundary_device_id:
            result[boundary_device_id] = {'Qm': abs(GEx[i][j])}

print(json.dumps(result))
# # 计算流体在支路内的流动时间
# flow_time = np.pi*rho*L*D**2/(4*G)

# print('flow_time = \n', flow_time)

# # 计算焓值
# E = np.zeros((inner_nodes_length, inner_nodes_length))
# for i in range(inner_nodes_length):
#     for j in range(inner_nodes_length):
#         if i != j:
#             E[i][j] = 0
#         else:
#             E[i][j] = 0


# # 根据P、H计算其它参数
