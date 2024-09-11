import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  function handleLogin(){
    navigate('/');

  }

  return (
    <div className='login-page'>
      <div className="container">
        <h2>Login as alumni/user </h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type = 'text'
            id="password"
            required
          />
          <div className='sP'>
            <input type="checkbox"/>
            <label>Show Password</label>
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        <p>
          Dont have an account? Sign up
        </p>
      </div>
    </div>
  );
}

export default Login;