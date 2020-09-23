import Layout from '../components/home/Layout';

const IndexPage = () => (
  <Layout title="Araka | Payment Platform">
    <section className="bg-gray clients-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>Easy for your clients</h4>
            <h2>A fully integrated suite of payment products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="lead">
              We bring together everything that is required to make and accept
              payments and send payouts globally. <span>Araka</span> powers
              payments for <span>utility providers</span> &bull;{' '}
              <span>telecommunication providers</span> &bull;{' '}
              <span>private merchants</span> and everything in between,
            </p>
            <div className="clients-btn-links">
              <button className="btn">Become a merchant</button>
              <button className="btn">Start making payments</button>
            </div>
          </div>
          <div className="col-sm-6">
            <p className="lead">
              We are equipped to assist you begin transacting your business
              online. We help merchants &bull; <span>beat fraud</span> &bull;{' '}
              <span>send invoices</span> &bull; create quick{' '}
              <span>payment pages</span> and som much more!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="card-section">
      <div className="container">
        <div className="row vertical-content">
          <div className="col-sm-4">
            <div className="more-features-box features-border bg-white rounded text-left p-4">
              <div className="more-features-icon">
                <i className="mbri-speed h1 mb-3 text-custom"></i>
              </div>
              <div className="creative-testi-desc pt-3">
                <h5 className="my-3">Ready to get Started</h5>
                <p className="mb-0 text-muted pb-4">
                  Explore <span>ARAKA</span>, or create an account instantly and
                  start accepting payments
                </p>
                <button className="btn btn-outline-custom-alt">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="more-features-box features-border bg-white rounded text-left p-4">
              <div className="more-features-icon">
                <i className="mbri-cust-feedback h1 mb-3 text-custom"></i>
              </div>
              <div className="creative-testi-desc pt-3">
                <h5 className="my-3">Always know what you pay</h5>
                <p className="mb-0 text-muted pb-4">
                  Integrated per transaction. No hidden fees
                </p>
                <br />
                <button className="btn btn-outline-custom-alt">
                  See Pricing
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="more-features-box features-border bg-white rounded text-left p-4">
              <div className="more-features-icon">
                <i className="mbri-timer h1 mb-3 text-custom"></i>
              </div>
              <div className="creative-testi-desc pt-3">
                <h5 className="my-3">Start your integration</h5>
                <p className="mb-0 text-muted pb-4">
                  Get up and running with <span>ARAKA</span> in as little as 10
                  minutes
                </p>
                <br />
                <button className="btn btn-outline-custom-alt">
                  API Reference
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
