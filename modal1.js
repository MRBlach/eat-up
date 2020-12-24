class Modal1 {
  constructor() {
    this.signUp = document.querySelector('.signUp');
  }

  showSignUp(){
    this.signUp.innerHTML = `
    <div id="modal1" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark">Eat Up!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body modal-body1 text-center">
          <p>Welcome to Eat Up! where meals have been meeting mouths since 2020&copy</p>
          <p>We just need some quick info to help you satisfy that craving!</p>
        </div>
        
        <div class="modal-body bg-light modal-body2">
        <form>
        <div class="form-group">
          <label>Create A User Name:</label>
          <input type="text" class="form-control" id="userNameSignUp" placeholder="user name">
          <div class="invalid-feedback">
            User Name must be between 2 and 10 characters
          </div>
        </div>

        <div class="form-group">
        <label>Create A Password:</label>
        <input type="text" class="form-control" id="passwordSignUp" placeholder="password">
        <div class="invalid-feedback">
          Password must be between 2 and 10 characters
        </div>
      </div>

        <div class="form-group">
          <label>Enter Your Zipcode:</label>
          <input type="text" id="zip" class="form-control" placeholder="zipcode">
          <div class="invalid-feedback">
            Enter a valid zipcode
          </div>
        </div>

        <div class="form-group">
          <label>Enter Your Email:</label>
          <input type="text" id="email" class="form-control" placeholder="email">
          <div class="invalid-feedback">
            Enter a valid email
          </div>
        </div>

        <div class="form-group">
          <label>Enter Your Phone Number:</label>
          <input type="text" id="phone" class="form-control" placeholder="phone number">
          <div class="invalid-feedback">
            Enter a valid phone number
          </div>
        </div>
      </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" type="submit" data-dismiss="modal">Sign Up</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
  
}