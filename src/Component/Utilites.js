import React from 'react';

function Utilites() {
  return (
    <div className="container">
        <h2 className="heading">Enter your sentence</h2>
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "15rem"}}></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <div className="container my-4">
        <button type="button" class="btn btn-primary mx-2">UpperCase</button>
        <button type="button" class="btn btn-secondary mx-2">LowerCase</button>
        <button type="button" class="btn btn-success mx-2">Success</button>
        <button type="button" class="btn btn-danger mx-2">Danger</button>
        <button type="button" class="btn btn-warning mx-2">Warning</button>
        
        </div>
    </div>
  );
}

export default Utilites;
