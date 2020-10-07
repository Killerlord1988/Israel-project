var programsBtn = document.querySelectorAll('.programs__btn');
var programsInfo = document.querySelectorAll('.programs__info-block');
var programsLabel = document.querySelectorAll('.programs__label');

programsInfo[0].style.opacity = 1;
programsInfo[0].style.display = 'block';

function hiddenProgramsInfo() {
  Object.keys(programsInfo).forEach(function (el) {
    programsInfo[el].style.opacity = 0;
    programsInfo[el].style.display = 'none';
    programsLabel[el].classList.remove('programs__label--checked')

  })
};

Object.keys(programsBtn).forEach(function (el) {
  programsBtn[el].addEventListener('change', function () {
    hiddenProgramsInfo();
    if (programsBtn[el].checked) {
      programsInfo[el].style.opacity = 1;
      programsInfo[el].style.display = 'block';
      programsLabel[el].classList.add('programs__label--checked')
    }
  })
});
