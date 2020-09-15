import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize';

class Navbar extends Component{
  componentDidMount(){
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <nav className="z-depth-0">
            <div className="nav-wrapper grey darken-3">
                <ul id="dropdown1" className="dropdown-content center-align">
                <li><a href="./dashboard">PROFILE</a></li>
                <li><a onClick={this.onLogoutClick} className="waves-effect waves-light hoverable red darken-4" style={{color:"#fff"}}>{'Logout'.toUpperCase()}</a></li>
                </ul>
                <div className="nav-wrapper">
                    <a href="./dashboard" >LOGO</a>
                    <ul className="right hide-on-med-and-down">
                    {/* <li><a href="">Profile</a></li>
                    <li><a href="">Components</a></li> */}
                    {/* <li><a className="dropdown-trigger" data-target="dropdown1"><i className="material-icons right">arrow_drop_down</i></a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="nav-wrapper ">
            {/* <div className */}
            <div className="nav-content container">
                <ul className="center tabs tabs-transparent">
                    <li className="tab"><a className="active" href="#test1">รู้จักเรา</a></li>
                    <li className="tab"><a href="#test2">โครงการ</a></li>
                    <li className="tab"><a href="#test3">บริการ</a></li>
                    <li className="tab"><a href="#test4">ผู้ลงทุนสัมพันธ์</a></li>
                    <li className="tab"><a href="#test1">การร่วมลงทุนทางธุรกิจ</a></li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile">
        <li><a href="./dashboard">PROFILE</a></li>
          <li><a onClick={this.onLogoutClick} className="waves-effect waves-light hoverable red darken-4" style={{color:"#fff"}}>{'Logout'.toUpperCase()}</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;