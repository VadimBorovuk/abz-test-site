import React from 'react';
import axios from 'axios';

import Header from "./layout/header/header";
import AboutMe from "./sectoins/AboutMe/AboutMe";
import Skills from "./sectoins/Skills/Skills";


import Users from "./sectoins/Users/Users";
import Form from "./sectoins/Form/Form";
import Footer from "./layout/footer/Footer";

import '../App.css';
import Task from "./sectoins/Task/Task";


class App extends React.Component{
    componentDidMount() {
        const {getUsers} = this.props;
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users')
            .then(({data}) => {
                getUsers(data)
            })
    }

    render() {
        return(
            <div className="main-content">
                <Header/>
                <AboutMe/>
                <Skills/>
                <Task/>
                <Users {...this.props}/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default App;
