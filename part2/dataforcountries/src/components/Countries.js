import Country from "./Country"


const Countries = ({countries, setSearch, search}) => {

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
    if (countries.length !==0 && (countries.length===1 || countries.some( country=> country.name.common.toLowerCase() === search.toLowerCase())) ) {
        console.log(countries[0].name.common)
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