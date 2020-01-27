import React from 'react';
import './style.scss';

const Index_Header = () => {
    return (
        <div className="index-header">
            <div className="container">
                <div className="row">
                    <div className="main-index">
                        <div className="col-12 col-md-8 col-lg-6  index-title">
                            Test assignment for Frontend Developer position
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 index-description">
                            We kindly remind you that your test assignment should
                            be submitted as a link to github/bitbucket repository.
                            Please be patient, we consider and respond to every application that meets minimum
                            requirements. We look forward to your submission. Good luck!
                        </div>
                        <div className="col-12">
                            <div className="index-btn">
                                <a href="#">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Index_Header;