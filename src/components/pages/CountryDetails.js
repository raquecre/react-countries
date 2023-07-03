//)Este es el componente que renderizaremos
//a través de la Route del react-router-dom,

import { useState } from "react"
import axios from 'axios';
import React from "react";


const CountryDetails = ({ idCountrySelected }) => {
    const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
    const [countries, setCountries] = useState();

    React.useEffect(() => {
        axios.get(urlCountries).then((response) => {
            setCountries(response.data);
        })

    }, [])


    if (idCountrySelected !== null && idCountrySelected !== undefined) {
        const country = countries?.filter((country) => country._id === idCountrySelected)[0]

        //const imageCode = country.alpha2Code.toLowerCase(); 
        // const countryBorders = country.borders;
        // console.log(countryBorders)
        if (country !== null && country !== undefined) {

           
            const countriesBordersArray = [];
                country.borders.map((countryInBorder) => {
                    countries.map((completeCountry) => {
                        if (completeCountry.alpha3Code === countryInBorder) {
                            
                            return countriesBordersArray.push(completeCountry.name.common)
                        }
                    })
                })

            

            return (

                <div key={`countryDetails${country._id}`} className="h2 m-5 ">

                    <table className="table-primary table-bordered d-flex justify-content-around border position-absolute top-50 end-0 translate-middle ">

                        <tbody >
                            <tr className='pt-3 d-flex flex-column align-items-center h1 p-4 m-5' >
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} /> {country.name.common}
                            </tr>

                            <tr  >
                                <td > <strong>Capital</strong>  </td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr >
                                <td><strong>Area</strong> </td>
                                <td>{country.area}km2</td>
                            </tr>
                            <tr >
                                <td><strong>Border</strong> </td>
                                {/*  ^Parche para poder crear los links */}
                                <td className="p-3">{countriesBordersArray.map((countryInBorder) => <p /* onClick={changeCountry()} */ >{countryInBorder}  </p>)}</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            )
        }

    }
}

export default CountryDetails;