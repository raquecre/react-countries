//)Este es el componente que renderizaremos
//a través de la Route del react-router-dom,
// y debe recibir el código del país (alpha3Code) a través de la URL.
import { useState } from "react"
import axios from 'axios';
import React from "react";
const CountryDetails = () => {
    const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';
    const [countries, setCountries] = useState();

    React.useEffect(() => {
        axios.get(urlCountries).then((response) => {

            setCountries(response.data)

        })

    }, [])

    return (
        <div className="countryDetails">

            {countries?.map((country) => {
                const imageCode = country.alpha2Code.toLowerCase();
                const countryBorders = country.borders;
                console.log(countryBorders);
                return (
                    <table class="table-primary table-bordered table-striped border ">

                        <thead>
                            <td>
                                <th><img src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} />  </th>
                                <th>{country.name.common} </th>
                            </td>
                        </thead>

                        <tbody>
                            <tr>
                                <th>Capital </th>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <th>Area </th>
                                <td>{country.area}km2</td>
                            </tr>
                            <tr>
                                 <th>Border </th>
                                <td> {countryBorders.map((border) => <p>{border}</p>)} </td> 


                            </tr>


                        </tbody>
                    </table>
                )
            })}

        </div>
    )
}

export default CountryDetails