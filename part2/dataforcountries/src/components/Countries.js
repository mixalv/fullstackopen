import Country from "./Country"


const Countries = ({countries, setSearch}) => {

    const clickHandler = (event) => {
        setSearch(event.target.value)
    }

    if (countries.length>10) {
        return(
                <div>
                    Too many matches, specify another filter
                </div>
            )  
    } 
    if (countries.length===1) {
        const country = countries[0]
        return(
            <Country country={country} />
        )
    }
    else {
        return(
            <ul>
            {countries.map(country =>  <li key={country.name.common}>{country.name.common} <button value={country.name.common} onClick={clickHandler}>show</button></li>)}
            </ul>
        )
    }
}

export default Countries