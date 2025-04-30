function Login() {
  return (
    <div className="register">
      <h3>Login</h3>
      <div className="form">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email"
            placeholder="Enter your email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password"
            placeholder="Set your password"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
        <div className="login"></div>
          <p>create an account</p>
      </div>
    </div>
  )
}

export default Login;