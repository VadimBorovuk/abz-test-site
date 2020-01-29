import React from 'react';

import menTechnik from '../../../assets/imgs/man-mobile.svg';

import './style.scss';

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="about-content">
                        <div className="col-12">
                            <div className="about-title">
                                Let's get ac quainted
                            </div>
                        </div>
                        <div className="about-block">
                            <div className="col-12 col-md-4">
                                <div className="about-image">
                                    <img src={menTechnik} alt=""/>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="about-info">
                                    <div className="about-info-zag">
                                        I am cool frontend developer
                                    </div>
                                    <div className="about-info-description">
                                        When real users have a slow experience on mobile, they're much less likely to
                                        find
                                        what they are looking for or purchase from you in the future. For many sites
                                        this
                                        equates to a huge missed opportunity, especially when more than half of visits
                                        are
                                        abandoned if a mobile page takes over 3 seconds to load.
                                        <br/>
                                        <br/>
                                        Last week, Google Search and Ads teams announced two new speed initiatives to
                                        help
                                        improve user-experience on the web.
                                    </div>
                                    <a href="#" className="about-info-btn">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;