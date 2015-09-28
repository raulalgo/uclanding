/*$(".first").backstretch("img/bkgdark.jpg");

function init() {
	window.addEventListener('scroll', function(e){
	    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	        shrinkOn = 200,
	        header = document.querySelector("header");
	    if (distanceY > shrinkOn) {
	        classie.add(header,"smaller");
	    } else {
	        if (classie.has(header,"smaller")) {
	            classie.remove(header,"smaller");
	        }
	    }
	});
}

window.onload = init();

$(".loginlink").click(function() {
  $(".pagecontainer").addClass("blur");
  $(".loginmodal").show();
});

$(".loginmodal").click(function() {
  $(".pagecontainer").removeClass("blur");
  $(".loginmodal").hide();
});*/