const piec = document.getElementById('Pie_Chart');

const pie_data = {
  labels: ["Male", "Female", "Transgender", "Asexual"],
  datasets: [{
    label: 'US Gender Data',
    data: [40, 45, 10, 5],
  }]
};


new Chart(piec, {
  type: 'pie',
  data: pie_data,
});

