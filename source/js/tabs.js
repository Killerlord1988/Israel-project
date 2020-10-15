var programsBtn = document.querySelectorAll('.programs__btn');
var programsInfo = document.querySelectorAll('.programs__info-block');
var programsLabel = document.querySelectorAll('.programs__label');

var styles = {
  active: {
    opacity: 1,
    display: 'block',
  },
  inactive: {
    opacity: 0,
    display: 'none',
  },
}

var STATE = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

function toggleInfoState(info, state) {
  info.style.opacity = styles[state].opacity;
  info.style.display = styles[state].display;
}

toggleInfoState(programsInfo[0], STATE.ACTIVE)

function hideProgramsInfo() {
  Object.keys(programsInfo).forEach(function (el) {
    toggleInfoState(programsInfo[el], STATE.INACTIVE)
    programsLabel[el].classList.remove('programs__label--checked')
  })
};

function showProgramsInfo(el) {
  if (programsBtn[el].checked) {
    toggleInfoState(programsInfo[el], STATE.ACTIVE)
    programsLabel[el].classList.add('programs__label--checked')
  }
}

Object.keys(programsBtn).forEach(function (el) {
  programsBtn[el].addEventListener('change', function () {
      hideProgramsInfo();
      showProgramsInfo(el);
    })
});

Object.keys(programsLabel).forEach(function (el) {
  programsLabel[el].addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      hideProgramsInfo();
      programsBtn[el].checked = 'checked';
      if (programsBtn[el].checked) {
        programsLabel[el].classList.add('programs__label--checked')
      }
      showProgramsInfo(el);
    }
  })
});
