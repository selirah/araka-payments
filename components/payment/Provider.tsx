import React from 'react';

const Provider: React.FC = () => {
  return (
    <React.Fragment>
      <div className="display-name text-center">
        <h4>Last thing - how would you like to fund this transaction?</h4>
        <h6>Select only one payment method</h6>
      </div>
      <div className="row display-options justify-content-center">
        <div className="col-sm-3 text-center option">
          <i className="mbri-credit-card mb-3 text-custom"></i>
          <h2>credit/debit card</h2>
        </div>
        <div className="col-sm-3 text-center option">
          <i className="mbri-mobile mb-3 text-custom"></i>
          <h2>mpesa</h2>
        </div>
      </div>
      <div className="row justify-content-center option-submit">
        <button className="btn option-submit-button">Continue</button>
      </div>
    </React.Fragment>
  );
};

export { Provider };
