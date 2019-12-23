from iapws.iapws97 import IAPWS97
from node import Node


class InnerNode(Node):
    def __init__(self, id, params):
        super().__init__(id, params)
        self.type = 'InnerNode'

    def process(self):
        pass


if __name__ == '__main__':
    node = InnerNode(1, {'T': '30', 'P': '8'})
    print(node.state.rho)
