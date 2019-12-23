<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Chart from 'chart.js'
import bus from '../../bus'

export default {
  name: 'Chart',
  // props: {
  //   labels: {
  //     type: Array,
  //     default: () => []
  //   },
  //   data: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data() {
    return {
      chart: null
    }
  },
  created() {
    // bus.$on('current-file-updated', () => {
    //   console.log('current-file-updated')
    //   const { modules } = this.currentFile.data
    //   const { params } = modules[
    //     modules.findIndex(module => module.id === this.selectedModule.id)
    //   ]
    //   const data = params[params.findIndex(param => param.name === 'P')].history
    //   const labels = data.map((_, index) => index + 1)
    //   this.chart.destroy()
    //   this.chart = this.createChart(this.$refs.chart, labels, data)
    // })
    // bus.$on('set-selected-module', () => {
    //   console.log('set-selected-module')
    //   if (this.selectedModule) {
    //     const { modules } = this.currentFile.data
    //     const { params } = modules[
    //       modules.findIndex(module => module.id === this.selectedModule.id)
    //     ]
    //     const data =
    //       params[params.findIndex(param => param.name === 'P')].history
    //     const labels = data.map((_, index) => index + 1)
    //     this.chart.destroy()
    //     this.chart = this.createChart(this.$refs.chart, labels, data)
    //   }
    // })
  },
  mounted() {
    const data = [
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      47,
      41,
      41,
      38.3,
      38.3,
      38.8,
      38.8,
      38.8,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39,
      39
    ]

    const labels = data.map((_, index) => index)
    this.chart = this.createChart(this.$refs.chart, labels, data)
    // this.chart = this.createChart(this.$refs.chart, [], [])
  },
  computed: {
    ...mapState({
      currentFile: state => state.editor.currentFile,
      selectedModule: state => state.editor.selectedModule
    })
  },
  methods: {
    createChart(ctx, labels = [], data = []) {
      return new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: '压力',
              data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
              pointRadius: 0
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          animation: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  // suggestedMax: 300
                  // min: 0,
                  // max: 300
                  // stepSize: 30,
                  // maxTicksLimit: 11
                },
                scaleLabel: {
                  display: true,
                  labelString: '时间(s)',
                  fontSize: 15
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  // beginAtZero: true,
                  suggestedMin: 35,
                  suggestedMax: 50
                  // max: 500,
                  // min: -500
                },
                scaleLabel: {
                  display: true,
                  // labelString: '流量(kg/s)',
                  // labelString: '温度(℃)',
                  // labelString: '压力(MPa)',
                  // labelString: '反应性(pcm)',
                  labelString: '功率(MW)',
                  // labelString: '阀门开度',
                  fontSize: 15
                }
              }
            ]
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
