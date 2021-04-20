import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Users from './pages/users/Users';
import UserClassifieds from './pages/classifieds/UserClassifieds';
import Classifieds from './pages/classifieds/AllClassifieds';
import Comments from './pages/comments/Comments';
import UserDetails from './pages/users/UserDetails';
import UserEdit from './pages/users/UserEdit';
import AddClassifieds from './pages/classifieds/AddClassifieds';
import DetailsClassifieds from './pages/classifieds/DetailsClassifieds';
import EditClassifieds from './pages/classifieds/EditClassifieds';
import Main from './pages/Main';



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
   <NavBar props={this.props.history} loggedInUser={this.state.loggedInUser}/>
<Switch>

        <Route exact path='/' render = { (props) => <Home {...props} handleLogin={this.handleLogin} />}/>
        <Route path='/signup' component={ Signup }/>
        <Route path='/login' render = { (props) => {
        if (this.state.loggedInUser === true) return <Redirect to="/main" /> 
        else return <Login {...props} handleLogin={this.handleLogin} />
        } }/>
        <Route exact path='/comments' component = {Comments}/>
        <Route exact path='/users/' component = {Users}/>
        <Route path='/users/userdetails/:id' component = {UserDetails}/>
        <Route path='/users/useredit/:id' component = {UserEdit}/>
        <Route path='/userclassifieds/' component = {UserClassifieds}/>
        <Route path='/allclassifieds/' component = {Classifieds}/>
        <Route path='/classifieds/details/:id' component = {DetailsClassifieds}/>
        <Route path='/classifieds/add' component = {AddClassifieds}/>
        <Route path='/classifieds/edit/:id' component = {EditClassifieds}/>
        <Route path='/main' render = { (props) => {
        if (localStorage.getItem("user") === null) return <Redirect to="/" /> 
        else return <Main {...props} handleLogin={this.handleLogin} />
        } }/>
     


        <Route/>
      </Switch>

      <Footer/>
    </div>
  );
}
}

export default App;
