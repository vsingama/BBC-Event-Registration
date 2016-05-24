$("div#slider div.elements ul.points li").click(function()
{
	$("div#slider div.elements ul.points li.active").removeClass("active");
	$(this).addClass("active");
	$("div#slider .slide.active").removeClass("active");
	$($("div#slider .slide").get( $(this).index() )).addClass("active");
});
$("div#slider div.elements ul.arrows li.left").click(function()
{
	next_slide( -1 );
});
$("div#slider div.elements ul.arrows li.right").click(function()
{
	next_slide( 1 );		
});
function next_slide( index_next )
{
	var new_index = $("div#slider .slide.active").index()+index_next;
	if(new_index<0)
	{
		new_index = $("div#slider .slide").length-1;
	}
	else if(new_index>$("div#slider .slide").length-1)
	{
		new_index = 0;
	}
	$("div#slider div.elements ul.points li").removeClass("active");
	$("div#slider .slide.active").removeClass("active");
	$($("div#slider div.elements ul.points li").get( new_index )).addClass("active");
	$($("div#slider .slide").get( new_index )).addClass("active");
}
var interval_slider_autorotate = null;
$("div#slider").mouseenter(function(me)
{
	console.log("mouseover");
	clearInterval( interval_slider_autorotate );
});
$("div#slider").mouseleave(function(me)
{
	console.log("mouseout");
	clearInterval( interval_slider_autorotate );
	interval_slider_autorotate  = setInterval(function()
		{
			next_slide( 1 );
		}, 5*1000);
});
clearInterval( interval_slider_autorotate );
interval_slider_autorotate  = setInterval(function()
	{
		next_slide( 1 );
	}, 5*1000);
$(window).load(function()
{
});


$("div#ch-list div.list .channels li a").click(function(me)
{
	$("div#ch-list div.list .channels li a.active").removeClass("active");
	$("div#ch-list div.list .panel-tvs.active").removeClass("active");
	$(this).addClass("active");
	$($("div#ch-list div.list .panel-tvs").get( $($(this).parent()).index() )).addClass("active");
	return false;
});