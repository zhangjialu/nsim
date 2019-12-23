from device import Device


class Valve(Device):
    def __init__(self, id, params):
        super().__init__(id, params)

    def fvp(self):
        '''阀门特性函数'''
        return self.params['Vp']
