from iapws.iapws97 import IAPWS97
from node import Node


class BoundaryNode(Node):
    def __init__(self, id, params):
        super().__init__(id, params)
        self.type = 'BoundaryNode'

    def process(self):
        pass
