class Modal2 {
  constructor() {
    this.signIn = document.querySelector('.signIn');
  }

  showSignIn(){
    this.signIn.innerHTML = `
    <div id="modal2" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 class="modal-title text-dark">Eat Up!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body modal-body1 text-center ">
          <p>Welcome back to Eat Up! where meals have been meeting mouths since 2020&copy</p>
          <p>Sign in below.</p>
        </div>
        <div class="modal-body modal-body2 bg-light">
        <form>
        <div class="form-group">
        <label>Enter Your User Name:</label>
        <input type="text" class="form-control" id="userNameSignIn" placeholder="user name">
        <div class="invalid-feedback">
          User Name must be between 2 and 10 characters
        </div>
      </div>

      <div class="form-group">
      <label>Enter Your Password:</label>
      <input type="text" class="form-control" id="passwordSignIn" placeholder="password">
      <div class="invalid-feedback">
        Password must be between 2 and 10 characters
      </div>
    </div>

        
      </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" type="submit" data-dismiss="modal">Sign In</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}