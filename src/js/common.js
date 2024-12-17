const setSlider = () => {
  new Swiper('.swiper', {
    loop: true,
    speed: 600,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const elements = document.querySelectorAll('.c-points-list__info');
const triggerAnimation = () => {
  elements.forEach((element) => {
    if (!element.classList.contains('animate')) {
      element.classList.add('animate');

      setTimeout(() => {
        element.classList.remove('animate');
      }, 3800);
    }
  });
};

const initializeKokuchiFlow = () => {
  const pattern1 = document.getElementById('kokuchiPattern1');
  const pattern2 = document.getElementById('kokuchiPattern2');
  const pattern3 = document.getElementById('kokuchiPattern3');
  const pattern4 = document.getElementById('kokuchiPattern4');

  const buttons = document.querySelectorAll('.c-kokuchi-question__btnbox-btn');

  /* eslint-disable no-unused-vars */
  let currentStep1Answer = null;
  let currentStep2Answer = null;
  /* eslint-enable no-unused-vars */

  const resetDisplay = () => {
    [pattern1, pattern2, pattern3, pattern4].forEach((pattern) => {
      pattern.style.display = 'none';
    });
  };

  const highlightButton = (clickedButton, parentElement) => {
    const buttonsInQuestion = parentElement.querySelectorAll('.c-kokuchi-question__btnbox-btn');
    buttonsInQuestion.forEach((button) => button.classList.remove('active'));
    clickedButton.classList.add('active');
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
        pattern1.style.display = 'block';
      } else {
        pattern2.style.display = 'block';
      }
      const step2Buttons = document.querySelectorAll('[data-step="2"]');
      step2Buttons.forEach((button) => button.classList.remove('active')); // 2問目のボタンからactiveを外す
    } else if (step === '2') {
      // 2問目
      currentStep2Answer = answer;
      resetDisplay();
      if (answer === 'はい') {
        pattern3.style.display = 'block';
      } else {
        pattern4.style.display = 'block';
      }
      pattern2.style.display = 'block';
    }
  };

  buttons.forEach((button) => button.addEventListener('click', (e) => handleButtonClick(e)));
};

window.addEventListener('load', function () {
  const mvElement = document.querySelectorAll(
    '.section-hero__titleline-pop, .section-hero__titleline-pop-elm, .section-hero__titleline-title, .section-hero__titleline-title-flash-elm, .section-hero__titleline-title-flash-elm--1, .section-hero__titleline-title-flash-elm--2, .section-hero__titleline-title-flash-elm--3, .section-hero__titleline-title-flash-elm-img'
  );
  mvElement.forEach(function(element) {
    element.classList.add('loaded');
  });
  setSlider();
  triggerAnimation();
  setInterval(triggerAnimation, 5000);
  initializeKokuchiFlow();
  // Formrun.init();
});
