const adviceListEl = document.querySelector('.advice-list');
const scrollLeftBtn = document.querySelector('.advice-list__nav-btn--left');
const scrollRightBtn = document.querySelector('.advice-list__nav-btn--right');

scrollRightBtn.addEventListener('click', scrollList);
scrollLeftBtn.addEventListener('click', scrollList);

function scrollList(e) {
  const MAX_SCROLL = Number(22);
  const MIN_SCROLL = Number(-22);

  let coordination = 0;
  const isRightBtn = e.currentTarget.classList.contains(
    'advice-list__nav-btn--right'
  );

  const intervalId = setInterval(() => {
    if (coordination == MAX_SCROLL || coordination == MIN_SCROLL) {
      clearInterval(intervalId);
      return;
    }

    if (isRightBtn) {
      coordination += 1;
    } else {
      coordination -= 1;
    }

    adviceListEl.scrollBy(coordination, 0);
  }, 30);
}

// ----------------------swipe----------------------------//

adviceListEl.addEventListener('touchstart', handleTouchStart, false);
adviceListEl.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;
  // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
