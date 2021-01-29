import React from 'react'
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reports from './Reports';
import LoginPage from './LoginPage';
import Registration from './Registration';
import Inpatient from './Inpatient';
import Outpatient from './Outpatient';

function HomePage() {
    return (
<Router>
<Navbar/>
<Switch>
<Route path ="/reports" component={Reports}/>
      <Route path = "/registration" component={Registration}/>      
      <Route path = "/inpatient" component={Inpatient}/>
      <Route path = "/outpatient" component={Outpatient}/>
</Switch>
</Router>


    )
}

export default HomePage
