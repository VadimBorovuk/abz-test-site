import React, {Component} from 'react';
import './style.scss';

const Users = ({items, isReady, id}) => {

    return (
        <div className="users" id="users">
            <div className="container">
                <div className="row">
                    <div className="users-content">
                        <div className="col-12">
                            <div className="about-title">
                                Our cheerful users
                            </div>
                            <div className="about-description">
                                Attention! Sorting users by registration date
                            </div>
                        </div>
                        <div className="users-block">
                            {
                                !isReady ? 'loading...' :
                                    items.users.map(item => {
                                        return (
                                            <div className="col-12 col-md-4 user-item" key={item.id}>
                                                <div className="user-logo">
                                                    <img src={item.photo} alt=""/>
                                                </div>
                                                <div className="user-info">
                                                    <div className="user-name">
                                                        {item.name}
                                                    </div>
                                                    <div className="user-position">
                                                        {item.position}
                                                    </div>
                                                    <div className="user-phone">
                                                        {item.phone}
                                                    </div>
                                                </div>
                                            </div>);
                                    })
                            }
                        </div>
                        <div className="col-12 btn-center">
                            <button className="show-more">
                                Show more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;