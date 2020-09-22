import React from 'react';

const Steps: React.FC = () => {
  return (
    <div className="container payment-container">
      <div className="bs-wizard row justify-content-center">
        <div className="col-sm-2 bs-wizard-step text-center complete">
          <div className="text-center bs-wizard-stepnum">Step 1</div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <a href="#" className="bs-wizard-dot"></a>
          <div className="bs-wizard-info text-center">Payment Type</div>
        </div>
        <div className="col-sm-2 bs-wizard-step text-center complete">
          <div className="text-center bs-wizard-stepnum">Step 2</div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <a href="#" className="bs-wizard-dot"></a>
          <div className="bs-wizard-info text-center">Provider</div>
        </div>
        <div className="col-sm-2 bs-wizard-step text-center active">
          <div className="text-center bs-wizard-stepnum">Step 3</div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <a href="#" className="bs-wizard-dot"></a>
          <div className="bs-wizard-info text-center">Details</div>
        </div>
        <div className="col-sm-2 bs-wizard-step text-center disabled">
          <div className="text-center bs-wizard-stepnum">Step 4</div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <a href="#" className="bs-wizard-dot"></a>
          <div className="bs-wizard-info text-center"> Summary</div>
        </div>
        <div className="col-sm-2 bs-wizard-step text-center disabled">
          <div className="text-center bs-wizard-stepnum">Step 5</div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <a href="#" className="bs-wizard-dot"></a>
          <div className="bs-wizard-info text-center"> Pay</div>
        </div>
      </div>
    </div>
  );
};

export { Steps };
