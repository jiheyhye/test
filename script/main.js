$(document).ready(function(){


//양쪽 슬라이드 (ul태그에 display:flex;쓴 상태에서)

  // //B.insertBefore.A : A의 앞에 B를 배치한다
  // //A.insertAfter.B : B의 뒤에 A를 배치한다

  // //1. 1번 슬라이드의 앞쪽에 3번을 배치한다
  // $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
  // //2. 3번 슬라이드가 왼쪽으로 1200px 만큼 이동하여 1번이 화면 중앙에 배치되도록 한다
  // $('.slide > ul').css('margin-left','-1200px');
  // //3. 움직이는 함수
  // function moveSlide(){
  //   $('.slide > ul').animate({'margin-left':'-2400px'},300,function(){
  //     $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
  //     $('.slide > ul').css('margin-left','-1200px');
  //   });
  // }

  // function moveSlide2(){
  //   $('.slide > ul').animate({'margin-left':'0px'},300,function(){
  //     $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
  //     $('.slide > ul').css('margin-left','-1200px');
  //   });
  // }

  // //4. 3초마다 자동으로 움직이게 한다
  // let Timer = setInterval(moveSlide,3000);



//위아래 슬라이드
  //1. 순서 바꾸기
  $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
  //2. 위로 올리기
  $('.slide > ul').css('margin-top','-300px');
  //3. 움직이는 함수 만들기
  function moveTop(){
    $('.slide > ul').animate({'margin-top':'-600px'},500,function(){
      $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
      $('.slide > ul').css('margin-top','-300px');
    });
  }
  let Timer = setInterval(moveTop,3000);



});