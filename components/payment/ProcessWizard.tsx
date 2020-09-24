import React from 'react';

const ProcessWizard: React.FC = () => {
  return (
    <div className="bs-wizard row justify-content-center">
      <div className="col-sm-2 bs-wizard-step text-center active">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a href="#" className="bs-wizard-dot"></a>
        <div className="bs-wizard-info text-center">Payment Type</div>
      </div>
      <div className="col-sm-2 bs-wizard-step text-center disabled">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a href="#" className="bs-wizard-dot"></a>
        <div className="bs-wizard-info text-center">Provider</div>
      </div>
      <div className="col-sm-2 bs-wizard-step text-center disabled">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a href="#" className="bs-wizard-dot"></a>
        <div className="bs-wizard-info text-center">Details</div>
      </div>
      <div className="col-sm-2 bs-wizard-step text-center disabled">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a href="#" className="bs-wizard-dot"></a>
        <div className="bs-wizard-info text-center">Summary</div>
      </div>
      <div className="col-sm-2 bs-wizard-step text-center disabled">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a href="#" className="bs-wizard-dot"></a>
        <div className="bs-wizard-info text-center">Pay</div>
      </div>
    </div>
  );
};

export { ProcessWizard };
