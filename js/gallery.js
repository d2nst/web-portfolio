// (portfolio)
$(function () {
  $(window).load(function () {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });
  });

  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var m4 = $('#m4');
  var m5 = $('#m5');

  //라이트박스 초기 설정
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    closeOnBgClick: true,
    closeBtnInside: true,
    gallery: {
      enabled: true,
    },
  });

  $('.g5 .popup-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      closeOnContentClick: true,
      navigateByImgClick: true,
    },
  });

  //정렬 후 설정시작
  //1. 전체 정렬처리하기
  m1.click(function (e) {
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.grid-item',
    });

    //magnific 팝업
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      closeOnBgClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });

  m2.click(function (e) {
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g2',
    });

    //magnific 팝업
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      closeOnBgClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });

  m3.click(function (e) {
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g3',
    });

    //magnific 팝업
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      closeOnBgClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });

  m4.click(function (e) {
    console.log($('.g4 .open-popup-link'));
    e.preventDefault();
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g4',
    });

    //magnific 팝업
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true,
      closeOnBgClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
      },
    });
  });

  m5.click(function (e) {
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g5',
    });

    //magnific 팝업
    $('.g5 .popup-img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        closeOnContentClick: true,
        navigateByImgClick: true,
      },
    });

    e.preventDefault();
  });
});

// (portfolio) 팝업창 닫기
$('body').on('click', '.close-btn', function (e) {
  e.preventDefault();

  $.magnificPopup.close();
});
