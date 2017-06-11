<template>
  <div class="detail-item">
    <div class="di-header">
      <span class="di-header-label">{{label}}</span>
      <span class="di-header-value">{{value}}<small>{{unit}}</small></span>
    </div>
    <!--<div class="di-chart">-->
      <!--<line-chart :data="sampleData" :options="sampleOptions" :width="200" :height="100"></line-chart>-->
    <!--</div>-->
  </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    name: 'detail-item',
    components: {
      LineChart
    },
    props: ['label', 'value', 'unit'],
    data () {
      return {
        sampleData: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [
            {
              label: 'Delay',
              backgroundColor: '#f87979',
              data: [40, 20, 30, 15, 66]
            }
          ]
        },
        sampleOptions: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                fontColor: '#aaa',
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                fontColor: '#aaa',
                fontSize: 12
              }
            }]
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .detail-item {
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 20px;

    .di-header {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;

      .di-header-label {

      }

      .di-header-value {
        color: #333;
      }

      small {
        padding-left: 5px;
        font-size: 10px;
        color: #888;
      }
    }

    .di-chart {
      margin-top: 10px;
    }
  }
</style>
