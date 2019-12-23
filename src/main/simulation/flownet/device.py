from iapws.iapws97 import IAPWS97


class Device:
    def __init__(self, id, params):
        self.id = id
        self.params = params
        if self.params.get('T'):
            self.state = IAPWS97(P=self.params['P'], T=self.params['T'])
        if self.params.get('H'):
            self.state = IAPWS97(P=self.params['P'], h=self.params['H'])

    def fvp(self):
        return 1

    def H(self):
        return 0
