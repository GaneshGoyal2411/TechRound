import { useState } from 'react';
import './signup.css'

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()


  return (
    <div className="register">
      <h3>Register</h3>
      <div className="form">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input 
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password"
            placeholder="Set your password"
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <button id="register">Register</button>
          </div>
        </form>
        <div id="login"></div>
          <a href='login'>Already Have an account</a>
          <button>Login</button>
      </div>
    </div>
  )
}

export default Signup;