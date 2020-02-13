import React from 'react';

const MainTitle = ({temp, city, country, sunrise, pressure, wind, sunset, error}) => {
    return (
        <div className="weather-info">
            {city &&
            <div className="block-info">
                <p>Температура: <span>{temp}</span></p>
                <p>Местоположение: <span>{city} , {country}</span></p>
                <p>Давление: <span>{pressure}</span></p>
                <p>Сила ветра: <span>{wind} м/c</span></p>
                <p>Восход солнца: <span>{sunrise}</span></p>
                <p>Заход солнца: <span>{sunset}</span></p>
            </div>
            }
            <p className="field-error">{error}</p>
        </div>
    );
};


export default MainTitle;