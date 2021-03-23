var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
 btn.removeClass('show');
 }
 });

 btn.on('click', function(e) {
 e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
 });


// Counter



 $(document).ready(function($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }


    
    //Count up code
    function countUp() {
        $('.counter').each(function() {
          var $this = $(this), // <- Don't touch this variable. It's pure magic.
              countTo = $this.attr('data-count');
              ended = $this.attr('ended');

        if ( ended != "true" && isScrolledIntoView($this) ) {
            $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 10000, //duration of counting
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        $this.attr('ended', 'true');
        }
        });
    }
    //Start animation on page-load
    if ( isScrolledIntoView(".counter") ) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function() {
        if ( isScrolledIntoView(".counter") ) {
            countUp();
        }
    });
});





// toggle



function myFunction() {
  var checkBox = document.getElementById("chk");
  var firstwnd = document.getElementById("firstwnd");
  var scndwnd = document.getElementById("scndwnd");

  if (checkBox.checked == true){
    firstwnd.style.display = "block";
  } else {
    firstwnd.style.display = "none";
  }

  
  if (checkBox.checked == false){
    scndwnd.style.display = "block";
    } else {
      scndwnd.style.display = "none";
    }
}
