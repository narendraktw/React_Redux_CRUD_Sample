import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'
import Home from './Pages/Home/Home';
import Form from './Pages/Form/Form';
import NotFoundPage from './Pages/NotfoundPage';
import NavBar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (    
    <Router>
      <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <div id='page-body'>
          <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/Form/:id' component={Form}></Route>
          <Route path='/Form' component={Form}></Route>
          <Route component={NotFoundPage}></Route>
          </Switch>         
        </div>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
