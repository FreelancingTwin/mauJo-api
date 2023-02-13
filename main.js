const video = document.getElementsByClassName('video');

Array.from(video).forEach(el => el.addEventListener('click', function() {
  // console.log(el)
  if (el.paused) {
    el.play();
  } else {
    el.pause();
  }
}));


//jquery for the dateRange picker calendar
$(function() {
  $('input[name="datefilter"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(72, 'hour'),
    locale: {
      format: 'M/DD hh:mm A'
    }
  });
});


//chart js for the busy timings graph
// (async function() {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 },
//   ];

//   new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'line',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Busy hours',
//             data: data.map(row => row.count),
//             borderColor: 'green',
//             // backgroundColor:"orange",
//             fill:"origin",
//             tension:.3,
            
//           }
//         ]
//       }
//     }
//   );
// })();


// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart'
//       }
//     }
//   },
// };

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Fully Rounded',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       borderWidth: 2,
//       borderRadius: Number.MAX_VALUE,
//       borderSkipped: false,
//     },
//     {
//       label: 'Small Radius',
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//       borderWidth: 2,
//       borderRadius: 5,
//       borderSkipped: false,
//     }
//   ]
// };

// const actions = [
//   {
//     name: 'Randomize',
//     handler(chart) {
//       chart.data.datasets.forEach(dataset => {
//         dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
//       });
//       chart.update();
//     }
//   },
// ];

// Retrieve the canvas element
const ctx = document.getElementById('acquisitions').getContext('2d');

// Define the data for the bar graph
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Color Count',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the background color for the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Set the border color for the bars
        borderWidth: 1, // Set the border width for the bars
        borderRadius: 100,
      borderSkipped: false,
    }]
};

// Create the bar graph
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true // Start the y-axis at zero
            }
        }
    }
});
