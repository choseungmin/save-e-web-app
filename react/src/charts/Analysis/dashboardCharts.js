const columnChart = (param, division, chartType) => {

  if(null == param || undefined == param) return {};
  console.log(param)

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
      name: 'Installation',
      data: seriesData,
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
};






export {
  columnChart,
}
