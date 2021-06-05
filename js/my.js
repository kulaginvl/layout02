document.querySelector('.c-hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  if (this.classList.contains('is-active')) {
    this.classList.remove('is-active');
    document.querySelector('#checkbox-menu').classList.remove('nav-active');
    document.body.classList.remove('body-active');
  } else {
    this.classList.add('is-active');
    document.querySelector('#checkbox-menu').classList.add('nav-active');
    document.body.classList.add('body-active');
  }
});

let rating = document.querySelector('.rating'),
  ratingItem = document.querySelectorAll('.rating-item');

rating.onclick = function (e) {
  let target = e.target;
  if (target.classList.contains('rating-item')) {
    target.classList.add('active', 'current-active');
  }
};

rating.onmouseover = function (e) {
  let target = e.target;
};
