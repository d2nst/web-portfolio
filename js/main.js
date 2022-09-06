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
  minDisplayTime: 4000,
  in: { effect: 'fadeInUp', delayScale: 1.2, delay: 200 },
  out: { effect: 'fadeOutDown', delayScale: 1.2, delay: 200 },
});
