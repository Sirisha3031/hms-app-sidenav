import '../App.css'
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function LoginPage() {

  const history = useHistory();
  const handleSubmit = () => history.push('/home')
   
  return (
    <form className="App">
      <div className="form-inner">
        <h2>Login</h2>
        {/*ERROR*/}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Login" onClick={handleSubmit}/>

        
      </div>
    </form>
  );
}
export default LoginPage;


