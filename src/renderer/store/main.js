import { getUniqueId } from './help';

const state = {
  isShowSideBar: true,
  sideBarTitle: '查看文件',
  isShowPropsBar: true,
  renameCache: null,
  clipboard: null,
  diagramWidth: 5000,
  diagramHeight: 3000,
  modules: [
    // 程序内置的所有模块
    {
      id: getUniqueId(),
      class: 'logic',
      name: '输入',
      type: 'In',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7fQ0KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAsODBIMjBjLTUuNSwwLTEwLTQuNS0xMC0xMFYzMGMwLTUuNSw0LjUtMTAsMTAtMTBoNjBjNS41LDAsMTAsNC41LDEwLDEwdjQwQzkwLDc1LjUsODUuNSw4MCw4MCw4MHoiLz4NCjxnPg0KCTxyZWN0IHg9IjEwIiB5PSIzNSIgY2xhc3M9InN0MSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIi8+DQoJPHBhdGggZD0iTTQxLDUyLjZ2LTAuNWMxLjQtMC4xLDEuNi0wLjIsMS42LTEuN3YtNi44YzAtMS41LTAuMi0xLjYtMS42LTEuN3YtMC41aDQuOHYwLjVjLTEuNCwwLjEtMS42LDAuMi0xLjYsMS43djYuOA0KCQljMCwxLjUsMC4yLDEuNiwxLjYsMS43djAuNUg0MXoiLz4NCgk8cGF0aCBkPSJNNTkuMyw0MS45Yy0xLDAtMS40LDAuMi0xLjUsMWMtMC4xLDAuNi0wLjEsMS4zLTAuMSwyLjl2Ni45aC0wLjZsLTcuNy04LjloMGwwLDQuMmMwLDEuNiwwLjEsMi40LDAuMSwyLjkNCgkJYzAuMSwwLjksMC41LDEuMSwxLjcsMS4ydjAuNUg0N3YtMC41YzEtMC4xLDEuNS0wLjMsMS41LTEuMWMwLjEtMC41LDAuMS0xLjMsMC4xLTIuOXYtMy43YzAtMS4zLTAuMS0xLjMtMC40LTEuOA0KCQljLTAuNC0wLjQtMC43LTAuNi0xLjYtMC42di0wLjVoMi43bDcuNSw4LjVoMHYtNGMwLTEuNi0wLjEtMi40LTAuMS0yLjljLTAuMS0wLjgtMC41LTEtMS43LTEuMXYtMC41aDQuMlY0MS45eiIvPg0KPC9nPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjkwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSI1MCIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['inputValue'],
      inputPorts: [],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '输出',
      type: 'Out',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7fQ0KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAsODBIMjBjLTUuNSwwLTEwLTQuNS0xMC0xMFYzMGMwLTUuNSw0LjUtMTAsMTAtMTBoNjBjNS41LDAsMTAsNC41LDEwLDEwdjQwQzkwLDc1LjUsODUuNSw4MCw4MCw4MHoiLz4NCjxnPg0KCTxyZWN0IHg9IjEwIiB5PSIzNSIgY2xhc3M9InN0MSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIi8+DQoJPHBhdGggZD0iTTM4LjEsNDEuMmMzLjEsMCw1LjksMi4zLDUuOSw1LjdjMCwzLjctMi44LDYtNi4xLDZjLTMuMywwLTUuOS0yLjQtNS45LTUuN0MzMiw0NCwzNC4zLDQxLjIsMzguMSw0MS4yTDM4LjEsNDEuMnoNCgkJIE0zNy43LDQxLjhjLTIsMC0zLjgsMS42LTMuOCw0LjljMCwzLjIsMS45LDUuNSw0LjQsNS41YzIsMCwzLjgtMS42LDMuOC00LjlDNDIsNDMuNyw0MCw0MS44LDM3LjcsNDEuOEwzNy43LDQxLjh6Ii8+DQoJPHBhdGggZD0iTTU3LjMsNDEuOWMtMSwwLjEtMS41LDAuMy0xLjUsMWMwLDAuNS0wLjEsMS4yLTAuMSwyLjdWNDdjMCwyLTAuMywzLjUtMS4zLDQuNmMtMC44LDAuOC0yLDEuMi0zLjIsMS4yDQoJCWMtMS4xLDAtMi4xLTAuMi0yLjktMC44Yy0xLjEtMC44LTEuNi0yLjEtMS42LTQuMnYtNC4xYzAtMS42LTAuMi0xLjctMS41LTEuOHYtMC41aDQuN3YwLjVjLTEuNCwwLjEtMS41LDAuMi0xLjUsMS44djMuNw0KCQljMCwyLjgsMS4yLDQuNCwzLjMsNC40YzIuNSwwLDMuMy0yLDMuMy00Ljh2LTEuM2MwLTEuNSwwLTIuMi0wLjEtMi44Yy0wLjEtMC43LTAuNS0wLjktMS43LTF2LTAuNWg0LjJWNDEuOXoiLz4NCgk8cGF0aCBkPSJNNjcuOCw0NC4yYy0wLjItMC45LTAuNC0xLjMtMC42LTEuNmMtMC4zLTAuNC0wLjYtMC41LTEuOS0wLjVoLTEuMnY4LjRjMCwxLjQsMC4yLDEuNiwxLjgsMS43djAuNWgtNS4ydi0wLjUNCgkJYzEuNi0wLjEsMS44LTAuMywxLjgtMS43di04LjRoLTFjLTEuNSwwLTEuOSwwLjItMi4xLDAuNWMtMC4yLDAuMy0wLjQsMC44LTAuNiwxLjZoLTAuNWMwLjEtMS4xLDAuMi0yLjMsMC4yLTMuMmgwLjQNCgkJYzAuMywwLjQsMC41LDAuNCwxLDAuNGg3LjFjMC41LDAsMC42LTAuMSwwLjktMC40aDAuNGMwLDAuOCwwLjEsMi4xLDAuMiwzLjFMNjcuOCw0NC4yeiIvPg0KPC9nPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwIiB5MT0iNTAiIHgyPSIwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [{ name: 'in0', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }],
      outputPorts: []
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑与',
      type: 'And',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjE1IiB5PSIxNSIgY2xhc3M9InN0MCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjcwIi8+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDEiIHdpZHRoPSI1IiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAiIHkxPSI3MCIgeDI9IjAiIHkyPSI3MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwIiB5MT0iMzAiIHgyPSIwIiB5Mj0iMzAiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMDAiIHkxPSI1MCIgeDI9IjkwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑与',
      type: 'And3',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjE1IiB5PSIxNSIgY2xhc3M9InN0MCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjcwIi8+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDEiIHdpZHRoPSI1IiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAiIHkxPSI4MCIgeDI9IjAiIHkyPSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwIiB5MT0iMjAiIHgyPSIwIiB5Mj0iMjAiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMDAiIHkxPSI1MCIgeDI9IjkwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMCIgeTE9IjUwIiB4Mj0iMCIgeTI9IjUwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.2, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'in2', anchor: [0, 0.8, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑与',
      type: 'And5',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjQ1IiB5PSIyOSIgY2xhc3M9InN0MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQyIi8+DQo8cmVjdCB4PSI0MS4zIiB5PSIxMCIgY2xhc3M9InN0MSIgd2lkdGg9IjMuOCIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjQxLjMiIHkxPSI4NSIgeDI9IjMxLjMiIHkyPSI4NSIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjQxLjMiIHkxPSIxNSIgeDI9IjMxLjMiIHkyPSIxNSIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjQxLjMiIHkxPSI1MCIgeDI9IjMxLjMiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjQxLjMiIHkxPSI2Ny41IiB4Mj0iMzEuMyIgeTI9IjY3LjUiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSI0MS4zIiB5MT0iMzIuNSIgeDI9IjMxLjMiIHkyPSIzMi41Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 100,
        height: 100
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.15, -1, 0, 31.25, 0], value: '' },
        { name: 'in1', anchor: [0, 0.325, -1, 0, 31.25, 0], value: '' },
        { name: 'in2', anchor: [0, 0.5, -1, 0, 31.25, 0], value: '' },
        { name: 'in3', anchor: [0, 0.675, -1, 0, 31.25, 0], value: '' },
        { name: 'in4', anchor: [0, 0.85, -1, 0, 31.25, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑或',
      type: 'Or',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjUiIGhlaWdodD0iODAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjcwIiB4Mj0iMCIgeTI9IjcwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIzMCIgeDI9IjAiIHkyPSIzMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNTIuNSIgY3k9IjUwIiByPSIzNy41Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑或',
      type: 'Or3',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjUiIGhlaWdodD0iODAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjgwIiB4Mj0iMCIgeTI9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIyMCIgeDI9IjAiIHkyPSIyMCIvPg0KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNTIuNSIgY3k9IjUwIiByPSIzNy41Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSI1MCIgeDI9IjAiIHkyPSI1MCIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.2, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'in2', anchor: [0, 0.8, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑或',
      type: 'Or5',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjQxLjMiIHk9IjEwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMy44IiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNDEuMyIgeTE9Ijg1IiB4Mj0iMzEuMyIgeTI9Ijg1Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNDEuMyIgeTE9IjE1IiB4Mj0iMzEuMyIgeTI9IjE1Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNDEuMyIgeTE9IjUwIiB4Mj0iMzEuMyIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNDEuMyIgeTE9IjY3LjUiIHgyPSIzMS4zIiB5Mj0iNjcuNSIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjQxLjMiIHkxPSIzMi41IiB4Mj0iMzEuMyIgeTI9IjMyLjUiLz4NCjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjY3LjUiIGN5PSI1MCIgcj0iMjIuNSIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 100,
        height: 100
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.15, -1, 0, 31.25, 0], value: '' },
        { name: 'in1', anchor: [0, 0.325, -1, 0, 31.25, 0], value: '' },
        { name: 'in2', anchor: [0, 0.5, -1, 0, 31.25, 0], value: '' },
        { name: 'in3', anchor: [0, 0.675, -1, 0, 31.25, 0], value: '' },
        { name: 'in4', anchor: [0, 0.85, -1, 0, 31.25, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '逻辑非',
      type: 'Not',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iOTAiIHkxPSIxMCIgeDI9IjEwIiB5Mj0iOTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjEwIiB4Mj0iOTAiIHkyPSI5MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iNTAiIHgyPSIwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [{ name: 'in0', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '3取2',
      type: 'Coincidence23',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDN7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxNSIgeT0iMTUiIGNsYXNzPSJzdDAiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MCIvPg0KPHJlY3QgeD0iMTAiIHk9IjEwIiBjbGFzcz0ic3QxIiB3aWR0aD0iNSIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwIiB5MT0iODAiIHgyPSIwIiB5Mj0iODAiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMCIgeTE9IjIwIiB4Mj0iMCIgeTI9IjIwIi8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAiIHkxPSI1MCIgeDI9IjAiIHkyPSI1MCIvPg0KPGc+DQoJDQoJCTxyZWN0IHg9IjE1IiB5PSIyNi42IiB0cmFuc2Zvcm09Im1hdHJpeCgxIC0xLjA5NTIwMWUtMDMgMS4wOTUyMDFlLTAzIDEgLTUuNDczMTk4ZS0wMiA1Ljc1MTQ0MGUtMDIpIiBjbGFzcz0ic3QzIiB3aWR0aD0iNzUiIGhlaWdodD0iNDYuOSIvPg0KCTxwYXRoIGQ9Ik00NS4zLDU2LjljLTAuNSwxLjYtMC45LDMuMi0xLjMsNC43SDMwLjl2LTAuOGMxLjktMS45LDMuOS0zLjgsNS42LTUuOGMyLjItMi41LDQuMy01LjIsNC4zLTguMmMwLTIuOC0xLjUtNC41LTQtNC41DQoJCWMtMi40LDAtMy45LDEuOS00LjgsMy4ybC0wLjgtMC44bDIuMS0yLjljMS4xLTEuMSwyLjgtMiw0LjgtMmMzLjIsMCw2LDIuMiw2LDUuOGMwLDIuOS0xLjMsNC45LTQuNiw4LjNsLTQuOCw0LjhoNi40DQoJCWMxLjksMCwyLjMtMC4xLDMuNC0yLjNMNDUuMyw1Ni45eiIvPg0KCTxwYXRoIGQ9Ik00OS41LDYzLjJoLTJsNy43LTI0LjNoMi4xTDQ5LjUsNjMuMnoiLz4NCgk8cGF0aCBkPSJNNjguNSw0OC44YzMuMSwwLjUsNC45LDIuNyw0LjksNS4yYzAsNS43LTYuOSw4LTkuMiw4Yy0xLjYsMC0zLjEtMC43LTMuNi0xLjJjLTAuNS0wLjQtMC42LTAuOC0wLjYtMS4zczAuNS0xLDAuOS0xLjINCgkJYzAuMy0wLjIsMC42LTAuMiwwLjksMGMwLjgsMC44LDIuNCwxLjksNC40LDEuOWMyLjMsMCw0LTEuOCw0LTUuMWMwLTMuMS0yLjQtNC40LTQuNC00LjRjLTAuOCwwLTEuNiwwLjItMi4yLDAuNGwtMC4yLTENCgkJYzMuMS0xLDUuNC0yLjMsNS40LTQuN2MwLTIuMS0xLjUtMy4yLTMuMy0zLjJjLTEuOSwwLTMuMywxLjQtNC4yLDIuN2wtMC44LTAuN2wxLjYtMi4yYzEtMS4xLDIuNi0yLDQuNS0yaDBjMy4yLDAsNS4zLDEuOSw1LjMsNC41DQoJCWMwLDEtMC40LDEuNy0xLDIuNEM3MC4zLDQ3LjUsNjkuNSw0OC4xLDY4LjUsNDguOEw2OC41LDQ4Ljh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 80,
        height: 80
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.2, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'in2', anchor: [0, 0.8, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '4取2',
      type: 'Coincidence24',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDN7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxNSIgeT0iMTUiIGNsYXNzPSJzdDAiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MCIvPg0KPHJlY3QgeD0iMTAiIHk9IjEwIiBjbGFzcz0ic3QxIiB3aWR0aD0iNSIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjEwIiB5MT0iODUiIHgyPSIwIiB5Mj0iODUiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMCIgeTE9IjE1IiB4Mj0iMCIgeTI9IjE1Ii8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8Zz4NCgkNCgkJPHJlY3QgeD0iMTUiIHk9IjI2LjYiIHRyYW5zZm9ybT0ibWF0cml4KDEgLTEuMDk1MjAxZS0wMyAxLjA5NTIwMWUtMDMgMSAtNS40NzMxOThlLTAyIDUuNzUxNDAzZS0wMikiIGNsYXNzPSJzdDMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI0Ni45Ii8+DQoJPHBhdGggZD0iTTQ1LjMsNTYuOWMtMC41LDEuNi0wLjksMy4yLTEuMyw0LjdIMzAuOXYtMC44YzEuOS0xLjksMy45LTMuOCw1LjYtNS44YzIuMi0yLjUsNC4zLTUuMiw0LjMtOC4yYzAtMi44LTEuNS00LjUtNC00LjUNCgkJYy0yLjQsMC0zLjksMS45LTQuOCwzLjJsLTAuOC0wLjhsMi4xLTIuOWMxLjEtMS4xLDIuOC0yLDQuOC0yYzMuMiwwLDYsMi4yLDYsNS44YzAsMi45LTEuMyw0LjktNC42LDguM2wtNC44LDQuOGg2LjQNCgkJYzEuOSwwLDIuMy0wLjEsMy40LTIuM0w0NS4zLDU2Ljl6Ii8+DQoJPHBhdGggZD0iTTQ5LjUsNjMuMmgtMmw3LjctMjQuM2gyLjFMNDkuNSw2My4yeiIvPg0KCTxwYXRoIGQ9Ik03MS4xLDU1LjZWNThjMCwyLjMsMC4yLDIuNSwzLDIuOHYxaC05LjN2LTFjMy4xLTAuMywzLjMtMC41LDMuMy0yLjh2LTIuM0g1OXYtMS4xYzMuNS01LDctOS45LDEwLjUtMTQuNWgxLjZ2MTMuOGgzLjQNCgkJdjEuN0g3MS4xeiBNNjguMSw0NC4xTDY4LjEsNDQuMWMtMi4yLDIuOC00LjUsNi4xLTYuOCw5LjloNi44VjQ0LjF6Ii8+DQo8L2c+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMTAiIHkxPSIzOC4zIiB4Mj0iMCIgeTI9IjM4LjMiLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMCIgeTE9IjYxLjciIHgyPSIwIiB5Mj0iNjEuNyIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 80,
        height: 80
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.15, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.3833, -1, 0, 0, 0], value: '' },
        { name: 'in2', anchor: [0, 0.6166, -1, 0, 0, 0], value: '' },
        { name: 'in3', anchor: [0, 0.85, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    // {
    //   id: getUniqueId(),
    //   name: '存储器',
    //   type: 'Memory',
    //   image: {
    //     dataUrl:
    //       'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSIzMCIgeDI9IjAiIHkyPSIzMCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iNzAiIHgyPSIwIiB5Mj0iNzAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjEwIiB4Mj0iNTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkwIiB5MT0iOTAiIHgyPSI1MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNTAiIHkxPSI1MCIgeDI9IjEwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
    //     rotateAngle: 0,
    //     width: 60,
    //     height: 60
    //   },
    // description: {
    //   data: '',
    //   direction: 'bottom'
    // },
    //   params: [],
    //   inputPorts: [
    //     { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
    //     { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
    //   ],
    //   outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    // },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '前沿延时定时器',
      type: 'TimeDelayActuating',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCgkuc3Qze2ZpbGw6IzIzMTgxNTt9DQo8L3N0eWxlPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjUwIiB5MT0iNTAiIHgyPSI0MCIgeTI9IjUwIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAsOTAiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MCw5MGMyMi4xLDAsNDAtMTcuOSw0MC00MFM3Mi4xLDEwLDUwLDEwIi8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iNTAiIHkxPSI5MCIgeDI9IjUwIiB5Mj0iMTAiLz4NCjxnPg0KCTxyZWN0IHg9Ijc5LjciIHk9IjQ3LjIiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMC4zIiBoZWlnaHQ9IjUuNSIvPg0KCTxnPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9Ijc5LjcsNDcuMiA5MCw1MCA3OS43LDUyLjggCQkiLz4NCgk8L2c+DQo8L2c+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iNTAiIHkxPSI1MCIgeDI9Ijc5LjciIHkyPSI1MCIvPg0KPGc+DQoJDQoJCTxyZWN0IHg9Ijc3LjYiIHk9IjExLjkiIHRyYW5zZm9ybT0ibWF0cml4KDAuNDY5OSAtMC44ODI3IDAuODgyNyAwLjQ2OTkgMzAuOTYwOCA4MC44MjcyKSIgY2xhc3M9InN0MiIgd2lkdGg9IjEwLjMiIGhlaWdodD0iNS41Ii8+DQoJPGc+DQoJCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iNzcuOSwxNy45IDg1LjIsMTAuMSA4Mi44LDIwLjUgCQkiLz4NCgk8L2c+DQo8L2c+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iNDIiIHkxPSI5MS4yIiB4Mj0iODAuMyIgeTI9IjE5LjIiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['timeDelayed'],
      inputPorts: [{ name: 'in0', anchor: [0, 0.5, -1, 0, 24, 0], value: '' }],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '前沿延时定时器',
      type: 'TimeDelayDeactuating',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCgkuc3Qze2ZpbGw6IzIzMTgxNTt9DQo8L3N0eWxlPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjUwIiB5MT0iNTAiIHgyPSI0MCIgeTI9IjUwIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAsOTAiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MCw5MGMyMi4xLDAsNDAtMTcuOSw0MC00MFM3Mi4xLDEwLDUwLDEwIi8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iNTAiIHkxPSI5MCIgeDI9IjUwIiB5Mj0iMTAiLz4NCjxnPg0KCTxyZWN0IHg9IjQ5LjciIHk9IjQ3LjIiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMC4zIiBoZWlnaHQ9IjUuNSIvPg0KCTxnPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjYwLjEsNDcuMiA0OS43LDUwIDYwLjEsNTIuOCAJCSIvPg0KCTwvZz4NCjwvZz4NCjxsaW5lIGNsYXNzPSJzdDAiIHgxPSI4OS43IiB5MT0iNTAiIHgyPSI2MC4xIiB5Mj0iNTAiLz4NCjxnPg0KCQ0KCQk8cmVjdCB4PSI3Ny42IiB5PSIxMS45IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ2OTkgLTAuODgyNyAwLjg4MjcgMC40Njk5IDMwLjk2MDggODAuODI3MikiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMC4zIiBoZWlnaHQ9IjUuNSIvPg0KCTxnPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9Ijc3LjksMTcuOSA4NS4yLDEwLjEgODIuOCwyMC41IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjQyIiB5MT0iOTEuMiIgeDI9IjgwLjMiIHkyPSIxOS4yIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['timeDelayed'],
      inputPorts: [{ name: 'in0', anchor: [0, 0.5, -1, 0, 24, 0], value: '' }],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '设置/重置存储器',
      type: 'SetResetMemory',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iMzAiIHgyPSIwIiB5Mj0iMzAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjcwIiB4Mj0iMCIgeTI9IjcwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iOTAiIHkxPSIxMCIgeDI9IjUwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjkwIiB4Mj0iNTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUwIiB5MT0iNTAiIHgyPSIxMCIgeTI9IjUwIi8+DQo8Zz4NCgk8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPg0KCTxwYXRoIGQ9Ik0zMy44LDIzLjdjLTAuNS0xLjctMS4zLTMuNS0zLjUtMy41Yy0yLDAtMi45LDEuNC0yLjksMi44YzAsMS44LDEuMiwyLjcsMy40LDMuN2MyLjIsMS4xLDQuNiwyLjMsNC42LDUuMQ0KCQljMCwyLjgtMi40LDUtNS45LDVjLTEuMSwwLTItMC4yLTIuNi0wLjRjLTAuNy0wLjItMS0wLjQtMS4zLTAuNWMtMC4yLTAuNS0wLjYtMi44LTAuNy00LjFsMC44LTAuMmMwLjQsMS42LDEuNyw0LjMsNC40LDQuMw0KCQljMS45LDAsMy0xLjIsMy0zYzAtMS45LTEuNC0yLjctMy40LTMuOGMtMS44LTAuOS00LjMtMi4yLTQuMy01YzAtMi42LDIuMS00LjcsNS41LTQuN2MxLjIsMCwyLjQsMC4zLDMuNCwwLjYNCgkJYzAuMSwwLjksMC4yLDIsMC41LDMuN0wzMy44LDIzLjd6Ii8+DQo8L2c+DQo8Zz4NCgk8cmVjdCB4PSIxMCIgeT0iNTAiIGNsYXNzPSJzdDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPg0KCTxwYXRoIGQ9Ik0zOC40LDc2LjZjLTAuMywwLTAuNiwwLTAuOS0wLjFjLTIuMS0wLjEtMy4yLTAuNy00LjQtMi40Yy0wLjktMS4yLTEuOC0yLjgtMi41LTRjLTAuNS0wLjctMC45LTEuMS0yLjMtMS4xaC0wLjd2NA0KCQljMCwyLjIsMC4yLDIuNCwyLjQsMi41djAuN2gtNy4xdi0wLjdjMi4xLTAuMiwyLjQtMC40LDIuNC0yLjVWNjIuOWMwLTIuMi0wLjItMi4zLTIuMy0yLjV2LTAuOGg2LjdjMiwwLDMuMywwLjIsNC4zLDAuOQ0KCQljMS4xLDAuNywxLjcsMS44LDEuNywzLjRjMCwyLjItMS40LDMuNi0zLjMsNC40YzAuNSwwLjgsMS41LDIuNSwyLjMsMy43YzAuOSwxLjQsMS41LDIuMSwyLjEsMi43YzAuNywwLjgsMS4yLDEsMS44LDEuMkwzOC40LDc2LjYNCgkJeiBNMjguNiw2OC4yYzEuMywwLDIuMi0wLjIsMi45LTAuN2MxLTAuOCwxLjQtMS44LDEuNC0zLjJjMC0yLjgtMS44LTMuOC0zLjgtMy44Yy0wLjgsMC0xLjIsMC4xLTEuNCwwLjJjLTAuMiwwLjEtMC4zLDAuNC0wLjMsMS4xDQoJCXY2LjNIMjguNnoiLz4NCjwvZz4NCjxyZWN0IHg9IjEwIiB5PSI1MCIgd2lkdGg9IjUiIGhlaWdodD0iNDAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '驱动块',
      type: 'ActuationBlock',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iMzAiIHgyPSIwIiB5Mj0iMzAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjcwIiB4Mj0iMCIgeTI9IjcwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNTAiIHkxPSIxMCIgeDI9IjUwIiB5Mj0iOTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjUwIiB4Mj0iNTAiIHkyPSI1MCIvPg0KPGc+DQoJPHJlY3QgeD0iMTAiIHk9IjUwIiBjbGFzcz0ic3QyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiLz4NCgk8cGF0aCBkPSJNMzIuMSw3Ni40di0wLjdjMS42LTAuMiwxLjktMC41LDEuNS0xLjVjLTAuNC0xLTAuOC0yLjMtMS40LTMuOGgtNS42Yy0wLjQsMS4yLTAuOCwyLjItMS4xLDMuMmMtMC42LDEuNi0wLjQsMS45LDEuNiwyLjENCgkJdjAuN2gtNS44di0wLjdjMS43LTAuMywyLjEtMC40LDMtMi43bDUuNS0xMy40bDAuOS0wLjJjMS43LDQuNiwzLjQsOS4xLDUuMSwxMy42YzAuOCwyLjMsMS4yLDIuNSwyLjksMi43djAuN0gzMi4xeiBNMjkuNSw2Mi44DQoJCUwyOS41LDYyLjhjLTAuOSwyLjEtMS43LDQuMy0yLjUsNi40aDQuOEwyOS41LDYyLjh6Ii8+DQo8L2c+DQo8Zz4NCgk8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPg0KCTxwYXRoIGQ9Ik0zMi4xLDI3LjRjMi43LDAuNCw0LjcsMS41LDQuNyw0LjFjMCwxLjctMC45LDMuMS0yLjUsMy45Yy0xLjQsMC43LTMuMSwxLTUuMiwxaC02di0wLjdjMi4zLTAuMiwyLjQtMC4zLDIuNC0yLjVWMjIuOQ0KCQljMC0yLjItMC4xLTIuNC0yLjItMi41di0wLjhoN2MyLDAsMy4xLDAuMyw0LDAuOWMwLjksMC42LDEuNSwxLjcsMS41LDIuOUMzNS44LDI1LjksMzMuNiwyNi45LDMyLjEsMjcuNEwzMi4xLDI3LjR6IE0yOS4xLDI3LjENCgkJYzIuOCwwLDQtMS4xLDQtMy4yYzAtMS44LTEtMy4zLTMuNC0zLjNjLTAuNiwwLTEuMiwwLjEtMS41LDAuM2MtMC4yLDAuMi0wLjMsMC41LTAuMywxLjJ2NUgyOS4xeiBNMjcuOSwzMy4xDQoJCWMwLDEuOSwwLjUsMi40LDIuMiwyLjRjMi4xLDAsMy45LTEuMSwzLjktMy43YzAtMi42LTEuOC0zLjgtNS0zLjhoLTEuMVYzMy4xeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'logic',
      name: '带寄存器的驱动块',
      type: 'MemoryWithActuationBlock',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iMzAiIHgyPSIwIiB5Mj0iMzAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjMwIiB4Mj0iMTAwIiB5Mj0iMzAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMCIgeTE9IjcwIiB4Mj0iMCIgeTI9IjcwIi8+DQo8Zz4NCgk8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDIiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIvPg0KCTxwYXRoIGQ9Ik01Ni45LDMyLjJjLTAuMiwwLjktMC43LDMuNC0xLDQuMUg0My44di0wLjdjMi4zLTAuMiwyLjUtMC4zLDIuNS0yLjZWMjNjMC0yLjItMC4yLTIuNC0yLjQtMi41di0wLjhINTF2MC44DQoJCWMtMi4xLDAuMS0yLjMsMC4zLTIuMywyLjV2MTBjMCwxLjQsMC4xLDEuOSwwLjYsMi4yYzAuNSwwLjMsMS40LDAuMywyLjQsMC4zYzEuNCwwLDIuMy0wLjIsMi45LTAuOGMwLjUtMC41LDEtMS4zLDEuNC0yLjYNCgkJTDU2LjksMzIuMnoiLz4NCjwvZz4NCjxnPg0KCTxyZWN0IHg9IjEwIiB5PSI1MCIgY2xhc3M9InN0MiIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIi8+DQoJPHBhdGggZD0iTTU4LjQsNzYuNmMtMC4zLDAtMC42LDAtMC45LTAuMWMtMi4xLTAuMS0zLjItMC43LTQuNC0yLjRjLTAuOS0xLjItMS44LTIuOC0yLjUtNGMtMC41LTAuNy0wLjktMS4xLTIuMy0xLjFoLTAuN3Y0DQoJCWMwLDIuMiwwLjIsMi40LDIuNCwyLjV2MC43aC03LjF2LTAuN2MyLjEtMC4yLDIuNC0wLjQsMi40LTIuNVY2Mi45YzAtMi4yLTAuMi0yLjMtMi4zLTIuNXYtMC44aDYuN2MyLDAsMy4zLDAuMiw0LjMsMC45DQoJCWMxLjEsMC43LDEuNywxLjgsMS43LDMuNGMwLDIuMi0xLjQsMy42LTMuMyw0LjRjMC41LDAuOCwxLjUsMi41LDIuMywzLjdjMC45LDEuNCwxLjUsMi4xLDIuMSwyLjdjMC43LDAuOCwxLjIsMSwxLjgsMS4yTDU4LjQsNzYuNg0KCQl6IE00OC42LDY4LjJjMS4zLDAsMi4yLTAuMiwyLjktMC43YzEtMC44LDEuNC0xLjgsMS40LTMuMmMwLTIuOC0xLjgtMy44LTMuOC0zLjhjLTAuOCwwLTEuMiwwLjEtMS40LDAuMmMtMC4yLDAuMS0wLjMsMC40LTAuMywxLjENCgkJdjYuM0g0OC42eiIvPg0KPC9nPg0KPHJlY3QgeD0iMTAiIHk9IjUwIiB3aWR0aD0iNSIgaGVpZ2h0PSI0MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkwIiB5MT0iNTAiIHgyPSIxMCIgeTI9IjUwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: [],
      inputPorts: [
        { name: 'in0', anchor: [0, 0.3, -1, 0, 0, 0], value: '' },
        { name: 'in1', anchor: [0, 0.7, -1, 0, 0, 0], value: '' }
      ],
      outputPorts: [{ name: 'out0', anchor: [1, 0.3, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '内部节点',
      type: 'InnerNode',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwIiB5MT0iNTAiIHgyPSIwIiB5Mj0iNTAiLz4NCjxnPg0KCQ0KCQk8cmVjdCB4PSIxMCIgeT0iMjYuNiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAtMS4wOTUxODllLTAzIDEuMDk1MTg5ZS0wMyAxIC01LjQ3Mjg1M2UtMDIgNS40Nzg2NTBlLTAyKSIgY2xhc3M9InN0MiIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQ2LjkiLz4NCgk8cGF0aCBkPSJNNjIuNSw0MC40Yy0xLjksMC4xLTIuOCwwLjUtMywyLjFjLTAuMSwxLjEtMC4yLDIuNi0wLjIsNS44VjYyaC0xLjFMNDIuOCw0NC4yaDBsMCw4LjRjMCwzLjIsMC4xLDQuOCwwLjIsNS44DQoJCWMwLjIsMS44LDEsMi4yLDMuNCwyLjR2MWgtOC40di0xYzItMC4xLDIuOS0wLjYsMy4xLTIuM2MwLjEtMS4xLDAuMy0yLjcsMC4zLTUuOXYtNy40YzAtMi41LTAuMS0yLjctMC44LTMuNQ0KCQljLTAuNy0wLjgtMS41LTEuMS0zLjEtMS4ydi0xaDUuNGwxNC45LDE2LjloMC4xdi04YzAtMy4yLTAuMS00LjctMC4yLTUuN2MtMC4yLTEuNi0xLTIuMS0zLjUtMi4ydi0xaDguNFY0MC40eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['P', 'T', 'H'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '边界节点',
      type: 'BoundaryNode',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO30NCjwvc3R5bGU+DQo8cmVjdCB4PSIxMCIgeT0iMTAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGc+DQoJDQoJCTxyZWN0IHg9IjEwIiB5PSIyNi42IiB0cmFuc2Zvcm09Im1hdHJpeCgxIC0xLjA5NTE4OWUtMDMgMS4wOTUxODllLTAzIDEgLTUuNDcyNjQzZS0wMiA1LjQ4MDM0NGUtMDIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iODAiIGhlaWdodD0iNDYuOSIvPg0KCTxwYXRoIGQ9Ik0zOS42LDQ5LjdjMy42LDAuNSw2LjMsMiw2LjMsNS40YzAsMi4zLTEuMyw0LjEtMy4zLDUuMmMtMS44LDEtNC4yLDEuNC03LDEuNGgtOC4xdi0xYzMtMC4yLDMuMi0wLjQsMy4yLTMuM1Y0My43DQoJCWMwLTIuOS0wLjItMy4xLTIuOS0zLjN2LTFoOS4zYzIuNywwLDQuMiwwLjQsNS40LDEuMmMxLjIsMC44LDIsMi4zLDIsMy45YzAsMy4zLTIuOCw0LjYtNC45LDUuMVY0OS43eiBNMzUuNiw0OS4zDQoJCWMzLjgsMCw1LjQtMS41LDUuNC00LjNjMC0yLjUtMS40LTQuNC00LjYtNC40Yy0wLjgsMC0xLjYsMC4yLTEuOSwwLjRjLTAuMywwLjItMC40LDAuNi0wLjQsMS43djYuNkgzNS42eiBNMzQuMSw1Ny4zDQoJCWMwLDIuNiwwLjcsMy4yLDIuOSwzLjJjMi43LDAsNS4yLTEuNSw1LjItNWMwLTMuNC0yLjQtNS02LjctNWgtMS41VjU3LjN6Ii8+DQoJPHBhdGggZD0iTTcyLjksNDAuNGMtMS45LDAuMS0yLjgsMC41LTMsMi4xYy0wLjEsMS4xLTAuMiwyLjYtMC4yLDUuOFY2MmgtMS4xTDUzLjIsNDQuMmgwbDAsOC40YzAsMy4yLDAuMSw0LjgsMC4yLDUuOA0KCQljMC4yLDEuOCwxLDIuMiwzLjQsMi40djFoLTguNHYtMWMyLTAuMSwyLjktMC42LDMuMS0yLjNjMC4xLTEuMSwwLjMtMi43LDAuMy01Ljl2LTcuNGMwLTIuNS0wLjEtMi43LTAuOC0zLjUNCgkJYy0wLjctMC44LTEuNS0xLjEtMy4xLTEuMnYtMWg1LjRsMTQuOSwxNi45aDAuMXYtOGMwLTMuMi0wLjEtNC43LTAuMi01LjdjLTAuMi0xLjYtMS0yLjEtMy41LTIuMnYtMWg4LjRWNDAuNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['P', 'T', 'H'],
      inputPorts: [{ name: 'inlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }],
      outputPorts: [{ name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '阀门',
      type: 'Valve',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEwMCIgeTE9IjUwIiB4Mj0iOTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEwIiB5MT0iNTAiIHgyPSIwIiB5Mj0iNTAiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTAsNTAgMTAsMjYuMyAxMCw3My43ICIvPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1MCw1MCA5MCw3My43IDkwLDI2LjMgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Vp', 'Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '泵',
      type: 'Pump',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSI1MCIgeDI9IjAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUwIiB5MT0iMTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNTAiIHkxPSI5MCIgeDI9IjkwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '加热器',
      type: 'Heater',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iODUiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjUwIiB4Mj0iNTAiIHkyPSIxNS44Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSI1MCIgeDI9IjAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUwIiB5MT0iMTAiIHgyPSI1MCIgeTI9IjAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI1MCIgeTE9IjkwIiB4Mj0iNTAiIHkyPSIxMDAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI1MCIgeTE9IjE1LjgiIHgyPSI1MCIgeTI9Ijg1Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0.5, 0, 0, -1, 0, 0], value: '' },
        { name: 'outlet1', anchor: [0.5, 1, 0, 1, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet11', anchor: [0.5, 0, 0, -1, 0, 0], value: '' },
        { name: 'outlet11', anchor: [0.5, 1, 0, 1, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '分离再热器',
      type: 'SeparatorReheater',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNDgiIHI9IjQwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAwIiB5MT0iNDgiIHgyPSI5MCIgeTI9IjQ4Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTAiIHkxPSI0OCIgeDI9IjAiIHkyPSI0OCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkuNSIgeTE9IjQ4IiB4Mj0iNTAiIHkyPSI4Mi40Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iOTAuNiIgeTE9IjQ4IiB4Mj0iNTAiIHkyPSIxMy40Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNTAiIHkxPSIxMy40IiB4Mj0iNTAiIHkyPSI4Mi40Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '凝汽器',
      type: 'Condenser',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iOTEuNCIgeTE9IjI1LjMiIHgyPSI4MS40IiB5Mj0iMjUuMyIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUwIiB5MT0iMTAiIHgyPSI1MCIgeTI9IjAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI2NS45IiB5MT0iNTAiIHgyPSIzMCIgeTI9IjI1LjMiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzMCIgeTE9IjI1LjMiIHgyPSI4MS40IiB5Mj0iMjUuMyIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjY1LjkiIHkxPSI1MCIgeDI9IjMwIiB5Mj0iNzUuNCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjMwIiB5MT0iNzUuMyIgeDI9IjgxIiB5Mj0iNzUuMyIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkxIiB5MT0iNzUuMyIgeDI9IjgxIiB5Mj0iNzUuMyIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUwIiB5MT0iMTAwIiB4Mj0iNTAiIHkyPSI5MCIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0.5, 0, 0, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [0.5, 1, 0, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0.9, 0.25, 0, 0, 0, 0], value: '' },
        { name: 'inlet2', anchor: [0.9, 0.75, 0, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [0.5, 1, 0, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0.5, 0, 0, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [0.9, 0.25, 0, 0, 0, 0], value: '' },
        { name: 'outlet2', anchor: [0.9, 0.75, 0, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '汽轮机',
      type: 'Turbine',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEwIiB5MT0iMTUiIHgyPSIxMCIgeTI9IjI1Ii8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iOTAiIHkxPSI1MCIgeDI9IjEwMCIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iOTAiIHkxPSI5MCIgeDI9IjEwIiB5Mj0iNzUiLz4NCjxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5MCIgeTE9IjEwIiB4Mj0iMTAiIHkyPSIyNSIvPg0KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjkwIiB5MT0iOTAiIHgyPSI5MCIgeTI9IjEwIi8+DQo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTAiIHkxPSI3NSIgeDI9IjEwIiB5Mj0iMjUiLz4NCjxsaW5lIGNsYXNzPSJzdDAiIHgxPSI5MCIgeTE9IjkwIiB4Mj0iOTAiIHkyPSIxMDAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 80,
        height: 80
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0.1, 0.15, -1, 0, 0, 0], value: '' }
        // { name: 'outlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [0.9, 1, 1, 0, 0, 0], value: '' }
        // { name: 'inlet1', anchor: [0, 0.5, -1, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '反应堆',
      type: 'Reactor',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTAsOTBMNTAsOTBjLTExLDAtMjAtOS0yMC0yMFYzMGMwLTExLDktMjAsMjAtMjBoMGMxMSwwLDIwLDksMjAsMjB2NDBDNzAsODEsNjEsOTAsNTAsOTB6Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMjkuOSIgeTE9IjUwIiB4Mj0iMjQuOSIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNzUiIHkxPSI1MCIgeDI9IjcwIiB5Mj0iNTAiLz4NCjxyZWN0IHg9IjI5LjEiIHk9IjI3LjEiIGNsYXNzPSJzdDIiIHdpZHRoPSI0MS40IiBoZWlnaHQ9IjMuNSIvPg0KPHJlY3QgeD0iMjkuMSIgeT0iMzAuNiIgY2xhc3M9InN0MiIgd2lkdGg9IjQxLjQiIGhlaWdodD0iMy41Ii8+DQo8cmVjdCB4PSI0MC4xIiB5PSIzNC4xIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTkuNSIgaGVpZ2h0PSI0MyIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjI5LjkiIHkxPSI3Mi41IiB4Mj0iMjQuOSIgeTI9IjcyLjUiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI3NC43IiB5MT0iNzIuNSIgeDI9IjY5LjciIHkyPSI3Mi41Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 150,
        height: 150
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 36, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.5, 1, 0, -36, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.72, -1, 0, 36, 0], value: '' },
        { name: 'outlet11', anchor: [1, 0.72, 1, 0, -36, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, -36, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 36, 0], value: '' },
        { name: 'inlet11', anchor: [0, 0.72, -1, 0, 36, 0], value: '' },
        { name: 'outlet1', anchor: [1, 0.72, 1, 0, -36, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '蒸汽发生器',
      type: 'SteamGenerator',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qze2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwLjMsMjkuNWMtNS41LDAtMTAuNCwyLjItMTQsNS43SDI0LjdjLTguMSwwLTE0LjcsNi42LTE0LjcsMTQuNnYwYzAsOCw2LjYsMTQuNiwxNC43LDE0LjZoMzMuNQ0KCWMzLjMsMi42LDcuNSw0LjEsMTIuMSw0LjFjMTAuOSwwLDE5LjctOC44LDE5LjctMTkuNVM4MS4yLDI5LjUsNzAuMywyOS41eiIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjkwIiB5MT0iNTAiIHgyPSI5MyIgeTI9IjUwIi8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNyIgeTE9IjUwIiB4Mj0iMTAiIHkyPSI1MCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjIzLjMiIHkxPSI2Ny43IiB4Mj0iMjMuMyIgeTI9IjY0LjciLz4NCjxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMC4xIiB5MT0iNDkuMSIgeDI9IjcxLjciIHkyPSI0OS4xIi8+DQo8bGluZSBjbGFzcz0ic3QyIiB4MT0iMjMuMyIgeTE9IjU3LjciIHgyPSI3MS43IiB5Mj0iNTcuNyIvPg0KPGxpbmUgY2xhc3M9InN0MiIgeDE9IjIzLjMiIHkxPSI2NC43IiB4Mj0iMjMuMyIgeTI9IjU3LjciLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI3MS43IiB5MT0iNzEuNiIgeDI9IjcxLjciIHkyPSI2OC42Ii8+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzUuMyw1My40YzAtMi40LTEuOS00LjMtNC4zLTQuM3Y4LjZDNzMuNCw1Ny43LDc1LjMsNTUuOCw3NS4zLDUzLjR6Ii8+DQo8bGluZSBjbGFzcz0ic3QzIiB4MT0iNzEiIHkxPSI0OS42IiB4Mj0iNzEiIHkyPSI1Ny4xIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 150,
        height: 150
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, -1, 0, 10, 0], value: '' },
        { name: 'outlet1', anchor: [0.23, 0.69, -1, 0, 0, 0], value: '' },
        { name: 'inlet2', anchor: [1, 0.5, 1, 0, -10, 0], value: '' },
        { name: 'outlet22', anchor: [0.72, 0.72, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [0.23, 0.69, -1, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [0, 0.5, -1, 0, 10, 0], value: '' },
        { name: 'outlet2', anchor: [0.72, 0.72, 1, 0, 0, 0], value: '' },
        { name: 'inlet22', anchor: [1, 0.5, 1, 0, -10, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '稳压器',
      type: 'Stabilizer',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NS41LDkwaC0xMWMtNi42LDAtMTItNS40LTEyLTEyVjIyYzAtNi42LDUuNC0xMiwxMi0xMmgxMWM2LjYsMCwxMiw1LjQsMTIsMTJ2NTZDNjcuNSw4NC42LDYyLjEsOTAsNTUuNSw5MHoiDQoJLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI1MCIgeTE9IjEwMCIgeDI9IjUwIiB5Mj0iOTAiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMi41LDQzLjVjMCwzLjIsMy4yLDUuOSw3LjEsNS45Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDguMSw0My4xYzAsMy41LTMuOCw2LjMtOC41LDYuMyIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ4LjEsNDMuMWMwLTMuMyw0LjItNiw5LjQtNiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTY3LjUsNDVjMC00LjQtNC41LTcuOS0xMC03LjkiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI1MCIgeTE9IjEwIiB4Mj0iNTAiIHkyPSIwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [{ name: 'inlet', anchor: [0.5, 0, 0, 0, 0, 0], value: '' }],
      outputPorts: [{ name: 'outlet', anchor: [0.5, 1, 0, 0, 0, 0], value: '' }]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '发电机',
      type: 'ElectricGenerator',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAsNTBjMC03LjEtNy44LTEzLTE3LjUtMTMiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNS4yLDQ5LjFjMC02LjcsNy45LTEyLjIsMTcuOC0xMi4yIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAsNTBjMCw2LjEsOC41LDExLjEsMTkuMSwxMS4xIi8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODQuNiw0OS4xYzAsNi42LTcsMTEuOS0xNS41LDExLjkiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIwIiB5MT0iNTAiIHgyPSIxMCIgeTI9IjUwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [{ name: 'inlet', anchor: [0, 0.5, 0, 0, 0, 0], value: '' }],
      outputPorts: [
        // { name: 'outlet', anchor: [0.5, 1, 0, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '变速箱',
      type: 'Gearbox',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxyZWN0IHg9IjEwIiB5PSIxMCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MCIgY3k9IjUwIiByPSIyMCIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjAiIHkxPSI1MCIgeDI9IjEwIiB5Mj0iNTAiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI5MCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [
        { name: 'inlet', anchor: [0, 0.5, 0, 0, 0, 0], value: '' },
        { name: 'inlet1', anchor: [1, 0.5, 1, 0, 0, 0], value: '' }
      ],
      outputPorts: [
        { name: 'outlet', anchor: [1, 0.5, 1, 0, 0, 0], value: '' },
        { name: 'outlet1', anchor: [0, 0.5, 0, 0, 0, 0], value: '' }
      ]
    },
    {
      id: getUniqueId(),
      class: 'device',
      name: '螺旋桨',
      type: 'Propeller',
      image: {
        dataUrl:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iNTAiIHI9IjUiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NSw0OS41YzAtMjUuNy0yLjItNDYuNS01LTQ2LjUiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NSw1MGMwLTI2LDIuMi00Ny4xLDUtNDcuMSIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ1LDUwYzAuNSwyNi4xLDMsNDcuMiw1LjYsNDcuMSIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTU1LDQ5LjVjMC41LDI2LjMtMS41LDQ3LjYtNC40LDQ3LjYiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSI0NS4yIiB5MT0iNTAiIHgyPSIzNS4yIiB5Mj0iNTAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
        rotateAngle: 0,
        width: 60,
        height: 60
      },
      description: {
        data: '',
        direction: 'bottom'
      },
      params: ['Qm', 'R', 'l', 'd'],
      inputPorts: [{ name: 'inlet', anchor: [0, 0.5, 0, 0, 20, 0], value: '' }],
      outputPorts: [
        // { name: 'outlet', anchor: [0.5, 1, 0, 0, 0, 0], value: '' }
      ]
    }
  ]
};

const mutations = {
  SHOW_SIDE_BAR: state => {
    state.isShowSideBar = true;
  },
  HIDE_SIDE_BAR: state => {
    state.isShowSideBar = false;
  },
  SET_SIDE_BAR_TITLE: (state, payload) => {
    state.sideBarTitle = payload;
  },
  SHOW_PROPS_BAR: state => {
    state.isShowPropsBar = true;
  },
  HIDE_PROPS_BAR: state => {
    state.isShowPropsBar = false;
  }
  // SHOW_GRID: state => {
  //   state.isShowGrid = true
  // },
  // HIDE_GRID: state => {
  //   state.isShowGrid = false
  // },
  // SET_OPENED_FOLDER: (state, payload) => {
  //   state.openedFolder = payload
  // },
  // SET_OPENED_FILE: (state, payload) => {
  //   state.openedFile = payload
  // }
  // SET_SELECTED_MODULE: (state, payload) => {
  //   state.selectedModule = payload
  //   if (payload !== null) {
  //     const index = state.moduleInUsed.findIndex(
  //       module => module.id === payload.id
  //     )
  //     state.moduleInUsed = [
  //       ...state.moduleInUsed.slice(0, index),
  //       payload,
  //       ...state.moduleInUsed.slice(index + 1)
  //     ]
  //   }
  // },
  // ADD_MODULE: (state, payload) => {
  //   state.moduleInUsed.push(payload)
  // },
  // SET_CONNECT_INFO: (state, payload) => {
  //   state.connectInfo.push(payload)
  // }
  // SET_PAPER_SIZE: (state, payload) => {
  //   const paperSizeTable = {
  //     A0: { width: 841, height: 1189 },
  //     A1: { width: 594, height: 841 },
  //     A2: { width: 420, height: 594 },
  //     A3: { width: 297, height: 420 },
  //     A4: { width: 210, height: 297 },
  //     A5: { width: 148, height: 210 }
  //   }
  //   const [width, height] = [
  //     paperSizeTable[payload].width * 3.78,
  //     paperSizeTable[payload].height * 3.78
  //   ] // *3.78转换为像素
  //   if (state.paperDirection === 'portrait') {
  //     state.paperWidth = width
  //     state.paperHeight = height
  //   } else {
  //     state.paperWidth = height
  //     state.paperHeight = width
  //   }
  // },
  // SET_PAPER_DIRECTION: (state, payload) => {
  //   if (state.paperDirection !== payload) {
  //     ;[state.paperWidth, state.paperHeight] = [
  //       state.paperHeight,
  //       state.paperWidth
  //     ]
  //     state.paperDirection = payload
  //   }
  // }
};

const actions = {
  // LISTEN_FOR_OPEN_FOLDER: ({ commit }) => {
  //   ipcRenderer.on('folder-opened', (event, dirPath, content) => {
  //     commit('SET_OPENED_FOLDER', content)
  //   })
  // }
};

export default {
  state,
  mutations,
  actions
};
