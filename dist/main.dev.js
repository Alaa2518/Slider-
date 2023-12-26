"use strict";

var img = document.querySelectorAll('.slider-container img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var slideNumber = document.querySelector('#slide-number');
var i = 0;
var pagenation = document.createElement('ul');
pagenation.setAttribute('id', 'pagenation-ul');

for (var index = 1; index <= img.length; index++) {
  var _li = document.createElement('li');

  _li.setAttribute('data-index', index);

  _li.setAttribute('class', 'list');

  var text = document.createTextNode(index);

  _li.appendChild(text);

  pagenation.appendChild(_li);
}

document.querySelector('.indicator').appendChild(pagenation);
var li = document.querySelectorAll('ul li');

removeActive = function removeActive() {
  for (var l = 0; l < img.length; l++) {
    img[l].classList.remove('active');
    li[l].classList.remove('active');
  }
};

removeActive();

addActive = function addActive() {
  img[i].classList.add('active');
  li[i].classList.add('active');
  var slideNum = i + 1;
  document.getElementById('slide-number').innerText = "slide number #" + slideNum;

  if (i === 0) {
    prev.classList.add('disabled');
  } else if (i === img.length - 1) {
    next.classList.add('disabled');
  } else {
    prev.classList.remove('disabled');
    next.classList.remove('disabled');
  }
};

addActive();
prev.addEventListener('click', function (e) {
  i--;

  if (i > -1) {
    removeActive();
    addActive();
  } else {
    i = 0;
    return false;
  }
});
next.addEventListener('click', function (e) {
  i++;

  if (i < img.length) {
    removeActive();
    addActive();
  } else {
    i = img.length - 1;
    return false;
  }
});
document.addEventListener('click', function (e) {
  if (e.target.classList[0] === 'list') {
    removeActive();
    i = e.target.dataset.index - 1;
    addActive();
  }
});