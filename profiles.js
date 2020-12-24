class ProfileCards {
  constructor() {
    
    
  }

  showProfileCards(){
const userData = [
  {
    name: 'Banana',
    image1: 'images/banana1.jpeg',
    image2: 'images/banana2.jpeg',
    image3: 'images/banana3.jpg',
    about: 'Ripe for the picking!',
    hors: 15,
    entree: 12,
    juicy: 11,
    sweet: 92,
    savory: 3,
    totalTaste: 89 
  },
  {
    name: 'Blueberry',
    image1: 'images/blueberry1.jpeg',
    image2: 'images/blueberry2.jpg',
    image3: 'images/blueberry3.jpg',
    about: 'Plump and juicy ready to get squishy!',
    hors: 17,
    entree: 11,
    juicy: 92,
    sweet: 89,
    savory: 2,
    totalTaste: 92 
  },
  {
    name: 'Burger',
    image1: 'images/burger1.jpeg',
    image2: 'images/burger2.jpeg',
    image3: 'images/burger3.jpeg',
    about: 'Hot and juicy, looking to melt in your mouth.',
    hors: 18,
    entree: 95,
    juicy: 36,
    sweet: 2,
    savory: 97,
    totalTaste: 94 
  },
  {
    name: 'Cherry',
    image1: 'images/cherry1.jpeg',
    image2: 'images/cherry2.jpeg',
    image3: 'images/cherry3.jpg',
    about: 'Pops in mouth.',
    hors: 11,
    entree: 22,
    juicy: 88,
    sweet: 91,
    savory: 8,
    totalTaste: 95  
  },
  {
    name: 'Chocolate Cake',
    image1: 'images/chocolatecake3.jpg',
    image2: 'images/chocolatecake2.webp',
    image3: 'images/chocolatecake2.jpg',
    about: 'Rich and ready to indulge.',
    hors: 16,
    entree: 12,
    juicy: 13,
    sweet: 99,
    savory: 6,
    totalTaste: 98  
  },
  {
    name: 'Dark Chocolate',
    image1: 'images/chocolatebar1.jpg',
    image2: 'images/chocolatebar2.jpg',
    image3: 'images/chocolatebar3.jpg',
    about: 'Melts in your mouth.',
    hors: 16,
    entree: 9,
    juicy: 3,
    sweet: 89,
    savory: 2,
    totalTaste: 87  
  },
  {
    name: 'Jelly Doughnut',
    image1: 'images/doughnut1.jpg',
    image2: 'images/doughnut2.jpg',
    image3: 'images/doughnut3.jpg',
    about: 'Sticky, but sweet and worth the mess.',
    hors: 6,
    entree: 5,
    juicy: 22,
    sweet: 99,
    savory: 8,
    totalTaste: 94  
  },
  {
    name: 'Egg',
    image1: 'images/egg3.jpg',
    image2: 'images/egg1.jpeg',
    image3: 'images/egg2.jpg',
    about: 'Eggsellent way to start the day.',
    hors: 16,
    entree: 56,
    juicy: 4,
    sweet: 2,
    savory: 89,
    totalTaste: 76  
  },
  {
    name: 'French Fries',
    image1: 'images/frenchfries1.jpg',
    image2: 'images/frenchfries2.jpg',
    image3: 'images/frenchfries3.jpg',
    about: 'Salty and crispy.',
    hors: 33,
    entree: 22,
    juicy: 3,
    sweet: 2,
    savory: 98,
    totalTaste: 99  
  },
  {
    name: 'Lime',
    image1: 'images/lime1.webp',
    image2: 'images/lime2.jpg',
    image3: 'images/lime3.jpg',
    about: 'Squeeze me real good.',
    hors: 2,
    entree: 3,
    juicy: 98,
    sweet: 75,
    savory: 4,
    totalTaste: 64  
  },
  {
    name: 'Orange',
    image1: 'images/orange1.webp',
    image2: 'images/orange2.jpg',
    image3: 'images/orange3.png',
    about: 'Good source of vitamin C.',
    hors: 12,
    entree: 9,
    juicy: 91,
    sweet: 88,
    savory: 11,
    totalTaste: 90  
  },
  {
    name: 'Peach',
    image1: 'images/peach1.jpeg',
    image2: 'images/peach2.jpg',
    image3: 'images/peach3.jpg',
    about: 'Sweet and juice.',
    hors: 6,
    entree: 5,
    juicy: 97,
    sweet: 92,
    savory: 22,
    totalTaste: 95  
  },
  {
    name: 'Pear',
    image1: 'images/pear1.jpg',
    image2: 'images/pear5.jpeg',
    image3: 'images/pear4.jpeg',
    about: 'Crisp and juicy.',
    hors: 16,
    entree: 12,
    juicy: 84,
    sweet: 86,
    savory: 22,
    totalTaste: 91  
  },
  {
    name: 'Pineapple',
    image1: 'images/pineapple3.jpeg',
    image2: 'images/pineapple1.jpeg',
    image3: 'images/pineapple3.jpg',
    about: 'Just a juicy fruity snack waiting to be peeled!',
    hors: 22,
    entree: 12,
    juicy: 100,
    sweet: 88,
    savory: 33,
    totalTaste: 95  
  },
  {
    name: 'Eggplant',
    image1: 'images/eggplant1.jpg',
    image2: 'images/eggplant2.jpeg',
    image3: 'images/eggplant3.jpg',
    about: 'Sponge and absorbent.',
    hors: 33,
    entree: 89,
    juicy: 16,
    sweet: 10,
    savory: 76,
    totalTaste: 66   
  },
  {
    name: 'pizza',
    image1: 'images/pizza1.jpeg',
    image2: 'images/pizza2.webp',
    image3: 'images/pizza3.jpg',
    about: 'Ready to party.',
    hors: 34,
    entree: 96,
    juicy: 16,
    sweet: 13,
    savory: 94,
    totalTaste: 100   
  },
  
];



const profiles = profileIterator(userData)

// Call first user profile
nextProfile()

// Next Event
document.querySelector('.next').addEventListener('click', nextProfile)

// Display next profile
function nextProfile(e) {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.querySelector('.profileCards').innerHTML = `
    <div class=""> 
    <div class="card">

      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="${currentProfile.image1}" class="d-block w-100">
          </div>

          <div class="carousel-item">
            <img src="${currentProfile.image2}" class="d-block w-100">
          </div>

          <div class="carousel-item">
            <img src="${currentProfile.image3}" class="d-block w-100">
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <div class="card-body bg-light p-0">
  
        <div class="">
          <h2 class="font-weight-bolder">${currentProfile.name}</h2>
          <p>${currentProfile.about}</p>
        </div>

        <div class="profile-facts">
          <ul class="list-group list-group-flush border border-secondary">
            <li class="list-group-item list-group-item-action py-0">
              <h3 class="font-weight-bolder my-0">Profile Facts</h3>
              <small>Serving size: As needed*</small>
            </li>
            <li class="list-group-item list-group-item-action py-0">
              <p class="font-weight-bold text-right my-0">%Daily Value**</p>
            </li>

            <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0 text-left">Hors d'oeuvre
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.hors}</span> %</span>
            </li>
            <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0 text-left">Entrée
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.entree}</span> %</span>
            </li>
            <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0 text-left">Juicy
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.juicy}</span> %</span>
            </li>
            <li class="list-group-item list-group-item-action py-0">
              <p class="font-weight-bold my-0 text-left">Sweet
              <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.sweet}</span> %</span>
            </li>
            <li class="list-group-item list-group-item-action py-0">
              <p class="font-weight-bold my-0 text-left">Savory
              <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.savory}</span> %</span>
            </li>
            <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0 text-left">Total Taste
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">${currentProfile.totalTaste}</span> %</span>
            </li>          
            
            <li class="list-group-item list-group-item-action py-0">
              <small class="my-0">*Not a significant source of sustenance</small>
              <small class="my-0">**Percent Daily Value based on total lies</small>
            </li>
          </ul>
        </div>

      
      </div>      
    </div>
  </div>
    `
    
  } else {
    // No more profiles
    document.querySelector('.endOfProfiles').hidden = false;
    document.querySelector('.spacer').hidden = false;
    document.querySelector('.endOfProfiles').innerHTML = `
    <div class="alert alert-success m-5" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read all available profiles. That's all for now, check back again later.</p>
    <hr>
    <p class="mb-0">We appreciate your love and attention.</p>
  </div>
  `
  document.querySelector('.profileBtns').hidden = true;
  
  document.querySelector('.returnBtn').innerHTML = `
  <div class="text-center">
  <a href="#" class="btn btn-success mx-4 my-2 returnHomeBtn">Homepage</a>
  </div>
  `
  document.querySelector('.returnHomeBtn').addEventListener('click', returnHome);

  }
}

function returnHome(e) {
  window.location.reload();
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };

}

}
}
