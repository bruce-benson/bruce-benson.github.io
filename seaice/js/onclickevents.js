// on click event scripts

$( document ).ready(function() {

	var barchart 	= $('.barchart'),
		percent 	= $('.percent'),
		linechart	= $('.linechart'),
		world		= $('.world');

	$('#year1980').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year1980').addClass('selected');

		barchart.attr("src","img/barchart_0000_1980.jpg");
		percent.text("-52%");
		linechart.attr("src","img/linechart_0000_1980.jpg");
		world.attr("src","img/world_0000_1980.jpg");

	});
	$('#year1985').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year1985').addClass('selected');

		barchart.attr("src","img/barchart_0001_1985.jpg");
		percent.text("-58%");
		linechart.attr("src","img/linechart_0001_1985.jpg");
		world.attr("src","img/world_0001_1985.jpg");

	});
	$('#year1990').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year1990').addClass('selected');

		barchart.attr("src","img/barchart_0002_1990.jpg");
		percent.text("-62%");
		linechart.attr("src","img/linechart_0002_1990.jpg");
		world.attr("src","img/world_0002_1990.jpg");

	});
	$('#year1995').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year1995').addClass('selected');

		barchart.attr("src","img/barchart_0003_1995.jpg");
		percent.text("-61%");
		linechart.attr("src","img/linechart_0003_1995.jpg");
		world.attr("src","img/world_0003_1995.jpg");

	});
	$('#year2000').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year2000').addClass('selected');

		barchart.attr("src","img/barchart_0004_2000.jpg");
		percent.text("-59%");
		linechart.attr("src","img/linechart_0004_2000.jpg");
		world.attr("src","img/world_0004_2000.jpg");

	});
	$('#year2005').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year2005').addClass('selected');

		barchart.attr("src","img/barchart_0005_2005.jpg");
		percent.text("-62%");
		linechart.attr("src","img/linechart_0005_2005.jpg");
		world.attr("src","img/world_0005_2005.jpg");

	});
	$('#year2010').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year2010').addClass('selected');

		barchart.attr("src","img/barchart_0006_2010.jpg");
		percent.text("-68%");
		linechart.attr("src","img/linechart_0006_2010.jpg");
		world.attr("src","img/world_0006_2010.jpg");

	});
	$('#year2012').on('click', function(){

		$('.timeline li').removeClass('selected');
		$('#year2012').addClass('selected');

		barchart.attr("src","img/barchart_0007_2012.jpg");
		percent.text("-78%");
		linechart.attr("src","img/linechart_0007_2012.jpg");
		world.attr("src","img/world_0007_2012.jpg");

	});

	//streamline code later... this is super redundant...

});
