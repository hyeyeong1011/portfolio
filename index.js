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



    // 타이핑 텍스트
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다.

    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
       
        var tyInt = setInterval(typing,100); // 반복동작 
    }; 
     
    function typing(){ 

       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       }; 
    };



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
})
