import React from 'react';

import logoHtml from '../../../assets/imgs/html.svg';
import logoCss from '../../../assets/imgs/css.svg';
import logoJS from '../../../assets/imgs/javascript.svg';

import './style.scss';

const Skills = () => {
    return (
        <div className="skills" id="relationships">
            <div className="container">
                <div className="row">
                    <div className="skills-content">
                        <div className="col-12 col-lg-6 col-title">
                            <div className="about-title">
                                About my relationships with
                                web-development
                            </div>
                        </div>
                        <div className="skills-items">
                            <div className="col-12 col-lg-4 skills-item">
                                <div className="skills-image">
                                    <img src={logoHtml} alt=""/>
                                </div>
                                <div className="skills-upper-info">
                                    <div className="skills-upper-text">
                                        I'm in love with HTML
                                    </div>
                                    <div className="skills-lower-text">
                                        Hypertext Markup Language (HTML) is the standard markup language for creating
                                        web
                                        pages and web applications.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 skills-item">
                                <div className="skills-image">
                                    <img src={logoCss} alt=""/>
                                </div>
                                <div className="skills-upper-info">
                                    <div className="skills-upper-text">
                                        CSS is my best friend
                                    </div>
                                    <div className="skills-lower-text">
                                        Cascading Style Sheets (CSS) is a style sheet language used for describing the
                                        presentation
                                        of a document written in a markup language
                                        like HTML.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 skills-item">
                                <div className="skills-image">
                                    <img src={logoJS} alt=""/>
                                </div>
                                <div className="skills-upper-info">
                                    <div className="skills-upper-text">
                                        JavaScript is my passion
                                    </div>
                                    <div className="skills-lower-text">
                                        JavaScript is a high-level, interpreted programming language. It is a language
                                        which
                                        is also characterized as dynamic, weakly typed, prototype-based and
                                        multi-paradigm.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;