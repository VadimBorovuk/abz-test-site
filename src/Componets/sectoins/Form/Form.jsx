import React, {Component} from 'react';

import caretDown from '../../../assets/icons/caret-down.svg';

import './style.scss';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueName: "",
            valuePhone: "",
            valueAge: "",
            selectValue: [
                {id: 1, value: "Designer"},
                {id: 2, value: "Web-proger"},
                {id: 3, value: "QA"},
                {id: 4, value: "Soft-enginero"}
            ],
            selectArr: [],
            isActive: false
        }
    }

    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({valueName: e.target.value})
    };
    handleAgeChange = (e) => {
        e.preventDefault();
        this.setState({valueAge: e.target.value})
    };

    handlePhoneChange = (e) => {
        e.preventDefault();
        this.setState({valuePhone: e.target.value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`your data: ${this.state.valueName}, ${this.state.valuePhone}`);
        this.setState({valueName: '', valueAge: '', valuePhone: ''})
    };


    render() {
        const isOn = this.state.isActive;
        const ArrSelect = this.state.selectValue;
        return (
            <div className="form" id="signUp">
                <div className="container">
                    <div className="row">
                        <div className="form-content">
                            <div className="col-12">
                                <div className="about-title">
                                    Register to get a work
                                </div>
                                <div className="about-description">
                                    Attention! After successful registration and alert, update the list of users in the
                                    block from the top
                                </div>
                            </div>
                            <div className="form-block">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-fields">
                                        <div className="col-4 form-field">
                                            <input value={this.state.valueName} onChange={this.handleNameChange}
                                                   type="text" placeholder="Your name"/>
                                            <span className="upper-text">Name</span>
                                        </div>
                                        <div className="col-4 form-field">
                                            <input value={this.state.valueAge} onChange={this.handleAgeChange}
                                                   type="text" placeholder="Your email"/>
                                            <span className="upper-text">Email</span>
                                        </div>
                                        <div className="col-4 form-field">
                                            <input value={this.state.valuePhone} onChange={this.handlePhoneChange}
                                                   type="text" placeholder="Your phone"/>
                                            <span className="upper-text">Phone</span>
                                        </div>
                                        <div className="col-6">
                                            <div  className={isOn? "select-option on" : "select-option"}
                                                 onClick={() => this.setState({isActive: !isOn})}>
                                                <div className="select-text">
                                                    <span>Select your position</span>
                                                    <img src={caretDown} alt=""/>
                                                </div>
                                                <div className="select-menu">
                                                    {ArrSelect.map(item=>{
                                                        return  <div className="menu-item">{item.value}</div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="select-block">
                                                <div className="select-field">
                                                    <div className="select-text">
                                                        Upload your photo
                                                    </div>
                                                    <div className="select-file">
                                                        <a href="#" type="file">Upload</a>
                                                    </div>
                                                </div>
                                                <div className="select-description">
                                                    File format jpg up to 5 MB, the minimum size of 70x70px
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 submit">
                                <input className="btn-submit" type="submit" value="Send"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;