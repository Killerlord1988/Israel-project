'use strict';
var accordion = document.querySelectorAll('.faq__item');

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('faq__answer--active');
  });
  accordion[i].addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      this.classList.toggle('faq__answer--active');
    }
  });
}
