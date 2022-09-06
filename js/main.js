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
// * dark mode start *

// * textillate start *
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

// header show

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

//

// h2 - title 위에서 아래로 fadein
function tit() {
  let scrollTop =
    (document.documentElement.scrollTop ||
      window.pageYOffset ||
      window.scrollX) +
    window.innerHeight / 2;

  const sect2 = document.getElementById('about');
  const sec2 = document.querySelector('.tit');

  if (scrollTop > sect2.offsetTop) {
    sec2.classList.add('show');
  }
}
window.addEventListener('scroll', tit);
