var points = [40, 100, 1, 5, 25, 10];

function ascending() {
	points.sort(function(a, b){return a - b});
  	console.log(points);
}

function descending() {
	points.sort(function(a, b){return b - a});
	console.log(points);
}

function randomSort() {
	points.sort(function(a, b){return 0.5 - Math.random()});
	console.log(points);
}