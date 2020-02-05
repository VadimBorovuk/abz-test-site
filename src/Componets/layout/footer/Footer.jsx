import React from 'react';

import logo from '../../../assets/logo/logo.svg';
import mail from '../../../assets/icons/mail.svg';
import phone from '../../../assets/icons/phone.svg';
import mobile from '../../../assets/icons/cellphone.svg';

import facebook from '../../../assets/icons/facebook.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import instagram from '../../../assets/icons/instagram.svg';
import twitter from '../../../assets/icons/twitter.svg';
import pinterest from '../../../assets/icons/pinterest.svg';


import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-nav">
                        <div className="footer-logo">
                            <img src={logo} alt=""/>
                            <ul className="footer-links">
                                <li className="footer-link"><a href="#">About me</a></li>
                                <li className="footer-link"><a href="#">Relationships</a></li>
                                <li className="footer-link"><a href="#">Requirements</a></li>
                                <li className="footer-link"><a href="#">Users</a></li>
                                <li className="footer-link"><a href="#">Sign up</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="footer-contacts">
                            <div className="contacts-item">
                                <img src={mail} alt=""/>
                                <span className="contacts-email">work.of.future@gmail.com</span>
                            </div>
                            <div className="contacts-item">
                                <img src={phone} alt=""/>
                                <span className="contacts-email">+38 (050) 789 24 98 </span>
                            </div>
                            <div className="contacts-item">
                                <img src={mobile} alt=""/>
                                <span className="contacts-email">+38 (095) 556 08</span>
                            </div>
                        </div>
                        <div className="footer-news">
                            <ul className="footer-col-news">
                                <li className="col-item-news">News</li>
                                <li className="col-item-news">Blog</li>
                                <li className="col-item-news">Patners</li>
                                <li className="col-item-news">Shop</li>
                            </ul>
                            <ul className="footer-col-news">
                                <li className="col-item-news">Overview</li>
                                <li className="col-item-news">Design</li>
                                <li className="col-item-news">Code</li>
                                <li className="col-item-news">Collaborate</li>
                            </ul>
                            <ul className="footer-col-news">
                                <li className="col-item-news">Tutorials</li>
                                <li className="col-item-news">Resources</li>
                                <li className="col-item-news">Guides</li>
                                <li className="col-item-news">Examples</li>
                            </ul>
                            <ul className="footer-col-news">
                                <li className="col-item-news">FAQ</li>
                                <li className="col-item-news">Terms</li>
                                <li className="col-item-news">Conditions</li>
                                <li className="col-item-news">Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-description">
                        <div className="footer-email">
                            © abz.agency specially for the test task
                        </div>
                        <div className="footer-icons">
                            <img src={facebook} alt="" className="footer-icon"/>
                            <img src={linkedin} alt="" className="footer-icon"/>
                            <img src={instagram} alt="" className="footer-icon"/>
                            <img src={twitter} alt="" className="footer-icon"/>
                            <img src={pinterest} alt="" className="footer-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;