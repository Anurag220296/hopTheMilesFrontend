import "./Auth.css";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>HopTheMiles</h1>
        <p>We’ll help you get back on track 🛣️</p>
      </div>

      <div className="auth-right">
        <h2>Reset Password</h2>
        <form className="auth-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn">Send Reset Link</button>
        </form>

        <p className="auth-link">
          Remembered it? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
