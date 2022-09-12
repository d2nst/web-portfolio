// * mouse cursor custom start *
let mousePointer = document.querySelector('.cursor');
let mouseHover = document.querySelectorAll('[cursor-class]');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mousePointer.style.top = e.pageY + 'px';
  mousePointer.style.left = e.pageX + 'px';
}

mouseHover.forEach((link) => {
  link.addEventListener('mouseleave', () => {
    mousePointer.classList.remove('link-grow');
  });
  link.addEventListener('mouseover', () => {
    mousePointer.classList.add('link-grow');
  });
});
//  mouse cursor custom 완성

// (NAV) header - 네브바 홈화면에서 보이지 않고 어바웃부터 나타나게 만듬
$(window).scroll(function () {
  const $windowTop = $(window).scrollTop();
  const $aboutSection = $('#about').offset().top - 100;
  if ($windowTop > $aboutSection) {
    $('header').fadeIn(1000).css({ display: 'block' });
    $('#home').addClass('section1-p');
  } else {
    $('header').fadeOut().css({ display: 'none' });
    $('#home').removeClass('section1-p');
  }
});
// (NAV) 완성

//  dark mode start

// dark mode start 완성 !

// (HOME) textillate start
$('.tlt').textillate({
  loop: true,
  in: {
    effect: 'fadeInRight',
    delayScale: 1.2,
    delay: 200,
  },
  out: {
    effect: 'fadeOut',
    delay: 80,
  },
});
// (HOME) textillate start 완성

// (ABOUT) wow js
new WOW().init();
// (ABOUT) wow js 완성

// (ABOUT) progress bar
const progress = document.querySelectorAll('.skill__bar');
const triggerPoint = document.querySelector('.skillset').offsetTop - 700;

let excuted = false;

window.addEventListener('scroll', () => {
  let scrollAmt = window.scrollY;
  if (scrollAmt > triggerPoint) {
    if (!excuted) {
      progress.forEach((item) => numAnimation(item));
    }
    excuted = true;
  }
});

function numAnimation(item) {
  let initialRate = 0;
  let targetRate = item.getAttribute('data-num');
  let progressBar = item.querySelector('.skill_value');

  let numAinmate = setInterval(() => {
    if (initialRate == targetRate) {
      clearInterval(numAinmate);
    }
    initialRate++;
    progressBar.style.width = `${initialRate}%`;
  }, 20);
}
// (ABOUT) progress bar 완성

// (SERVICE) swiper.js
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    1170: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// arrow up transition
var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  'stroke-dashoffset 10ms linear';
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();
$(window).scroll(updateProgress);
var offset = 150;
var duration = 550;
$(window).on('scroll', function () {
  if ($(this).scrollTop() > offset) {
    $('.progress-wrap').addClass('active-progress');
  } else {
    $('.progress-wrap').removeClass('active-progress');
  }
});
$('.progress-wrap').on('click', function (event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, duration);
  return false;
});

//
const $link = $('.g-menu ul li a');

function menuActive(link) {
  link.each(function (idx, item) {
    $(item).on('click', function (e) {
      e.preventDefault();
      link.removeClass('active');
      $(item).addClass('active');
    });
  });
}
menuActive($link);

// Deylight Color Theme Toggle
$('.switch-handle').click(function (e) {
  e.preventDefault();
  $('.header-wrap, main').toggleClass('act');
});
