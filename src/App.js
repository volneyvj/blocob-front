import './App.css';
import NavBar from './components/NavBar';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Users from './pages/Users';
import Classifieds from './pages/Classifieds';
import Comments from './pages/Comments';
import UserDetails from './pages/UserDetails';
import UserEdit from './pages/UserEdit';
import classifiedAdd from './pages/classifiedAdd';
import classifiedDetails from './pages/classifiedDetails';
import classifiedEdit from './pages/classifiedEdit';




class App extends Component {

  state = {
    loggedInUser: false,
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    })
  }

render(){

  return (
    <div className="App">
<h1>Hello</h1>
<NavBar/>

<Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' render = { (props) => <Login {...props} handleLogin={this.handleLogin} />} />
        <Route exact path='/comments' component = {Comments}/>
        <Route exact path='/users/' component = {Users}/>
        <Route path='/users/userdeatails/:email' component = {UserDetails}/>
        <Route path='/users/useredit/:email' component = {UserEdit}/>
        <Route exact path='/classifieds' component = {Classifieds}/>
        <Route path='/classifieds/' component = {classifiedDetails}/>
        <Route path='/classifieds/add' component = {classifiedAdd}/>
        <Route path='/classifieds/edit' component = {classifiedEdit}/>
     


        <Route/>
      </Switch>

    </div>
  );
}
}

export default App;
