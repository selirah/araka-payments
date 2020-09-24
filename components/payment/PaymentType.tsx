import React from 'react';

const PaymentType: React.FC = () => {
  return (
    <React.Fragment>
      <div className="display-name text-center">
        <h2>Good Afternoon, [ DISPLAY NAME ]</h2>
        <h4>Which type of payment would you like to perform?</h4>
        <h6>Select only one type</h6>
      </div>
      <div className="row display-options justify-content-center">
        <div className="col-sm-3 text-center option">
          <i className="mbri-mobile mb-3 text-custom"></i>
          <h2>airtime top-up</h2>
        </div>
        <div className="col-sm-3 text-center option">
          <i className="mbri-cash mb-3 text-custom"></i>
          <h2>money transfer</h2>
        </div>
        <div className="col-sm-3 text-center option">
          <i className="mbri-desktop mb-3 text-custom"></i>
          <h2>tv subscription</h2>
        </div>
        <div className="col-sm-3 text-center option">
          <i className="mbri-user mb-3 text-custom"></i>
          <h2>school fees payment</h2>
        </div>
      </div>
      <div className="row justify-content-center option-submit">
        <button className="btn option-submit-button">Continue</button>
      </div>
    </React.Fragment>
  );
};

export { PaymentType };
