$(document).ready(function(){       
                var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                    if (startchange.length){
                $(document).scroll(function() { 
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                          $(".navbar-default").css('background-color', '#1A75CF');
                       } else {
                          $('.navbar-default').css('background-color', 'transparent');
                       }
                   });
                    }
                });
				
			
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 850) {
      $(this).addClass("slideon");
    }
  });
});
				
			
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".round-button, .navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
});


$(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
	
		$('.cat').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});


$(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('.port').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});

$(document).ready(function(){
 
  $(window).scroll(function(){
    var barra = $(window).scrollTop();
    var posicion =  (barra * 0.10);
    
    $('.client').css({
      'background-position': '0 -' + posicion + 'px'
    });
 
  });
 
});



$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        
        // Applying the top margin on modal dialog to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 8));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});

$(function() {
  $('#closemodal').click(function() {
    $('#mobi').modal('hide');
});
});