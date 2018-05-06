/*
 * Theme:B&W Hosting
 * Creator:imzlab
 * website:imzlab.com
 * Java Script Init Script
 * This File Include Init Scripts related to 
 * Slider, Stats Counter & Bottom-to-Top Button
 */
 
//Start the Slider
$(document).ready(function(){
  $('.slider').slider();
});

//Start Counter Trigger
var stat_counter_start=0;
$(window).scroll(function() {
   var hT = $('#stats').offset().top,
	   hH = $('#stats').outerHeight(),
	   wH = $(window).height(),
	   wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
		StartStats();
   }
});

//Stats Counter Function
function StartStats(){
	if(stat_counter_start==0){
			/*start counter*/
			$('#stats').each( function(i){
				console.log(i);
				function count($this) {
				var current = parseInt($this.html(), 10);
				current = current + 50;
				$this.html(++current);
				if (current > $this.data('count')) {
					$this.html($this.data('count'));
				} else {
					setTimeout(function() {
						count($this)
					}, 2);
				}
			}
			$(".stat-count").each(function() {
				$(this).data('count', parseInt($(this).html(), 10));
				$(this).html('0');
				count($(this));
			});
					
		}); 
		stat_counter_start=1;
	}
}
				
//Bottom to Top
$(document).ready(function(){	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

//Collapsible Code

$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});