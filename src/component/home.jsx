import React, { Component } from 'react';
class Home extends Component{
   constructor(){
    super();
    document.getElementById("title").innerHTML = "Home";
   }
    render(){
        return(
            <h1>Home</h1>
        );
    }
}
export default Home;