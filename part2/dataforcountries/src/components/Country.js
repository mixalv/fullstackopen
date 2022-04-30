import Weather from "./Weather"
const Country = ({country}) => {
    return(
        <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital[0]}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map( value => <li key={value}>{value}</li>)}
                </ul>
                <img src={country.flags.png} alt='alt text' />
                <Weather country={country} />

            </div>
    )
}

export default Country