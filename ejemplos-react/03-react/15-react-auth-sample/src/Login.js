import { React, useRef } from "react";
import { useNavigate} from "react-router-dom";
import Auth from "./Auth";
	
function Login () {
  const loginRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate(); 
  const auth = new Auth();

  const login = (e) => {
    e.preventDefault();

    auth.authenticate(loginRef.current.value, passwordRef.current.value);

		console.log(loginRef.current.value, passwordRef.current.value)

    if (auth.isAuthenticated()) { 
      navigate("/"); 
    }
  }

    return (
      <div >
			<header>Login</header>
 		  <form onSubmit={login}>
          <div><label>Login</label></div>
          <div>
            <input type="text" ref={loginRef}/>
          </div>
          <div><label>Password</label></div>
          <div>
            <input type="password" ref={passwordRef}/>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          </form>
      </div>
    );
  }

export default Login;
