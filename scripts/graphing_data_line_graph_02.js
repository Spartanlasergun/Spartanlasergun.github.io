const line_one = document.getElementById('profits');
const line_two = document.getElementById('temperature');
const line_three = document.getElementById('heights');


const data_one = {
  labels: ["2010", "2012", "2014", "2016", "2018"],
  datasets: [{
    label: 'Profits Over Time',
    data: [65000, 59000, 80000, 81000, 56000],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.6
  }]
};


new Chart(line_one, {
  type: 'line',
  data: data_one,
});

/*------------------------------------------------------------------*/

const data_two = {
  labels: ["0*", "10*", "20*", "30*", "40*"],
  datasets: [{
    label: '(Cum Freq) Temperature vs Time',
    data: [50, 75, 80, 100, 150],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.3
  }]
};


new Chart(line_two, {
  type: 'line',
  data: data_two,
});

/*------------------------------------------------------------------*/

const data_three = {
  labels: ["2012", "2013", "2014", "2015", "2016"],
  datasets: [{
    label: 'Plant growth(cm) vs time(years)',
    data: [0, 10, 15, 17, 20],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


new Chart(line_three, {
  type: 'line',
  data: data_three,
});
