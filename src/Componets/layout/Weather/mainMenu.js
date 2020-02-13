import React, {Component} from 'react';

class MainMenu extends Component {
    render() {
        return (
            <div>
                <div className="main-title">
                    <p>Погодное приложение</p>
                </div>
                <p className="main-text">Узнайте погоду в вашем городе!</p>
            </div>
        );
    }
}

export default MainMenu;