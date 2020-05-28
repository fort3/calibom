import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

class Nav extends React.Component{
  
  render(){
    return(<Router>
    <div className="navbar">
    <nav>
      <a className="logo" href="index.html"><h1 className="head"><span id="header">Cal</span><i className="fa fa-tree"></i>Bom.org</h1></a>
          <ul>
            <li><a href={this.props.projects}>Projects</a></li>
            <li><a href={this.props.system}>System</a></li>
            <li><a href={this.props.products}>Products</a></li>
            <li><a href={this.props.intervention}>Intervention Areas</a></li>
            <li><a href={this.props.about}>About Us</a></li>
            <li><a href={this.props.contact}>Contact Us</a></li>
          </ul>
        </nav>
     </div> 
     </Router>
    )
  }
};
export default Nav;