const setSlider = () => {
  if (window.Swiper) {
    new window.Swiper('.swiper', {
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
  let currentStep1Answer = null;
  let currentStep2Answer = null;
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

window.addEventListener('load', () => {
  const mvElements = [
    { selector: '.section-hero__title-pop', loadedClass: 'section-hero__title-pop--loaded' },
    { selector: '.section-hero__title-pop-elm', loadedClass: 'section-hero__title-pop-elm--loaded' },
    { selector: '.section-hero__title-main', loadedClass: 'section-hero__title-main--loaded' },
    { selector: '.section-hero__title-main-flash--top', loadedClass: 'section-hero__title-main-flash--top--loaded' },
    { selector: '.section-hero__title-main-flash--center', loadedClass: 'section-hero__title-main-flash--center--loaded' },
    { selector: '.section-hero__title-main-flash--btm', loadedClass: 'section-hero__title-main-flash--btm--loaded' },
    { selector: '.section-hero__title-main-flash-img', loadedClass: 'section-hero__titleline-title-flash-img--loaded' },
  ];
  
  document.querySelectorAll(mvElements.map((item) => item.selector).join(',')).forEach((element) => {
    const matchingItem = mvElements.find((item) => element.matches(item.selector));
    if (matchingItem) {
      element.classList.add(matchingItem.loadedClass);
    }
  });

  setSlider();
  triggerAnimation();
  setInterval(triggerAnimation, 5000);
  initializeKokuchiFlow();
});
