import Layout from '../components/Layout';


export default function Login() {
  return (
    <Layout>
      <div className="container">
        <section className="formContainer">
          <h1 className="heading">Welcome Back</h1>
          <p className="subheading">Log in to access your account</p>
          <form className="form">
            <div className="inputGroup">
              <label className="label">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
              />
            </div>
            <button type="submit" className="button">
              Login
            </button>
          </form>
          <p className="footerText">
            Forgot your password?{' '}
            <a href="#" className="link">
              Reset it here
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
