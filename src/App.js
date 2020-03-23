import React from 'react';
import Login from './component/Login/index';
import Products from './component/Products/index';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'


toast.configure({
  autoClose: 5000
});



function App(){

  return (

    <Router>
    <div>
      <Route path="/login" component={Login}/>
      <Route path="/produits" component={Products}/>
    </div>
    </Router>
    );
}
export default App;
