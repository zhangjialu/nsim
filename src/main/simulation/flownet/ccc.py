from iapws.iapws97 import IAPWS97


class Node:
    def __init__(self, id, params):
        self.id = id
        self.params = params
        self.input_nodes = []
        self.output_nodes = []
        self.state = IAPWS97(P=params['P'], T=params['T'])

    def add_input_node(self, node):
        self.input_nodes.append(node)

    def add_output_node(self, node):
        self.output_nodes.append(node)

class Device:
    def __init__(self):
        self.time = 0
        self.params = {}

    def setTime(self, time): pass
    
    def setParams(self, params): pass

class Valve(Device):
    def __init__(self):
        super().__init__()
    
    def process(self): pass

    def reset(self): pass
