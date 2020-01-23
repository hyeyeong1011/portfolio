$(function(){     

    // 네비게이션 스크롤   
    $(window).scroll(function(){

        var scrollTop=$(this).scrollTop();

        if(scrollTop>100){

            $('header').addClass('scroll');

        }else{

            $('header').removeClass('scroll');
            
        };
    });



    // 스크롤스파이
    var speed = 700;	// 스크롤 스피드 수치로 사용할 변수 
	function scrolling(obj){

		if (!obj){	// 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
			$('html, body').animate({scrollTop:0},speed);
		}else{
			var posTop = $(obj).offset().top -80;	// posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
			$('html, body').animate({scrollTop:posTop}, speed )	// body의 스크롤이동 : posTop
		};
	};
	
    $("nav ul li a").click(function(){	// 네비게이션 클릭시

        $("nav ul li a").removeClass('on');
        $(this).addClass('on');

		var direction = $(this).attr("href");	// direction = 클릭한 요소의 href 속성
		scrolling( direction );	// direction 을 인자로 함수 실행
        return false;	// 본래 이벤트 방지 
	});



    // top버튼
    $(window).scroll(function(){

        var scrollTop=$(this).scrollTop();

        if(scrollTop>200){
            $('#top').addClass('active');
        }else{
            $('#top').removeClass('active');
        };
    });

    $('#top').click(function(){   

        var scrollTop=$(this).scrollTop();     

        $('html, body').stop(true).animate({
            scrollTop:0
        });
    });



    // 아이콘 깜박거리기
    function blink(){
        $('#about .box i').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
    }

    $(document).ready(function() {
        blink();
    });




    // 상세페이지 팝업
    $('.info').click(function(){  //팝업 Open 버튼 클릭 시 
        
        $('.pop_bg').css('display','block'); //팝업 뒷배경 display block
        $(this).parents('.pop_container').next('.pop').fadeIn(); //팝업창 display block
        
        $('body').css('overflow','hidden');//body 스크롤바 없애기
    });
        
    $('.pop_close').click(function(){

        $('.pop_bg').css('display','none'); //팝업창 뒷배경 display none
        $('.pop').css('display','none'); //팝업창 display none
        $('body').css('overflow','auto');//body 스크롤바 생성
    });


    // 프로그레스 바
    $(window).scroll(function(){
        
        var scrollTop=$(this).scrollTop();
        var skills=$('#skills').offset().top-200;
        
        if(scrollTop>=skills){
            $('.progress-bar').each(function(){

                $(this).find('.bar').animate({
                    width:$(this).data('percent')
                },2000)
            })
        }
    })


    // 팝업창 more 버튼
    $('.pop .inner > a').click(function(e){

        e.preventDefault();

        $('.sorry').fadeIn(function(){
            $(this).delay(800).fadeOut();
        });

    })

})
