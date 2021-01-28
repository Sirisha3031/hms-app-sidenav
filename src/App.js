
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './Pages/Reports';
import LoginPage from './Pages/LoginPage';
import Registration from './Pages/Registration';
import Inpatient from './Pages/Inpatient';
import Outpatient from './Pages/Outpatient';

function App() {
  return (
    
    <Router>
      <Navbar/>
    <Switch>
      <Route path="/" exact component={LoginPage}/>
      <Route path ="/reports" component={Reports}/>
      <Route path = "/registration" component={Registration}/>
      
      <Route path = "/inpatient" component={Inpatient}/>
      <Route path = "/outpatient" component={Outpatient}/>
    </Switch>
    </Router>
    
    
  );
}

export default App;
