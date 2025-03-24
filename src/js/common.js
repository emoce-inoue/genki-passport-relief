const windowValues = {
  get winTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  },
  get winW() {
    return window.innerWidth;
  },
  get winH() {
    return window.innerHeight;
  },
};

const setSlider = () => {
  if (window.Swiper) {
    new window.Swiper('.swiper', {
      loop: true,
      speed: 600,
      pagination: {
        el: '.js-swiper-pagination',
        clickable: true,
        bulletClass: 'js-swiper-bullet',
        bulletActiveClass: 'js-swiper-bullet-active',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

const pointsInfoElms = document.querySelectorAll('.c-points-list__info');
const triggerAnimation = () => {
  pointsInfoElms.forEach((pointsInfoElm) => {
    if (!pointsInfoElm.classList.contains('c-points-list__info--animate')) {
      pointsInfoElm.classList.add('c-points-list__info--animate');

      setTimeout(() => {
        pointsInfoElm.classList.remove('c-points-list__info--animate');
      }, 3800);
    }
  });
};

const initializeKokuchiFlow = () => {
  const patterns = document.querySelectorAll('.c-kokuchi-pattern');
  const pattern1 = document.getElementById('kokuchiPattern1');
  const pattern2 = document.getElementById('kokuchiPattern2');
  const pattern3 = document.getElementById('kokuchiPattern3');
  const pattern4 = document.getElementById('kokuchiPattern4');

  const buttons = document.querySelectorAll('.c-kokuchi-question__button');

  /* eslint-disable no-unused-vars */
  let currentStep1Answer;
  let currentStep2Answer;
  /* eslint-enable no-unused-vars */

  const resetDisplay = () => {
    patterns.forEach((pattern) => {
      pattern.classList.remove('c-kokuchi-pattern--current');
    });
  };

  const highlightButton = (clickedButton, parentElement) => {
    const buttonsInQuestion = parentElement.querySelectorAll('.c-kokuchi-question__button');
    buttonsInQuestion.forEach((button) => button.classList.remove('c-kokuchi-question__button--selected'));
    clickedButton.classList.add('c-kokuchi-question__button--selected');
  };

  const handleButtonClick = (event) => {
    const clickedButton = event.target;
    const answer = clickedButton.textContent.trim();
    const parentElement = clickedButton.closest('.c-kokuchi-question');
    const step = clickedButton.getAttribute('data-step');

    highlightButton(clickedButton, parentElement);

    if (step === '1') {
      // 1問目
      currentStep1Answer = answer;
      resetDisplay();
      if (answer === 'はい') {
        pattern1.classList.add('c-kokuchi-pattern--current');
      } else {
        pattern2.classList.add('c-kokuchi-pattern--current');
      }
      const step2Buttons = document.querySelectorAll('[data-step="2"]');
      step2Buttons.forEach((button) => button.classList.remove('c-kokuchi-question__button--selected'));
    } else if (step === '2') {
      // 2問目
      currentStep2Answer = answer;
      resetDisplay();
      if (answer === 'はい') {
        pattern3.classList.add('c-kokuchi-pattern--current');
      } else {
        pattern4.classList.add('c-kokuchi-pattern--current');
      }
      pattern2.classList.add('c-kokuchi-pattern--current');
    }
  };

  buttons.forEach((button) => button.addEventListener('click', (e) => handleButtonClick(e)));
};

const toggleFloat = () => {
  const float = document.querySelector('.l-sticky-float');
  const startContent = document.querySelector('.l-section-topmessage');
  const startTop = startContent.getBoundingClientRect().top + windowValues.winTop;
  const headerH = document.querySelector('.header').offsetHeight;

  if (startTop <= windowValues.winTop + headerH) {
    float.classList.add('l-sticky-float--show');
  } else {
    float.classList.remove('l-sticky-float--show');
  }
}

window.addEventListener('load', () => {
  const loadElms = document.querySelectorAll('.js-load');
  loadElms.forEach((loadElm) => {
    const classes = Array.from(loadElm.classList);

    if (classes[0] !== 'js-load') {
      loadElm.classList.add(`${classes[0]}--loaded`);
    }

    if (classes.length >= 2 && classes[1] !== 'js-load') {
      loadElm.classList.add(`${classes[1]}--loaded`);
    }
  });
  toggleFloat();
  setSlider();
  triggerAnimation();
  setInterval(triggerAnimation, 5000);
  initializeKokuchiFlow();
});

window.addEventListener('scroll', () => {
  toggleFloat();
});
