import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="banner-text">
              Fast and secure payment platform for the internet
            </h2>
            <p className="banner-text">
              <span>Araka</span> is a payment platform that allows any
              registered user make payment for goods and services, it also
              allows merchants registered on it to accept online payments for
              goods and services with cards and mobile money wallets{' '}
              <span>M-PESA</span> &bull; <span>AirtelMoney</span> and{' '}
              <span>OrangeMoney</span>
            </p>
            <div className="btn-links banner-text">
              <button className="btn">Become a merchant</button>
              <Link href="transaction/payment">
                <a>
                  <button className="btn">Start making payments</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </section>
  );
};
export { Banner };
