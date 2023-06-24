const line_one = document.getElementById('profits');



const data_one = {
  labels: ["2010", "2012", "2014", "2016", "2018"],
  datasets: [{
    label: 'Profits Over Time',
    data: [65000, 59000, 80000, 81000, 56000],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.8
  }]
};


new Chart(line_one, {
  type: 'line',
  data: data_one,
});

