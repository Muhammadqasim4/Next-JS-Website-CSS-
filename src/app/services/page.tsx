import Layout from '../components/Layout';


export default function Services() {
  return (
    <Layout>
      <div className="container">
        <section className="section">
          <h1 className="title">Our Services</h1>
          <p className="subtitle">
            Explore a wide range of services tailored to meet your financial needs.
          </p>
          <div className="grid">
            {/* Service Card 1 */}
            <div className="card">
              <h2 className="cardTitle">Loans</h2>
              <p className="cardText">
                Flexible loan options for personal and business needs.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="card">
              <h2 className="cardTitle">Savings</h2>
              <p className="cardText">
                High-interest savings accounts to grow your wealth.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="card">
              <h2 className="cardTitle">Credit Cards</h2>
              <p className="cardText">
                Credit options with great rewards and cashback.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="card">
              <h2 className="cardTitle">Investments</h2>
              <p className="cardText">
                Reliable investment plans for a secure future.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="card">
              <h2 className="cardTitle">Insurance</h2>
              <p className="cardText">
                Comprehensive insurance coverage for peace of mind.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className="card">
              <h2 className="cardTitle">Wealth Management</h2>
              <p className="cardText">
                Expert advice to manage and grow your wealth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
