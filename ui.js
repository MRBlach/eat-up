
class UI {
  constructor() {
    this.navbar = document.querySelector('.navi');
    this.landing = document.querySelector('.landingPage');
    this.desc = document.querySelector('.desc');
    this.profileCards = document.querySelector('.profileCards');
    this.ProfileBtns = document.querySelector('.profileBtns');
    this.footer = document.querySelector('.foot');
  }

   
  // Display navbar in UI
  showNavbar() {
    this.navbar.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-xl navbar-dark bg-info">
        <div data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="navbar-brand googleFont1" href="#home" data-toggle="tooltip" title="Return To Home Page">EAT<br>UP!</a>
        </div>
        
        <div class="hamburger" hidden>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a class="nav-link" href="#home">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a class="nav-link" href="#about" >About</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Join</a>
                <div class="dropdown-menu">
                  <span data-toggle="modal" data-target="#modal1">
                    <a class="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">Sign Up</a>
                  </span>
                  <span data-toggle="modal" data-target="#modal2">
                    <a class="dropdown-item" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">Sign In</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          </div>
        </nav>
        `
  }

  // Display Landingpage in UI
  showLandingPage() {
    this.landing.innerHTML = `
    
    <h1 class="text-white text-center welcomeHeader googleFont1">Welcome to Eat Up!</h1>
    <div class="spacing"></div>
    <div class="text-center ">
        
        <h3 class="text-white welcomeSubText googleFont2">Come... meet the right plate</h3>
        <button class="btn btn-info btn-md m-2 browseBtn" id="browse">Browse Now</button>
    </div>
    `
  }

  // Display Description in UI
  showDesc() {
    this.desc.innerHTML = `
    <div class="d-flex flex-row flex-wrap" id="about">
      <div class="col-md column1">
      <h2 class="my-4 googleFont1">Eat With Your Eyes</h2> 
      <p>Are you a gourmet connoisseur, or a no-shame glutton? <span class="font-weight-bold">Eat Up!</span> is here to help you gorge yourself. Nom, nosh, or nibble your way through our <span class="font-italic">carte du jour</span> of juicy provisions. Feast your eyes on hot grub in your area, just waiting to be devoured.</p>
      
      <p>For those seeking gourmet meals, hot side dishes, sweet treats, or last-nights left overs. We're confident you'll find the right plate to satisfy your craving. <span class="font-weight-bold">Eat Up!</span> has been bringing meals to mouths since 2020.</p>
      <img src="images/veg17.jpg" class="w-50"><img src="images/veg2.webp" class="w-50"><img src="images/veg18.jpg" class="w-50"><img src="images/veg4.jpg" class="w-50"><img src="images/veg5.jpg" class="w-50"><img src="images/veg6.jpg" class="w-50"><img src="images/veg7.webp" class="w-50"><img src="images/veg8.jpg" class="w-50"><img src="images/veg9.jpg" class="w-50"><img src="images/veg10.jpg" class="w-50"><img src="images/veg11.jpg" class="w-50"><img src="images/veg12.jpg" class="w-50"><img src="images/veg13.jpg" class="w-50"><img src="images/veg14.webp" class="w-50">
      </div>

     

      <div class="col-md py-4">
        <div class="text-center">
          <h2 class="text-info googleFont1">&#9829 Featured Fare &#9829</h2>
      
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="images/pineapple3.jpeg" class="d-block w-100" alt="...">
          </div>

          <div class="carousel-item">
            <img src="images/pineapple1.jpeg" class="d-block w-100" alt="...">
          </div>

          <div class="carousel-item">
            <img src="images/pineapple3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        </div>
       <hr>
      
       <div class="text-center w-100">
        <h2 class="font-weight-bolder">Pineapple</h2>
        <p>Just a juicy, fruity snack waiting to be peeled!</p>
      </div>

      <div class="">
        <ul class="list-group list-group-flush border border-secondary">
          <li class="list-group-item list-group-item-action py-0">
            <h3 class="font-weight-bolder my-0">Profile Facts</h3>
            <small>Serving size: As needed*</small>
          </li>
          <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold text-right my-0">%Daily Value**</p>
          </li>

          <li class="list-group-item list-group-item-action py-0">
          <p class="font-weight-bold my-0">Hors d'oeuvre
          <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">22</span> %</span>
          </li>
          <li class="list-group-item list-group-item-action py-0">
          <p class="font-weight-bold my-0">Entrée
          <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">12</span> %</span>
          </li>
          <li class="list-group-item list-group-item-action py-0">
          <p class="font-weight-bold my-0">Juicy
          <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">100</span> %</span>
          </li>
          <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0">Sweet
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">88</span> %</span>
          </li>
          <li class="list-group-item list-group-item-action py-0">
            <p class="font-weight-bold my-0">Savory
            <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">33</span> %</span>
          </li>
          <li class="list-group-item list-group-item-action py-0">
          <p class="font-weight-bold my-0">Total Taste
          <span class="font-weight-bold float-right my-0"><span class="badge badge-secondary">95</span> %</span>
          </li>          
          
          <li class="list-group-item list-group-item-action py-0">
            <small class="my-0">*Not a significant source of sustenance</small>
            <small class="my-0">**Percent Daily Value based on total lies</small>
          </li>
        </ul>
      </div>
      <div class="text-center" data-toggle="modal" data-target="#modal3">
        <input class="btn btn-info my-2 eatUpBtn" type="button" value="Eat Up!">
      </div>
    </div>
   </div>
    `
  }


  // Display Footer in UI
  showFooter() {
    this.footer.innerHTML = `
    <div class="footer bg-dark text-right p-3">
      <span class="text-white googleFont1">bringing meals to mouths since &copy 2020</span>

      <span><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square text-white pr-1"></i></a></span>
      <span><a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter-square text-white pr-1"></i></a></span>
      <span><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram text-white pr-1"></i></a></span>
      <span><a href="https://www.tiktok.com/" target="_blank"><i class="fab fa-tiktok text-white pr-1"></i></a></span>        
    </div>
    `
  }

 
}   

   
 