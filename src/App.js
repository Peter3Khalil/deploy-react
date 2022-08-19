import "./App.css";
import React, { Children, Component } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import About from "./component/about";
import Contact from "./component/contact";
import Home from "./component/home";
import Login from "./component/login/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
   
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="login">
            <Route path=":id" element={<Login/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* <Login/> */}
      </div>
    );
  }
}

export default App;
