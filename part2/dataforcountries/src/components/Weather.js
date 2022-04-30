import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({country}) => {
    
    const [temperature, setTemperature] = useState(0)
    const [wind, setWind] = useState(0)
    const [iconCode, setIconCode] = useState(0)
    
    
    useEffect(() => {
        const capital = country.capital[0]
        const api_key = process.env.REACT_APP_API_KEY
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
        .then(response => {
            setTemperature(Math.round(response.data.main.temp - 273.15))
            setWind(response.data.wind.speed)
            setIconCode(response.data.weather[0].icon)
        })}, [country])
    
        return(
            <div>
                <h2>Weather in {country.capital[0]}</h2>
                <p>temperature {temperature} Celcius</p>
                <img src={iconCode !==0 ? `http://openweathermap.org/img/wn/${iconCode}@2x.png` : ''} alt='alt text' />
                <p>win {wind} m/s</p>
            </div>
        )
    
}

export default Weather