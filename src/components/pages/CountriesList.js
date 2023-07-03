import { useState } from "react";
import axios from 'axios';
import React from "react";


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
    //!Aquí hay que cambiar que en vez de un id me pase el país seleccionado
    const idCountrySelected = (country) => {
        setShowCountry(country)
    }

    return (
        <div className="ms-5 mt-5 d-flex justify-content-around align-self-sm-center">  
            {fetching && <img src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />}

            <table  className='table-primary table-bordered border table-hover '>
                <tbody>
                    {countries?.map((country) => {
                        const imageCode = country.alpha2Code.toLowerCase();
                        return (
                            /* //&aquí hay que cambiar que en vez del id me pase LO CONSIGO CON USE EFFECT s */
                            <tr className='pt-3 d-flex flex-column align-items-center' key={country._id} onClick={() => { idCountrySelected(country._id); }} >
                                 <img  src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} /> <p className="h5 mt-2"> <strong >{country.name.common}</strong> </p> 
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