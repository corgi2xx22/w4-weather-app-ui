import React from 'react'

function WeatherInfo({loading, errorMessage, weatherInfo}) {
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {errorMessage ? (
            <div style={{ color: "red" }}>{errorMessage}</div>
          ) : (
            <div className="card-weather-info">
              <div className="row">
                <h3 className="cityDisplay">{weatherInfo.city}</h3>
                <h3 className="countryDisplay">{weatherInfo.country}</h3>
              </div>
              <div className="row">
                <h3 className="weatherDisplay">{weatherInfo.weather}</h3>
              </div>
              <div className="row weather-info">
                <div>
                  <h4 className="label">Temp</h4>
                  <p id="tempDisplay">{weatherInfo.temperature} ℃</p>
                </div>

                <div>
                  <h4 className="label">Humidity</h4>
                  <p id="humidDisplay">{weatherInfo.humidity} %</p>
                </div>

                <div>
                  <h4 className="label">Wind</h4>
                  <p id="windDisplay">{weatherInfo.wind} m/s</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default WeatherInfo