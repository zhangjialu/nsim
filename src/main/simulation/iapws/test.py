import sys
import json
from iapws.iapws97 import IAPWS97

args = json.loads(sys.stdin.readline())
result = IAPWS97(**args)

print(json.dumps({
    'T': result.T,
    'P': result.P,
    'v': result.v,
    'rho': result.rho,
    'h': result.h,
    's': result.s,
    'u': result.u,
    'region': result.region,
    'x': result.x
}))
