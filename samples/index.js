'use strict';

var DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];
var DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var getTotal = function (myChart) {
  var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
  return `Total: ${sum}`;
};

Chart.defaults.plugins.doughnutlabel = {
  color: 'red',
  font: {
    size: 32,
  },
};

// Doughnut with multiple lines of text in the center
var ctx = document.getElementById('chart1').getContext('2d');
/* eslint-disable-next-line no-unused-vars */
var myChart1 = new Chart(ctx, {
  type: 'doughnut',
  plugins: [DoughnutLabel],
  data: {
    datasets: [
      {
        data: [4000, 3000, 2000, 1000],
        backgroundColor: DEFAULT_COLORS1,
        label: 'Dataset 1',
      },
    ],
    labels: ['Item one', 'Item two', 'Item three', 'Item four'],
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        fontSize: 20,
        text: 'Multiple lines of text',
      },
      doughnutlabel: {
        api: 'beforeDatasetDraw',
        labels: [
          {
            text: 'The title',
          },
          {
            text: 'The subtitle',
            font: {
              size: '50',
            },
            color: 'grey',
          },
          {
            text: '$100.000',
            font: {
              size: '30',
            },
            color: 'red',
          },
          {
            // hide this label
            display: false,
            text: '95%',
            font: {
              size: '45',
            },
            color: 'green',
          },
        ],
      },
    },
  },
});

// Doughnut with one line of text in the center
ctx = document.getElementById('chart2').getContext('2d');
/* eslint-disable-next-line no-unused-vars */
var myChart2 = new Chart(ctx, {
  type: 'doughnut',
  plugins: [DoughnutLabel],
  data: {
    datasets: [
      {
        data: [4000, 3000, 2000, 1000],
        backgroundColor: DEFAULT_COLORS2,
        label: 'Dataset 1',
      },
    ],
    labels: ['Item one', 'Item two', 'Item three', 'Item four'],
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        fontSize: 20,
        text: 'One line of text',
      },
      doughnutlabel: {
        color: '#bc2c1a',
        labels: [
          {
            text: 'This is one line of text',
            font: {
              size: '60',
              family: 'Arial, Helvetica, sans-serif',
              style: 'italic',
              weight: 'bold',
            },
          },
        ],
      },
    },
  },
});

// Doughnut with one line of text in the center
ctx = document.getElementById('chart3').getContext('2d');
var myChart3 = new Chart(ctx, {
  type: 'doughnut',
  plugins: [DoughnutLabel],
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: DEFAULT_COLORS2,
        label: 'Dataset 1',
      },
    ],
    labels: ['Item one', 'Item two', 'Item three', 'Item four'],
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        fontSize: 20,
        text: 'Calculated value',
      },
      doughnutlabel: {
        paddingPercentage: 25,
        labels: [
          {
            text: getTotal,
            font: {
              size: '60',
              family: 'Arial, Helvetica, sans-serif',
              style: 'italic',
              weight: 'bold',
            },
            color: '#bc2c1a',
          },
        ],
      },
    },
  },
});

document.getElementById('randomizeData').addEventListener('click', function () {
  myChart3.config.data.datasets[0].data = [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
  ];
  myChart3.update();
});
