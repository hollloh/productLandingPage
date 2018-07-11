
let navLink = document.getElementsByClassName('nav-link');
let headerBorder = document.getElementById('header');
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('mouseenter', function(e) {
    e.target.style.backgroundColor = '#3f4';
    e.target.style.color = '#000';
    e.target.style.fontSize = '20px';
    headerBorder.style.borderColor = '#3f4';
    headerBorder.style.borderWidth = '3px';
  });
  navLink[i].addEventListener('mouseleave', function(e) {
    e.target.style.backgroundColor = '#000';
    e.target.style.color = '#fff';
    e.target.style.fontSize = '16px';
    headerBorder.style.borderColor = '#fff';
    headerBorder.style.borderWidth = '1px';
  });
}

let headerImg = document.getElementById('header-img');
let headerImgHover = document.getElementById('header-img-hover');
headerImg.addEventListener('mouseenter', function(e) {
  e.target.style.backgroundColor = '#3f4';
  e.target.style.opacity = '0';
  headerImgHover.style.width = '54px';
  headerImgHover.style.height = '54px';
  headerBorder.style.borderColor = '#3f4';
  headerBorder.style.borderWidth = '3px';
});
headerImg.addEventListener('mouseleave', function(e) {
  e.target.style.backgroundColor = '#000';
  e.target.style.opacity = '1';
  headerImgHover.style.width = '51px';
  headerImgHover.style.height = '51px';
  headerBorder.style.borderColor = '#fff';
  headerBorder.style.borderWidth = '1px';
});


let video = document.getElementById('video');
video.addEventListener('mouseenter', function(e) {
  e.target.style.borderColor = '#3f4';
});
video.addEventListener('mouseleave', function(e) {
  e.target.style.borderColor = '#000';
});


let emailLabel = document.getElementById('email-label')
let email = document.getElementById('email');
let submit = document.getElementById('submit');
email.addEventListener('focus', function(e) {
  e.target.style.borderColor = '#3f4';
  e.target.style.color = '#3f4';
  emailLabel.style.color = '#3f4';
});
email.addEventListener('blur', function(e) {
  e.target.style.borderColor = '#fff';
  e.target.style.color = '#fff';
  emailLabel.style.color = '#fff';
});
submit.addEventListener('focus', function(e) {
  e.target.style.borderColor = '#3f4';
  e.target.style.color = '#3f4';
  emailLabel.style.color = '#3f4';
});
submit.addEventListener('blur', function(e) {
  e.target.style.borderColor = '#fff';
  e.target.style.color = '#fff';
  emailLabel.style.color = '#fff';
});


let pbc = document.getElementsByClassName('pbc');
let price = document.getElementsByClassName('product-price');
for (let i = 0; i < pbc.length; i++) {
  pbc[i].addEventListener('mouseenter', function(e) {
    e.target.style.backgroundColor = '#3f4';
    price[i].style.color = '#000';
    price[i].style.fontSize = '20px';
  });
  pbc[i].addEventListener('mouseleave', function(e) {
    e.target.style.backgroundColor = '#000';
    price[i].style.color = '#fff'
    price[i].style.fontSize = '16px';
  });
}



