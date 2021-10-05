import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/Aboutus'
import Home from './components/Home'
import Contact from './components/ContactUs'
import Layout from './layout/Layout'


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
          <Route path={'/AboutUs'} component={AboutUs}> </Route>
          <Route path={'/Home'} component={Home}> </Route>
          <Route path={'/Contact'} component={Contact}> </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
