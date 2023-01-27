'use strict';

/////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  console.log('button clicked');
  headerEl.classList.toggle('nav-open');
});

/////////////////////////////////////////////////////////
// Make question-answer work

const quesBoxEl = document.querySelectorAll('.ques-box');
console.log(quesBoxEl);

for (const quesBox of quesBoxEl) {
  quesBox.addEventListener('click', function () {
    if (quesBox.classList.contains('ques-box--1')) {
      document.querySelector('.answer-box--1').classList.toggle('hide-answer');
    } else if (quesBox.classList.contains('ques-box--2')) {
      document.querySelector('.answer-box--2').classList.toggle('hide-answer');
    } else if (quesBox.classList.contains('ques-box--3')) {
      document.querySelector('.answer-box--3').classList.toggle('hide-answer');
    } else if (quesBox.classList.contains('ques-box--4')) {
      document.querySelector('.answer-box--4').classList.toggle('hide-answer');
    } else if (quesBox.classList.contains('ques-box--5')) {
      document.querySelector('.answer-box--5').classList.toggle('hide-answer');
    }
  });
}

/////////////////////////////////////////////////////////
// Mobile close nav after clicking

const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

for (const link of allLinks) {
  link.addEventListener('click', function () {
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
}

//////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////
// Log in

const loginLink = document.querySelector('.main-nav-login');
const loginBox = document.querySelector('.section-login');

const overlayEl = document.querySelector('.section-overlay');

loginLink.addEventListener('click', function () {
  loginBox.classList.remove('hide-login');
  overlayEl.classList.remove('hide-overlay');
});

//////////////////////////////////////////////////////
// Sign up
const signupLink = document.querySelector('.main-nav-signup');
const signupBox = document.querySelector('.section-signup');

signupLink.addEventListener('click', function () {
  signupBox.classList.remove('hide-signup');
  overlayEl.classList.remove('hide-overlay');
});

const messageLoginEl = document.querySelector('.message-login');

messageLoginEl.addEventListener('click', function () {
  signupBox.classList.add('hide-signup');
  loginBox.classList.remove('hide-login');
});

//////////////////////////////////////////////////////
// close login / signup

const formClose = document.querySelectorAll('.form-close');

for (const closeEl of formClose) {
  closeEl.addEventListener('click', function () {
    loginBox.classList.add('hide-login');
    signupBox.classList.add('hide-signup');
    overlayEl.classList.add('hide-overlay');
  });
}

overlayEl.addEventListener('click', function () {
  loginBox.classList.add('hide-login');
  signupBox.classList.add('hide-signup');
  overlayEl.classList.add('hide-overlay');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    loginBox.classList.add('hide-login');
    signupBox.classList.add('hide-signup');
    overlayEl.classList.add('hide-overlay');
  }
});
