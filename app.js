// Init navbar
const ui = new UI;

// Use above init variable to init method
ui.showNavbar();
document.querySelector('.hamburger').hidden = false;
ui.showLandingPage();
ui.showDesc();
ui.showFooter();

// Init Moda1
const modal1 = new Modal1;
modal1.showSignUp();

// Init Modal2
const modal2 = new Modal2;
modal2.showSignIn();

// Init Modal3
const modal3 = new Modal3;
modal3.showEatUp();

// Form blur event listeners
document.getElementById('userNameSignUp').addEventListener('blur',validateUserNameSignUp);
document.getElementById('passwordSignUp').addEventListener('blur',validatePasswordSignUp);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

document.getElementById('userNameSignIn').addEventListener('blur',validateUserNameSignIn);
document.getElementById('passwordSignIn').addEventListener('blur',validatePasswordSignIn);

// User Name Sign Up
function validateUserNameSignUp () {
  const userNameSignUp = document.getElementById('userNameSignUp');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(userNameSignUp.value)){
    userNameSignUp.classList.add('is-invalid');
    setTimeout(function() {userNameSignUp.classList.remove('is-invalid')}, 2500)
  } else {
    userNameSignUp.classList.remove('is-invalid');
  }
}

// Password Sign Up
function validatePasswordSignUp () {
  let password = document.getElementById('passwordSignUp');
  let re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(password.value)){
    password.classList.add('is-invalid');
    setTimeout(function() {password.classList.remove('is-invalid')}, 2500)
  } else {
    password.classList.remove('is-invalid');
  }
}

// Zipcode
function validateZip () {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
    setTimeout(function() {zip.classList.remove('is-invalid')}, 2500)
  } else {
    zip.classList.remove('is-invalid');
  }
}

// Email
function validateEmail () {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
    setTimeout(function() {email.classList.remove('is-invalid')}, 2500)
  } else {
    email.classList.remove('is-invalid');
  }
}

// Phone
function validatePhone () {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
    setTimeout(function() {phone.classList.remove('is-invalid')}, 2500)
  } else {
    phone.classList.remove('is-invalid');
  }
}

// User Name Sign In
function validateUserNameSignIn () {
  const userNameSignIn = document.getElementById('userNameSignIn');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(userNameSignIn.value)){
    userNameSignIn.classList.add('is-invalid');
    setTimeout(function() {userNameSignIn.classList.remove('is-invalid')}, 2500)
  } else {
    userNameSignIn.classList.remove('is-invalid');
  }
}

// Password Sign In
function validatePasswordSignIn () {
  const passwordSignIn = document.getElementById('passwordSignIn');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(passwordSignIn.value)){
    passwordSignIn.classList.add('is-invalid');
    setTimeout(function() {passwordSignIn.classList.remove('is-invalid')}, 2500)
  } else {
    passwordSignIn.classList.remove('is-invalid');
  }
}

// Init profile.js
const profileCard = new ProfileCards;

// Profiles Output To UI
document.getElementById('browse').addEventListener('click', profilePageOutput);

// Function Profile Page Output
function profilePageOutput(e) {
  document.querySelector('.profileBtns').hidden = false;
  const removeLandingPageDiv = document.querySelector('.landingPage');
  if(removeLandingPageDiv.display === 'none') {
    removeLandingPageDiv.display = 'block';
  } else {
    removeLandingPageDiv.style.display = 'none';
  }

  const removeDescDiv = document.querySelector('.desc');
  if(removeDescDiv.display === 'none') {
    removeDescDiv.display = 'block';
  } else {
    removeDescDiv.style.display = 'none';
  }

  const bgColor = document.getElementById('home');
  bgColor.classList.add('bgImage-none')
  bgColor.classList.add('bg-profiles');
  profileCard.showProfileCards();
  
  document.querySelector('.hamburger').hidden = true;

}

// Reset Page on-click navbar-brand
document.querySelector('.navbar-brand').addEventListener('click', homepage);
function homepage(e) {
  location.reload();
}


