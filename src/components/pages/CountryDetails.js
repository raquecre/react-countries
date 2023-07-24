//)Este es el componente que renderizaremos
//a través de la Route del react-router-dom,

import { useState } from "react"
import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";

const CountryDetails = ({ showCountry, updateState }) => {
    const urlCountries = 'https://ih-countries-api.herokuapp.com/countries?code=$';
    const [countries, setCountries] = useState();

    React.useEffect(() => {
        axios.get(urlCountries).then((response) => {
            setCountries(response.data);
        })

    }, [])
    console.log(showCountry);
    /*     if (showCountry !== null && showCountry !== undefined) { */
    /*         const country = countries?.filter((country) => country._id === showCountry)[0]
     */
    //const imageCode = country.alpha2Code.toLowerCase(); 
    // const countryBorders = country.borders;
    // console.log(countryBorders)
    /*         if (country !== null && country !== undefined) {
     */


    showCountry.borders.foreach((countryInBorder) => {
        countries?.foreach((completeCountry) => {
            if (completeCountry.alpha3Code === countryInBorder) {
                console.log(countryInBorder);
                console.log(completeCountry.name.common);

                return (<Link onClick={() => updateState(completeCountry)}>{completeCountry.name.common}</Link>)
            }
        })
    })




    return (

        <div key={`countryDetails${showCountry._id}`} className="h2 m-5 ">
            {/* //TODO dejar el tamaño de la tabla fijo para que el contenido en los casos de países con nombres largos no se sobreponga al scroll */}
            <table className="table-primary table-bordered d-flex justify-content-around border  ">

                <tbody >
                    <tr className='pt-3 d-flex flex-column align-items-center h1 p-4 m-5' >
                        <img alt="" height='auto' width='75%' src={`https://flagpedia.net/data/flags/icon/72x54/${showCountry.alpha2Code.toLowerCase()}.png`} /> {showCountry.name.common}
                    </tr >

                    <tr  >
                        <td className=" p-4 d-flex"> <strong>Capital</strong>  </td>
                        <td className=" p-4">{showCountry.capital}</td>
                    </tr>
                    <tr >
                        <td className=" p-4"><strong>Area</strong> </td>
                        <td className=" p-4">{showCountry.area} km2</td>
                    </tr>
                    <tr >
                        <td className=" p-4"><strong>Border</strong> </td>

                        <td className="d-flex flex-column" >
                            {showCountry.borders.foreach((countryInBorder) =>
                                countries?.foreach((completeCountry) => {
                                    if (completeCountry.alpha3Code === countryInBorder) {
                                        console.log(countryInBorder);
                                        console.log(completeCountry.name.common);

                                        return (
                                            <p >
                                                <Link onClick={() => updateState(completeCountry)}>{completeCountry.name.common}</Link>
                                            </p>
                                        )
                                    }
                                })
                            )}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
    /*   } */

}
/* } */

export default CountryDetails;