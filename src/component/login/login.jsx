import React, { Component } from "react";
import joi from "joi-browser";
import "./login.css";
import {useParams,useSearchParams} from 'react-router-dom';
class Login extends Component {
  constructor(){
    super();
    document.getElementById("title").innerHTML = "Login"

  }
  state = {
    username:"",
    password: "",
    errors: {},
  };
 
  schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let error = this.validate();

    if (!error) {
      this.setState({ username: "", password: "", errors: {} });
      console.log("successfully submitted");
      return;
    }
    console.log("Not submitted");
  };
  validate = () => {
    let errors = {};
    // if(this.state.username.trim()==='')
    //     errors.username = "Username is required";
    // if(this.state.password.trim()==='')
    //     errors.password = "Password is required";
    // this.setState({errors})
    // return Object.keys(errors).length ===0 ?null : errors;
    let state = { ...this.state };

    const res = joi.validate(state, this.schema, { abortEarly: false });

    if (res.error === null) {
      this.setState({ errors });
      return null;
    } else {
      for (const error of res.error.details) {
        errors[error.path] = error.message;
      }
      this.setState({ errors });
    }
  };
  handleChange = (e) => {
    //clone
    let state = { ...this.state };
    //edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //setState
    this.setState(state);
  };
  
  render() {
    return (
      <React.Fragment>
        <form>

            <label  htmlFor="username">username</label>
            <input id="username"/>
            <label htmlFor="password">password</label>
            <input id="password"/>
            <input type="submit" />
           
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
