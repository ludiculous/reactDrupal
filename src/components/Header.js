import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';

class Header extends Component {


  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <div className="header">
              <a href="/" className="brand-logo">BrightEdge Event Page </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};


export default Header
