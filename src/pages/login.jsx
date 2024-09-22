import './login.css';
import { useNavigate ,Link} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Login() {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    console.log(credentials);
    navigate('/'); 
  }

  const [user, setUser] = useState('student');
  const studentBtn = useRef(null);
  const alumniBtn = useRef(null);
  const [showPassword, setShowPassword] = useState(false); 
  const [credentials,setCredentials]=useState({user:"",email:"",password:""});
  useEffect(() => {
    if (user === 'student') {
      studentBtn.current.style.backgroundColor = 'crimson';
      alumniBtn.current.style.backgroundColor = 'rgba(255, 58, 58, 0.759)';
    } else {
      studentBtn.current.style.backgroundColor = 'rgba(255, 58, 58, 0.759)';
      alumniBtn.current.style.backgroundColor = 'crimson';
    }
    setCredentials({...credentials,user:user});
  }, [user]);

  return (
    <div className="login-page">
      <div className="container">
        <h2>{`Login as ${user}`}</h2>
        <div id="userselectbox">
          <button
            id="studentBtn"
            ref={studentBtn}
            onClick={() => setUser('student')}
          >
            Student
          </button>
          <button
            id="alumniBtn"
            ref={alumniBtn}
            onClick={() => setUser('alumni')}
          >
            Alumni
          </button>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required 
          onChange={(e)=>setCredentials({...credentials,email:e.target.value})} />
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            required
            onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
          />
          <div className="sP">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)} 
            />
            <label>Show Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
        <br></br>
        <Link style={{color:'black'}} to= '/signup' >Dont have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
