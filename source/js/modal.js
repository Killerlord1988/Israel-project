'use strict';
var modalTemplate = document.querySelector('#modal__call')
  .content
  .querySelector('.modal');
var modal = modalTemplate.cloneNode(true);

var successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
var success = successTemplate.cloneNode(true);

var callRequest = document.querySelector('.top-block__request-call')

function addModalHandler() {
  var modalCall = document.body.querySelector('main .modal');
  var overlayArea = modalCall.querySelector('.overlay')
  var closeButton = modalCall.querySelectorAll('.close');

  function removeListener() {
    overlayArea.removeEventListener('click', removeModalOverlayClick);
    Object.keys(closeButton).forEach(function(el) {
      closeButton[el].addEventListener('click', removeModalClick);
    })
    document.removeEventListener('keydown', removeModalPressEscape);
  }

  function addListener() {
    document.body.style.overflow = 'hidden';
    overlayArea.addEventListener('click', removeModalOverlayClick);
    Object.keys(closeButton).forEach(function(el) {
      closeButton[el].addEventListener('click', removeModalClick);
    })
    document.addEventListener('keydown', removeModalPressEscape);
  }

  function removeModal() {
    document.body.style.overflow = 'auto';
    if (modalCall.parentNode) {
      modalCall.parentNode.removeChild(modalCall);
    }
  }

  function removeModalClick() {
    removeModal();
    removeListener();
  };

  function removeModalOverlayClick(evt) {
    if (evt.target === overlayArea) {
      removeModal();
      removeListener();
    }
  };

  function removeModalPressEscape(evt) {
    if (evt.key === 'Escape') {
      removeModal();
      removeListener();
    }
  };
  addListener();
}

callRequest.addEventListener('click', function (evt) {
  evt.preventDefault();
  document.body.querySelector('main').prepend(modal);

  var nameInput = document.querySelector('.modal__input-field-name');
  nameInput.focus();

  addModalHandler();

  var modalForm = document.querySelector('.modal__data-block');
  var inputData = modalForm.querySelectorAll('.modal__input-field');

  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var arrData = [];
    Object.keys(inputData).forEach(function (el) {
      arrData.push(inputData[el].value);
    })
    localStorage.setItem('personData', JSON.stringify(arrData));
    var modal = document.body.querySelector('main .modal');
    modal.parentNode.removeChild(modal);
    document.body.querySelector('main').prepend(success);
    addModalHandler();
  });
})

var wantGo = document.querySelector('.want-go__form');
var inputPhone = wantGo.querySelector('.want-go__input-field');

wantGo.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var arrData = [];
  arrData.push(inputPhone.value);
  localStorage.setItem('personData', JSON.stringify(arrData));
  document.body.querySelector('main').prepend(success);
  addModalHandler();
})

var moreDetails = document.querySelector('.more-details__form');
var inputData = moreDetails.querySelectorAll('.more-details__form input');

moreDetails.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var arrData = [];
  Object.keys(inputData).forEach(function (el) {
    arrData.push(inputData[el].value);
  })
  localStorage.setItem('personData', JSON.stringify(arrData));
  document.body.querySelector('main').prepend(success);
  addModalHandler();
})

