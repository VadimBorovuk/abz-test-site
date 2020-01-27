import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as usersActions from '../modules/actions/users'
import App from "../Componets/App";

const mapStateToProps =({users})=>({
    items: users.items,
    isReady: users.isReady
});
const mapDispatchToProps =(dispatch)=>({
    ...bindActionCreators(usersActions, dispatch)
});
export default connect(
    mapStateToProps,mapDispatchToProps
)(App);