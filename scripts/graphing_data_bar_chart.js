const ctx = document.getElementById('myChart');

const bars = {
  labels: ['1600', '1615', '1630', "1660", "1690"],
  datasets: [
    {
      label: "Scottish Imports",
      data: [1, 2, 3, 4, 5],
      borderColor: '#36A2EB',
      backgroundColor: '#9BD0F5',
    },
  ]
};


new Chart(ctx, {
type: 'bar',
data: bars,
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});

