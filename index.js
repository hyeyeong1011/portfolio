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
			var posTop = $(obj).offset().top -60;	// posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
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

        $('#top').click(function(){   
    
            $('html, body').stop(true).animate({
                scrollTop:0
            });
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
    $('.info').click(function(){  
        
        $('.pop_bg').css('display','block'); 
        $(this).parents('.pop_container').next('.pop').fadeIn(); 
        $('body').css('overflow','hidden');
    });
        
    $('.pop_close').click(function(){

        $('.pop_bg').css('display','none'); 
        $('.pop').css('display','none'); 
        $('body').css('overflow','auto');
    });




    // 프로그레스 바
    // $(window).scroll(function(){
        
    //     var scrollTop=$(this).scrollTop();
    //     var skills=$('#skills').offset().top-500;
        
    //     if(scrollTop>=skills){

    //         $('.progress-bar').each(function(){

    //             $(this).find('.bar').animate({
    //                 width:$(this).data('percent')
    //             },2000);

    //         });

    //     }
    // });




    // skills 영역 애니메이션
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        var skills=$('#skills').offset().top-300;

        if(scrollTop>=skills){

            $(".skill-item:nth-child(1)").addClass('flip-bottom-1');
            $(".skill-item:nth-child(2)").addClass('flip-bottom-2');
            $(".skill-item:nth-child(3)").addClass('flip-bottom-3');
            $(".skill-more").addClass('flip-bottom-4');

        }
    })


    
    // 상세정보 준비 안내 창
    $('.muji .inner > a, .naver .inner > a').click(function(e){

        e.preventDefault();

        $('.sorry').fadeIn(function(){
            $(this).delay(800).fadeOut();
        });

    });

});
