import { useEffect, useState } from "react";
import axios from 'axios';
import React from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";

//Cada enlace debe ser un react-router-dom Link que utilizaremos para enviar el código del país (alpha3Code) a través de la URL.


const CountriesList = (props) => {


    //Tomar valores de la api + mensaje tiempo de espera
    const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
    const [countries, setCountries] = useState();
    const [fetching, setFetching] = useState(true);
    const [showCountry, setShowCountry] = useState(false)
    //const[clickCountrySelected, setClickCountrySelected] = useState();

    React.useEffect(() => {
        axios.get(urlCountries).then((response) => {

            setCountries(response.data)
            setFetching(false);
        })

    }, [])
    const idCountrySelected = (country) => {
        setShowCountry(country)
    }

    return (
        <div className="table-responsive  ms-5 mt-3 d-flex justify-content-around ">  
            {fetching && <img src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />}

            <table data-bs-spy="scroll" className='table-primary  table-bordered table-striped border table-hover'>
                <tbody>
                    {countries?.map((country) => {
                        const imageCode = country.alpha2Code.toLowerCase();

                        return (
                            <tr key={country._id} onClick={() => { idCountrySelected(country._id); }} >
                                <td className="table-hover justify-content-start table-primary"> <img  src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} /> <p className="h5 mt-2"> <strong >{country.name.common}</strong> </p> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {showCountry && <CountryDetails idCountrySelected={showCountry} />}
        </div>
    )
}

export default CountriesList;