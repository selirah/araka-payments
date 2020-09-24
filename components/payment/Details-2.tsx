import React from 'react';

const Details2: React.FC = () => {
  return (
    <React.Fragment>
      <div className="display-name text-center">
        <h4>mPESA Wallet</h4>
        <h6>Enter mPESA wallet number</h6>
      </div>
      <div className="row display-options justify-content-center">
        <div className="col-sm-12">
          <form role="form">
            <div className="form-group row justify-content-center">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="mPESA wallet number"
                />
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

export { Details2 };
