import React from 'react';
import axios from 'axios';

import Header from "./layout/header/header";
import AboutMe from "./sectoins/AboutMe/AboutMe";
import Users from "./sectoins/Users/Users";
import Footer from "./layout/footer/footer";

import '../App.css';
import Form from "./sectoins/Form/Form";

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
                <Form/>
                {/*<Users {...this.props}/>*/}
                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
