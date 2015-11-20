// scripts

$( document ).ready(function() {

	var 		canvas = document.getElementById('updating-chart'),
    			ctx = canvas.getContext('2d'),
    			//Bar Chart Data
    			startingData = {
						labels : ["Sep", "Mar"],
						datasets : [
												{
													fillColor : "#0079b1",
													data : [15.2,3.6]
												}
											 ]
					},
					//The options we are going to pass to the chart
					barOptions = {
							barDatasetSpacing : 15,
							barValueSpacing: 10,
							scaleShowGridLines : false,
							// responsive: true,
							// maintainAspectRatio: true,
							invertXY: true
					},
					//Line Chart Data
					lineChartData = {
						labels : ["1980","1990","2000","2010"],
						datasets : [
							{
								fillColor : "rgba(220,220,220,0.5)",
								strokeColor : "rgba(220,220,220,1)",
								pointColor : "rgba(220,220,220,1)",
								pointStrokeColor : "#fff",
								data : [8,10,9,12,13]
							},
							{
								fillColor : "rgba(151,187,205,0.5)",
								strokeColor : "rgba(151,187,205,1)",
								pointColor : "rgba(151,187,205,1)",
								pointStrokeColor : "#fff",
								data : [8,10,9,12,13]
							}
						]

					},

					lineOptions = {

					};

		function chartStart() {
			new Chart(document.getElementById("lineChart").getContext("2d")).Line(lineChartData);
			new Chart(document.getElementById("updating-chart").getContext("2d")).Bar(startingData, barOptions);
		}

	function year1985() {

	// Update one of the points in the second dataset
	// annualLossChart.datasets[0].bar[0].value = Math.random() * 100;

	// annualLossChart.update();

	// Reduce the animation steps for demo clarity.
		new Chart(ctx).Bar(startingData, barOptions);

		startingData.datasets[0].bars[0].value = 5;

		canvas.update();

	}

	chartStart();

	$('#year1985').on('click', function(){

		year1985();

	});

});
