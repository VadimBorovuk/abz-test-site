import React from 'react';
import Navbar from "./Navbar/Navbar";
import Index_header from "./Index-header/Index_header"


const Header = ()=> {
    return(
        <div className="header">
            <Navbar/>
            <Index_header/>
        </div>
    )
};

export default Header;