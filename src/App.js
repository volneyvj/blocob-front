import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
import main from './pages/main';



class App extends Component {

  state = {
    loggedInUser: false,
  }

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value
    })
    // if (this.state.loggedInUser === true) {
    //   return  <Redirect to="/main"></Redirect>
    // window.location = "/main"
    // }
  }

render(){

  return (
    <div className="App">
<NavBar/>

<Switch>
        <Route exact path='/' render = { (props) => <Home {...props} handleLogin={this.handleLogin} />}/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' render = { (props) => {
        if (this.state.loggedInUser === true) return <Redirect to="/main" /> 
        else return <Login {...props} handleLogin={this.handleLogin} />
        } }/>
        <Route exact path='/comments' component = {Comments}/>
        <Route exact path='/users/' component = {Users}/>
        <Route path='/users/userdeatails/:email' component = {UserDetails}/>
        <Route path='/users/useredit/:email' component = {UserEdit}/>
        <Route exact path='/classifieds' component = {Classifieds}/>
        <Route path='/classifieds/details/:id' component = {classifiedDetails}/>
        <Route path='/classifieds/add' component = {classifiedAdd}/>
        <Route path='/classifieds/edit/:id' component = {classifiedEdit}/>
        <Route path='/main' component = {main}/>
     


        <Route/>
      </Switch>

      <Footer/>
    </div>
  );
}
}

export default App;
