const totalBillPerClassChart = (param) => {

  if(null == param || undefined == param || param.length < 1) return nullChart;

  const seriesData = [];
  const categories = [];

  if(null !== param && undefined !== param) {
    param.map((v, i) => {
      if(i<3) {
        seriesData.push({y: v.value, color: '#ef534f'});
      } else {
        seriesData.push(v.value);
      }
      categories.push(v.siteName);
    })
  }

  return {
    chart: {
      zoomType: 'xy',
      // marginBottom: 50,
      marginRight: 0,
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'bottom',
    },
    xAxis: [{
      categories: categories,
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        formatter: function() {
          return `${this.value/10000} 만원`;
        },
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
      // valueSuffix: '{value} 원'
      formatter: function() {
        return `<span style="color:${this.color}">●</span>${this.x}<br/>${Math.floor(this.y/10000)} 만원`
      }
    },
    legend: {
      enabled: true,
      reversed: true,
      align: 'right',
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
      name: '학급 당 전기요금',
      type: 'column',
      yAxis: 0,
      data: seriesData,
      // data: [{y: 150, color: '#ef534f'}, {y: 138, color: '#ef534f'}, {y: 132, color: '#ef534f'},
      //   127, 115, 101, 97, 85, 75, 69
      // ],
      color: '#dbdbdb',


    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }
};

const totalBillByStudentChart = (param, studentChartSort) => {

  if(null == param || undefined == param || param.length < 1) return nullChart;

  const seriesData = {
    column: [],
    line: []
  };
  const categories = [];

  param.sort((a,b) => {
    if(studentChartSort){
      return b.columnValue-a.columnValue
    }else{
      return b.lineValue-a.lineValue
    }
  });

  if(null !== param && undefined !== param) {
    param.map((v, i) => {
      if(i<3) {
        seriesData.column.push({y: v.columnValue, color: '#ef534f'});
        seriesData.line.push(v.lineValue);
      } else {
        seriesData.column.push(v.columnValue);
        seriesData.line.push(v.lineValue);
      }
      categories.push(v.siteName);
    })
  }

  return {
    chart: {
      // marginBottom: 50,
      marginRight: 0,
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'bottom',
    },
    xAxis: [{
      categories: categories,
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        formatter: function() {
          return `${this.value/10000} 만원`;
        },
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
    }, {
      labels: {
        enabled: false
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
      align: 'right',
      layout: 'vertical',
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
      name: '전기요금',
      type: 'column',
      data: seriesData.column,
      color: '#dbdbdb',
      tooltip: {
        pointFormatter: function(value) {
          return `<span style="color:${this.color}">●</span> 요금: <b>${Math.floor(this.y/10000)} 만원</b><br/>`
        }
      },

    }, {
      name: '학생수',
      yAxis: 1,
      type: 'spline',
      data: seriesData.line,
      tooltip: {
        valueSuffix: ' 명'
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

const totalBillBySexRatioChart = (param) => {

  if(null == param || undefined == param || param.length < 1) return nullChart;

  const seriesData = {
    boyBill: [],
    girlBill: []
  };
  const categories = [];

  if(null !== param && undefined !== param) {
    param.map((v, i) => {
      seriesData.boyBill.push(v.boyBill);
      seriesData.girlBill.push(v.girlBill);
      categories.push(v.siteName);
    })
  }

  return {

    chart: {
      type: 'bar',
      plotBorderWidth: 1,
      // marginBottom: 50,
      marginRight: 0,
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'bottom',
    },
    legend: {
      enabled: true,
      reversed: false,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'top'
    },
    xAxis: {
      title: {
        text: ''
      },
      categories: categories
    },
    tooltip: {
      shared: true,
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function() {
          return `${this.value/10000} 만원`;
        },
        style: {
          color: '#000'
        }
      },
      startOnTick: false,
      endOnTick: false,
      maxPadding: 0.2,
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        }
      }
    },

    series: [{
      name: '남성',
      color: '#4dc9f6',
      data: seriesData.boyBill,
      tooltip: {
        pointFormatter: function(value) {
          return `<span style="color:${this.color}">●</span> 요금: <b>${Math.floor(this.y/10000)} 만원</b><br/>`
        }
      },
    },{
      name: '여성',
      color: '#ef534f',
      data: seriesData.girlBill,
      tooltip: {
        pointFormatter: function(value) {
          return `<span style="color:${this.color}">●</span> 요금: <b>${Math.floor(this.y/10000)} 만원</b><br/>`
        }
      },
    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }

  }
};

const sexRatioChart = (param) => {

  if(null == param || undefined == param || param.length < 1) return nullChart;

  const seriesData = {
    boyCnt: [],
    girlCnt: []
  };
  const categories = [];

  if(null !== param && undefined !== param) {
    param.map((v, i) => {
      seriesData.boyCnt.push(v.boyCnt);
      seriesData.girlCnt.push(v.girlCnt);
      categories.push(v.siteName);
    })
  }


  return {
    chart: {
      type: 'bar',
      marginBottom: 50,
      marginRight: 0,
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'bottom',
    },
    legend: {
      enabled: true,
      reversed: false,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'top',
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return Math.abs(this.value) + '명';
        }
      },
    },
    xAxis: {
      title: {
        text: ''
      },
      categories: categories
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    tooltip: {
      formatter: function () {
        return `${this.point.category}<br/>${this.series.name}: <b>${Math.abs(this.point.y)} 명</b>` // this.point.category  this.series.name  Math.abs(this.point.y)
      },
    },
    series: [{
      name: '남성',
      data: seriesData.boyCnt,
      color: '#4dc9f6'
    }, {
      name: '여성',
      data: seriesData.girlCnt,
      color: '#ef534f'
    }]
  }
};

const totalBillByAreaChart = (param, areaChartSort) => {

  if(null == param || undefined == param || param.length < 1) return nullChart;

  const seriesData = {
    totalBill: [],
    sclArea: []
  };
  const categories = [];

  param.sort((a,b) => {
    if(areaChartSort){
      return b.totalBill-a.totalBill
    }else{
      return b.sclArea-a.sclArea
    }
  });

  if(null !== param && undefined !== param) {
    param.map((v, i) => {
      seriesData.totalBill.push(v.totalBill);
      seriesData.sclArea.push(v.sclArea);
      categories.push(v.siteName);
    })
  }

  return {
    chart: {
      type: 'spline',
      marginBottom: 50,
      marginRight: 0,
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'bottom',
    },
    xAxis: {
      categories: categories
    },
    yAxis: [{
      title: {
        text: ''
      }
    },{
      title: {
        text: ''
      },
      labels: {
        enabled: false
      },
    }],
    legend: {
      enabled: true,
      reversed: true,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'top'
    },
    tooltip: {
      shared: true
    },
    series: [{
      name: '교사면적',
      color: '#4dc9f6',
      yAxis:1,
      data: seriesData.sclArea,
      tooltip: {
        valueSuffix: 'm2'
      }
    }, {
      name: '전기요금',
      color: '#ef534f',
      data: seriesData.totalBill,
      tooltip: {
        pointFormatter: function(value) {
          return `<span style="color:${this.color}">●</span> 요금: <b>${Math.floor(this.y/10000)} 만원</b><br/>`
        }
      },
    }],
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  }
};

const nullChart ={
  chart: {
    // marginBottom: 50,
  },
  title: {
    text: '',
    align: 'center',
    verticalAlign: 'bottom',
  },
  subtitle: {
    text: '',
  },
  xAxis: [{
    categories: [],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: ''
    },
    title: {
      text: ''
    }
  }],
  legend: {
    enabled: false,
  },
  series: [{
    name: '',
    type: 'column',
    yAxis: 0,
    data: [],
    color: '#dbdbdb',
    tooltip: {
      valueSuffix: ''
    }

  }],
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  }
}

export {
  totalBillPerClassChart,
  totalBillByStudentChart,
  totalBillBySexRatioChart,
  sexRatioChart,
  totalBillByAreaChart
}
