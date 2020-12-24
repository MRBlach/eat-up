class Modal3 {
  constructor() {
    this.eatUp = document.querySelector('.eatUpDiv');
  }

  showEatUp(){
    this.eatUp.innerHTML = `
    <div id="modal3" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <h5 class="modal-title text-dark">Eat Up!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body modal-body1 text-center">
          <p>Congratulations! We're so happy you see something you like.</p>
          <p>Take the next step by messaging that fine fare and get your eat-on with<br> Eat Up!</p>
        </div>

        <div class="modal-body modal-body2 bg-light">
        <form>
        
        <div class="form-check">
        <p>Would you like to remain anonymous?</p>
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
          <label class="form-check-label" for="exampleRadios2">
            No
          </label>
        </div>
        <br>

        <div class="form-group">
          <label for="comment">Message:</label>
          <textarea class="form-control" rows="3" id="comment"></textarea>
        </div>
      </form>

      </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" type="submit" data-dismiss="modal">Submit</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `
  }
}