from iapws.iapws97 import IAPWS97


class Node:
    def __init__(self, id, params):
        self.id = id
        self.params = params
        self.input_nodes = []
        self.output_nodes = []
        P = float(self.params['P'])
        T = self.params.get('T')
        H = self.params.get('H')
        if T and T != '':
            T = float(T) + 273.16
            self.state = IAPWS97(P=P, T=T)
        if H and H != '':
            h = float(H)
            self.state = IAPWS97(P=P, h=h)

    def add_input_node(self, node):
        self.input_nodes.append(node)

    def add_output_node(self, node):
        self.output_nodes.append(node)
