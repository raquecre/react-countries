import "./App.css";
import CountryDetails from "./components/pages/CountryDetails";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/pages/CountriesList";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import React from "react";



function App() {

  const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
  const [countries, setCountries] = useState();
  const [ setFetching] = useState(true);
/* //~  let showCountryDetails = false; */


  React.useEffect(() => {
    axios.get(urlCountries).then((response) => {

      setCountries(response.data)
      setFetching(false);
    })

  }, [])
 

  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes>
        {countries?.foreach(country => {
          <Route path={`/${country.name.common}`} element={<CountryDetails/>}></Route>
        })}
      </Routes>

    </div>
  );
}
export default App;
