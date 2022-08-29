$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 60)
        {
            $('.topo').addClass('navbar-fixed-top', 500);
        } else {
            $('.topo').removeClass('navbar-fixed-top', 500);  
        }
    });
});


//slide
var time;
function startTime(){
	time = setInterval(function(){slideStart()},4000);
}
startTime();

function slideStart(){
	console.log('start');
	var slide = $('.scroll-h .slide')[4].getAttribute("tag");
	
	$(".ativo").next().addClass('ativo').attr('tag', 'ativo');
	$(".ativo").prev().removeClass('ativo').attr('tag', ' ');

	if (slide === 'ativo') {
		$('.scroll-h .slide')[0].setAttribute("tag","ativo");
		$('.scroll-h .slide')[4].setAttribute("tag","");

		$('.scroll-h .slide')[4].setAttribute("class","slide");
		$('.scroll-h .slide')[0].setAttribute("class","slide ativo");
		
	}else{

	}
}

function stopTime(){
	console.log('stop');
	clearInterval(time);
}
$(".scroll-h").hover(function(){
  		stopTime();

  }, function(){
  	startTime()
});

//slide


 function dClose(){
      $(".dialago").fadeOut();
      $(".dialagobox").slideUp();
      $("body").attr('style','overflow:auto');
    }

    function openDialago1(){
      $(".dialago").fadeIn();
      $(".dialagobox").slideDown();
      $("body").attr('style','overflow:hidden');
    }

      function btnCall(e){
      var tag = $(e).attr('tag');
      var tipo = $(e).attr('tipo');

      
      window.open(tag,tipo, 'width=700, height=700');
    }
