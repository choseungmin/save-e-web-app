const columnChart = (param, division, chartType) => {

  if(null == param || undefined == param) return nullChart;

  const seriesData = [];
  const categories = [];

  if(null !== param && undefined !== param) {
    param[division].map((v, i) => {
      seriesData.push(v.value);
      categories.push(v.category);
    })
  }


  return {

    title: {
      text: ''
    },
    chart: {
      type: chartType,
      backgroundColor: 'none',
      height: '200px'
    },
    xAxis: {
      categories: categories,
      tickInterval: Math.round(categories.length/6),
      labels: {
        style: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      title: '',
      labels: {
        style: {
          color: '#fff'
        }
      }
    },
    legend: {
      enabled: false,
      align: 'right',
      verticalAlign: 'bottom',
      itemStyle: {
        color: '#fff'
      }
    },

    series: [{
      name: '전기 사용량',
      data: seriesData,
      color: '#fff',
      tooltip: {
        valueSuffix: ' kWh'
      }
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }

  }
};

const nullChart = {

  title: {
    text: ''
  },
  chart: {
    backgroundColor: 'none',
    height: '200px'
  },
  xAxis: {
    categories: [],
    labels: {
      style: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    title: '',
    labels: {
      style: {
        color: '#fff'
      }
    }
  },
  legend: {
    enabled: false,
    align: 'right',
    verticalAlign: 'bottom',
    itemStyle: {
      color: '#fff'
    }
  },

  series: [{
    name: '',
    data: [],
    color: '#fff'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  },
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }

}




export {
  columnChart,
}
