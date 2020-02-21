import React from 'react';

import logo from '../../../../assets/logo/logo.svg';
import user from '../../../../assets/imgs/user-superstar-2x.jpg';
import signOut from '../../../../assets/icons/sign-out.svg';
import burger from '../../../../assets/icons/line-menu.svg';

import './style.scss';
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    handleClick = ()=>{

    }

    render() {
        const isOn = this.state.isActive;
        console.log(isOn);
        return (
            <div className="main-nav">
                <div className="container">
                    <div className="row">
                        <div className="navbar">
                            <div className="navbar__logo">
                                <a href="/">
                                    <img src={logo} alt=""/>
                                </a>
                            </div>
                            <ul className="navbar__links">
                                <li className="navbar__link">
                                    <a href="/#about">About me</a>
                                </li>
                                <li className="navbar__link">
                                    <a href="/#relationships">Relationships</a>
                                </li>
                                <li className="navbar__link">
                                    <a href="/#requirements">Requirements</a>
                                </li>
                                <li className="navbar__link">
                                    <a href="/#users">Users</a>
                                </li>
                                <li className="navbar__link">
                                    <a href="/#signUp">Sign Up</a>
                                </li>
                                <li className="navbar__link">
                                    <Link to="/weather">Weather</Link>
                                </li>
                            </ul>
                            <div className="navbar__contacts">
                                <div className="navbar__contacts__info">
                                    <p className="navbar__contacts-position">Superstar</p>
                                    <p className="navbar__contacts-email">Superstar@gmail.com</p>
                                </div>
                                <a href="#" className="navbar__contacts-logo">
                                    <img className="user-logo" src={user} alt=""/>
                                </a>
                                <a href="#" className="navbar__contacts-logout">
                                    <img className="logout" src={signOut}/>
                                </a>
                            </div>
                            <a className={isOn ? "navbar-burger on" : "navbar-burger"}
                               onClick={() => this.setState({isActive: !isOn})}>
                                <img src={burger} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={isOn ? "drop-menu on" : "drop-menu"}>
                    <div className="drop-contact">
                        <a href="#" className="drop__contacts-logo">
                            <img className="user-logo" src={user} alt=""/>
                        </a>
                        <div className="drop__contacts__info">
                            <p className="drop__contacts-position">Superstar</p>
                            <p className="drop__contacts-email">Superstar@gmail.com</p>
                        </div>
                    </div>
                    <div className="drop-line"></div>
                    <ul className="drop__links">
                        <li className="drop__link">
                            <a href="/#about">About me</a>
                        </li>
                        <li className="drop__link">
                            <a href="/#relationships">Relationships</a>
                        </li>
                        <li className="drop__link">
                            <a href="/#requirements">Requirements</a>
                        </li>
                        <li className="drop__link">
                            <a href="/#users">Users</a>
                        </li>
                        <li className="drop__link">
                            <a href="/#signUp">Sign Up</a>
                        </li>
                        <li className="drop__link">
                            <a href="#">Sign Out</a>
                        </li>
                        <li className="drop__link">
                            <Link to="/weather">Weather</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;