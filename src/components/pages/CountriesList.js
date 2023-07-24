import { useEffect, useState } from "react";
import axios from 'axios';
import React from "react";


import CountryDetails from "./CountryDetails";

//Cada enlace debe ser un react-router-dom Link que utilizaremos para enviar el código del país (alpha3Code) a través de la URL.


const CountriesList = () => {


    //Tomar valores de la api + mensaje tiempo de espera
    const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
    const [countries, setCountries] = useState();
    const [fetching, setFetching] = useState(true);
    const [showCountry, setShowCountry] = useState(false)
    //const[clickCountrySelected, setClickCountrySelected] = useState();
    useEffect(() => {
        axios.get(urlCountries).then((response) => {
            setCountries(response.data)
            setFetching(false);
        })

    }, [])


    const updateState = (country) => {
        setShowCountry(country)
    }



    return (
        <div className="ms-5 mt-5 d-flex justify-content-around align-self-sm-center ">
            {fetching && <img alt="" src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />}
            <div className="overflow-y-scroll vh-100">
                <table className='table-primary table-bordered border table-hover m-5  '>
                    <tbody>

                        {countries?.map((country) => {
                            const imageCode = country.alpha2Code.toLowerCase();
                            return (
                                
                                <tr>
                                    <td className=' pt-3 d-flex flex-column align-items-center' key={country._id} onClick={() => { updateState(country) }} >
                                        <img alt="" src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} /> <p className="h5 mt-2"> <strong >{country.name.common}</strong> </p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                {showCountry && <CountryDetails showCountry={showCountry} updateState={updateState} />}
            </div>

        </div>
    )
}

export default CountriesList;