import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/pages/CountriesList";
import CountryDetails from "./components/pages/CountryDetails";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import React from "react";
function App() {

  const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
  const [countries, setCountries] = useState();
  const [fetching, setFetching] = useState(true);
  let showCountryDetails = false;

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
    </div>
    );
}
export default App;
