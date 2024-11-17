import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <section className="section">
          <h1 className="title">Welcome to MyBank</h1>
          <img
            className="image"
            src="https://media.istockphoto.com/id/1224521920/photo/insurance-protecting-family-health-live-house-and-car-concept.jpg?s=612x612&w=0&k=20&c=_rrpkHAzF997K9swmvJ9C7OHxprCCQxHyDOYbXhZxOQ="
            alt="Mobile Banking Graphic"
          />
          <p className="description">Your trusted partner in financial success.</p>
          <button className="button">Learn More</button>
        </section>
      </div>
    </Layout>
  );
}





