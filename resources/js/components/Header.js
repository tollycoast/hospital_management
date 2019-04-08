import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
export default class Header extends Component {
    render() {
        return (
            <header id="header" className="clearfix">
                <div id="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-7 hidden-xs top-info">
                        <span className="text-color"><i className="fa fa-phone"></i>Phone: +2348033586890</span>
                        <span className="text-color"><i className="fa fa-envelope"></i>Email:info@yusjib.com</span>
                    </div>

                </div>
            </div>
        </div>

        <div id="logo-bar" className="clearfix">
           <div className="container-flex">
               <div className="row">

                   <div className="col-xs-12">
                       <div id="logo">
                           <h1><a href="index.html"><img src="/images/logo.png" alt="Eve" /></a></h1>
                       </div>
                   </div>
               </div>
           </div>

       </div>
       <Router><div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark navbar-fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
                    <Route exact path='/'  component={Home}/>
                    <Route exact path='/about' component={About}/>

       </div></Router>

            </header>

        );
    }
}

