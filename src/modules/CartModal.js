let _makeOrder = ({ }) => {


($(`  <form class="orderForm">
                    
                    <label for="formHeader">Fill the form to order these products. </label>
                    <div class="form-group">
                      
                        <input type="text" class="form-control" placeholder="Your name">
                    </div>
                    <div class="form-group">
                      
                        <input type="tel" class="form-control" id="clientPhone" placeholder="Your phone number">
                   
                    </div>
                   <!-- <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <div class="form-group">
                      
                        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Your email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else;)</small>
                    </div>
                    
                    
                    
                    <button type="submit" class="btn btn-info btn-sm" style="margin-bottom: 10px; float: right">Submit</button>
                </form>`)).appendTo(".modal-body");


};

module.exports = _makeOrder;