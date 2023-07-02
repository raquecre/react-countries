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
    //? ya tengo el objeto seleccionado, pero en cuanto añado el return el logueo de country marca como indefinido
    //^ tengo que gestionar que pasa cuando es nulo(hecho) y cuando es repetido, para que no lo pinte

    if (idCountrySelected !== null && idCountrySelected !== undefined) {
        const country = countries?.filter((country) => country._id === idCountrySelected)[0]
        console.log(country);
         const imageCode = country.alpha2Code.toLowerCase(); 
        // const countryBorders = country.borders;
        // console.log(countryBorders)
        if (country !== null && country !== undefined) {
            return (

                <div key={country._id} className="countryDetails">

                    <table className="table-primary table-bordered table-striped border ">
                        <thead>
                             <th ><img src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} /> {country.name.common} </th> 
                        </thead>

                        <tbody>
                            <tr key={country.capital}>
                                <td>Capital </td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr key={country.area}>
                                <td>Area </td>
                                <td>{country.area}km2</td>
                            </tr>
                            <tr key={country.alpha2Code}>
                                <td>Border </td>
                                <td> {country.borders.map((border) => <p>{border}</p>)} </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            )
        }

    }
}

export default CountryDetails;