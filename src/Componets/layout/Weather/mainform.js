import React, {Component} from 'react';

class Mainform extends Component {
    render() {
        return (
            <form className="form-weather" onSubmit={this.props.getWeather}>
                <input className="city-field" type="text" name="city" placeholder="Город"/>
                <button className="btn-send" type="submit">Получить погоду</button>
            </form>
        );
    }
}

export default Mainform;