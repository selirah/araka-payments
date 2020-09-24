import React from 'react';

const Details1: React.FC = () => {
  return (
    <React.Fragment>
      <div className="display-name text-center">
        <h4>Credit/Debit Card</h4>
        <h6>Enter credit/debit card details</h6>
      </div>
      <div className="row display-options justify-content-center">
        <div className="col-sm-12">
          <form role="form">
            <div className="form-group row justify-content-center">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card holder Name"
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account number"
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiry"
                />
              </div>
              <div className="col-sm-3">
                <input type="text" className="form-control" placeholder="CVV" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row justify-content-center option-submit">
        <button className="btn option-submit-button">Continue</button>
      </div>
    </React.Fragment>
  );
};

export { Details1 };
