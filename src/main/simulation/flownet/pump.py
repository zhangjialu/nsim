from device import Device


class Pump(Device):
    def __init__(self, id, params):
        super().__init__(id, params)

    def H(self):
        a0 = self.params['a0']
        a1 = self.params['a1']
        a2 = self.params['a2']
        N = self.params['N']
        Qm = self.params['Qm']

        return a0*N**2 + a1*N*Qm**2 + a2*Qm**2
