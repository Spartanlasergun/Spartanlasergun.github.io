const ctx = document.getElementById('hairColor');
const ice = document.getElementById('iceCream');
const pres = document.getElementById('president');

const bars_one = {
	labels: ['blonde', 'brunette', 'black', "red", "auburn"],
	datasets: [
		{
			label: "Hair Colour",
			data: [10, 25, 13, 14, 5],
			borderColor: '#36A2EB',
			backgroundColor: '#9BD0F5',
		},
	]
};

const bars_two = {
	labels: ['chocolate', 'vanilla', 'strawberry', 'coconut'],
	datasets: [
		{
			label: "Ice Cream Flavours",
			data: [25, 11, 12, 4],
			borderColor: '#36A2EB',
			backgroundColor: [
				'#562D04',
				'#C7C163',
				'#AB41A4',
				'#FFFFFF'
			]
		},
	]
};

const bars_three = {
	labels: ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'],
	datasets: [
		{
			label: "Was Donald Trump a good President?",
			data: [25, 11, 12, 4, 1],
			borderColor: '#36A2EB',
			backgroundColor: [
				'#C7C163'
			]
		},
	]
};

const Chart_01 = new Chart(ctx, {
type: 'bar',
data: bars_one,
options: {
	scales: {
		y: {
			beginAtZero: true
		}
	}
}
});

const Chart_02 = new Chart(ice, {
type: 'bar',
data: bars_two,
options: {
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		y: {
			beginAtZero: true
		}
	}
}
});

const Chart_03 = new Chart(pres, {
type: 'bar',
data: bars_three,
options: {
	scales: {
		y: {
			beginAtZero: true
		}
	}
}
});



