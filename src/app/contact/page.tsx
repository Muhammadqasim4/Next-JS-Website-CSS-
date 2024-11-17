import Layout from '../components/Layout';


export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <section className="formContainer">
          <h1 className="heading">Contact Us</h1>
          <p className="description">
            Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          <form className="form">
            {/* Name Input */}
            <div className="inputGroup">
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input"
              />
            </div>

            {/* Email Input */}
            <div className="inputGroup">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
            </div>

            {/* Message Input */}
            <div className="inputGroup">
              <label className="label">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="textarea"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="buttonContainer">
              <button type="submit" className="button">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
