import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Countries from './components/Countries';


function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then( response => {
        setCountries(response.data)
      })
  }, [])

let countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <SearchForm search={search} setSearch={setSearch}/>
      <Countries countries={countriesToShow} setSearch={setSearch} search={search} />
    </div>
  );
}

export default App;
