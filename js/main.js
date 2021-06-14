//Слайдер

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//Табы

window.addEventListener('DOMContentLoaded', () => {
  let tabSteps = document.querySelectorAll('.what-we-do__step-item'),
  tabContent = document.querySelectorAll('.what-we-do__bottom-block');

  if (tabSteps && tabSteps) {
    document.querySelector('.what-we-do__step-item').classList.add('active');
    document.querySelector('.what-we-do__bottom-block').classList.add('active');
  }

  for (let i = 0; i < tabSteps.length; i++) {
    tabSteps[i].addEventListener('click', (e) => {
      e.preventDefault();
      let tabStepsAttr = e.target.getAttribute('data-tab');

      for (let j = 0; j < tabSteps.length; j++) {
        let tabContentAttr = tabContent[j].getAttribute('data-content');

        if (tabStepsAttr === tabContentAttr) {
          tabSteps[j].classList.add('active');
          tabContent[j].classList.add('active');
        }
        else {
          tabSteps[j].classList.remove('active');
          tabContent[j].classList.remove('active');
        }
      }
    })
  }

  //Меню

  let menu = document.querySelector('.menu'),
  burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  })
})


//аккордеон

$( function() {
  $( "#accordion" ).accordion();
} );
