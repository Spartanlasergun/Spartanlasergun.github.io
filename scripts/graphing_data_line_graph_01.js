const lg = document.getElementById('Line_Graph');



const data = {
  labels: ["10*", "20*", "45*", "75*", "100*"],
  datasets: [{
    label: 'temperature vs time',
    data: [65, 59, 80, 81, 56],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


new Chart(lg, {
  type: 'line',
  data: data,
});

