const columnChart = (param) => {

  return {
    chart: {
      zoomType: 'xy',
      marginBottom: 100,
    },
    title: {
      text: '<b>최근 1년간 학급 당 전기요금</b>',
      align: 'center',
      verticalAlign: 'bottom',
      y: -30
    },
    subtitle: {
      text: '( 2018.09 ~ 2019.08 )',
      align: 'center',
      verticalAlign: 'bottom',
      y: -10
    },
    xAxis: [{
      categories: ['**초등학교', '**초등학교', '**초등학교',
        '**초등학교', '**초등학교', '**초등학교', '**초등학교',
        '**초등학교', '**초등학교', '**초등학교'
      ],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value} 백만 원',
        style: {
          color: '#000'
        }
      },
      title: {
        text: '',
        style: {
          color: '#000'
        }
      }
    }],
    tooltip: {
      shared: true
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'left',
      verticalAlign: 'top'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      },
      bar: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: '#000'
        }
      }
    },
    series: [{
      name: 'series1',
      type: 'column',
      yAxis: 0,
      data: [{y: 150, color: '#ef534f'}, {y: 138, color: '#ef534f'}, {y: 132, color: '#ef534f'},
        127, 115, 101, 97, 85, 75, 69
      ],
      color: '#dbdbdb',
      tooltip: {
        valueSuffix: ' 백만 원'
      }

    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }
};

const columnLIneChart = (param) => {

  return {
    chart: {
      marginBottom: 100,
    },
    title: {
      text: '<b>최근 1년간 학생 당 전기요금</b>',
      align: 'center',
      verticalAlign: 'bottom',
      y: -30
    },
    subtitle: {
      text: '( 2018.09 ~ 2019.08 )',
      align: 'center',
      verticalAlign: 'bottom',
      y: -10
    },
    xAxis: [{
      categories: ['**초등학교', '**초등학교', '**초등학교',
        '**초등학교', '**초등학교', '**초등학교', '**초등학교',
        '**초등학교', '**초등학교', '**초등학교'
      ],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C 백만 원',
        style: {
          color: '#000'
        }
      },
      title: {
        text: '',
        style: {
          color: '#000'
        }
      }
    }],
    tooltip: {
      shared: true
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'left',
      verticalAlign: 'top'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      },
      bar: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: '#000'
        }
      }
    },
    series: [{
      name: 'series1',
      type: 'column',
      yAxis: 0,
      data: [{y: 150, color: '#ef534f'}, {y: 138, color: '#ef534f'}, {y: 132, color: '#ef534f'},
        127, 115, 101, 97, 85, 75, 69
      ],
      color: '#dbdbdb',
      tooltip: {
        valueSuffix: ' 백만 원'
      }

    }, {
      name: 'series2',
      type: 'spline',
      data: [159, 138, 133, 130, 120, 110, 98, 95, 83, 70],
      tooltip: {
        valueSuffix: ' 백만 원'
      },
      lineWidth: 1,
      color: '#000'
    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }
};

const bubbleChart = (param) => {

  return {

    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      marginBottom: 120,
    },
    title: {
      text: '<b>남녀성비에 따른 전기사용량</b>',
      align: 'center',
      verticalAlign: 'bottom',
      y: -30
    },
    subtitle: {
      text: '( 2018.09 ~ 2019.08 )',
      align: 'center',
      verticalAlign: 'bottom',
      y: -10
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'left',
      verticalAlign: 'top'
    },
    xAxis: {
      title: {
        text: ''
      },
      gridLineWidth: 1,
      labels: {
        format: '{value} kWh'
      },
      plotLines: [{
        color: 'black',
        dashStyle: 'line',
        width: 1,
        value: 0,
        zIndex: 3
      }]
    },

    yAxis: {
      title: {
        text: ''
      },
      startOnTick: false,
      endOnTick: false,
      labels: {
        format: '{value} kWh'
      },
      maxPadding: 0.2,
      plotLines: [{
        color: 'black',
        dashStyle: 'line',
        width: 1,
        value: 0,
        zIndex: 3
      }]
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },

    series: [{
      name: '남성',
      color: '#4dc9f6',
      data: [
        { x: 7, y: 3, z: 5.8 },
        { x: 3, y: -9, z: 9 },
        { x: -12, y: 4, z: 7 },
        { x: -9, y: -9, z: 15 },
        { x: 10, y: -2, z: 4 },
        { x: -5, y: -1, z: 9 },
        { x: 0, y: 3, z: 3 },

      ]
    },{
      name: '여성',
      color: '#ef534f',
      data: [
        { x: 3, y: 7, z: 13.8 },
        { x: 5, y: -2, z: 5.8 },
        { x: -4, y: 9, z: 8 },
        { x: -5, y: -12, z: 6 },
        { x: 10, y: -15, z: 20 },
        { x: -7, y: -10, z: 4 },
        { x: 9, y: 0, z: 8 },

      ]
    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }

  }
};

const barChart = (param) => {


  return {
    chart: {
      type: 'bar',
      marginBottom: 120,
    },
    title: {
      text: '<b>학교 별 남녀성비</b>',
      align: 'center',
      verticalAlign: 'bottom',
      y: -30
    },
    subtitle: {
      text: '( 2018.09 ~ 2019.08 )',
      align: 'center',
      verticalAlign: 'bottom',
      y: -10
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'left',
      verticalAlign: 'top'
    },
    yAxis: {
      title: {
        text: ''
      },
    },
    xAxis: {
      title: {
        text: ''
      },
      categories: ['**초등학교' ,'**초등학교' ,'**초등학교' ,
        '**초등학교' ,'**초등학교' ,'**초등학교' ,'**초등학교' ,
        '**초등학교' ,'**초등학교' ,'**초등학교' ,]
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '남성',
      data: [8,2,-4,9,9,7,-2,4,10,-8],
      color: '#4dc9f6'
    }, {
      name: '여성',
      data: [-2,8,6,-1,-1,-3,8,-6,0,2],
      color: '#ef534f'
    }]
  }
};

const splineChart = (param) => {

  return {
    chart: {
      type: 'spline',
      marginBottom: 120,
    },
    title: {
      text: '<b>학교 별 남녀성비</b>',
      align: 'center',
      verticalAlign: 'bottom',
      y: -30
    },
    subtitle: {
      text: '( 2018.09 ~ 2019.08 )',
      align: 'center',
      verticalAlign: 'bottom',
      y: -10
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'left',
      verticalAlign: 'top'
    },
    series: [{
      name: 'series1',
      color: '#4dc9f6',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'series2',
      color: '#ef534f',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }],
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
  columnLIneChart,
  bubbleChart,
  barChart,
  splineChart
}