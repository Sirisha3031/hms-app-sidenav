
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './Pages/Reports';
import LoginPage from './Pages/LoginPage';
import Registration from './Pages/Registration';
import Inpatient from './Pages/Inpatient';
import Outpatient from './Pages/Outpatient';
import Header from './components/Header';
import HomePage from './Pages/HomePage';

function App() {
  return (
    
    <Router>
      <Nav/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path ="/login" component={LoginPage}/>
      <Route path ="/home" component={HomePage}/>
     
    </Switch>
    </Router>
    
    
  );
}
const Home = () => (
  <div>
    
  </div>

);

export default App;
