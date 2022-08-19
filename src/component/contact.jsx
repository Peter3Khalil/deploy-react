import React, { Component } from 'react';
class Contact extends Component{
    constructor(){
        super();
        document.getElementById("title").innerHTML = "Contact";
    }
    render(){
        return(
            <div>
                <h1>Contact</h1>
            </div>
          
        );
    }
}
export default Contact;