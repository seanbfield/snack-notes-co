import React from 'react'

// Modules
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

// API
import {
  getAllUsers,
  loginUser,
  registerUser,
  verifyUser
} from './services/api'

// Stylesheet
import './App.css'


//  ========================== //
//           Components        //
//  ========================== //


import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Landing from './views/Landing';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }



  //  ========================== //
  //         DATA RESPONSE       //
  //  ========================== //



  async componentDidMount() {
    const user = await verifyUser();
    const allUsers = await getAllUsers();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
    console.log(allUsers);
  }

  getUsers = async () => {
    const users = await getAllUsers();
    this.setState({
      users
    })
  }



  //  ========================== //
  //        Authentication       //
  //  ========================== //

  handleLoginButton = () => {
    this.props.history.push("/home")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    })
    this.props.history.push("/home")
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }




  //  ========================== //
  //             Render          //
  //  ========================== //


  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" render={() => (
            <Home
              currentUser={this.state.currentUser}
            />
          )} />

          <Route exact path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />

          <Route exact path="/register" render={() => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
        </Switch>

      </div>
    );
  }
}


export default withRouter(App);