import { useEffect, useState } from "react";
import axios from 'axios';
import React from "react";
import { Link, NavLink, Routes } from "react-router-dom";

//Cada enlace debe ser un react-router-dom Link que utilizaremos para enviar el código del país (alpha3Code) a través de la URL.
const urlCountries = 'https://ih-countries-api.herokuapp.com/countries';

const CountriesList = () => {


    //Tomar valores de la api + mensaje tiempo de espera
    const [countries, setCountries] = useState();
    const [fetching, setFetching] = useState(true);

    React.useEffect(() => {
        axios.get(urlCountries).then((response) => {

            setCountries(response.data)
            setFetching(false);
        })

    }, [])

    return (
        <div   class="table-responsive  ms-5 mt-3  " >
            {fetching && <img src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />}

            <table data-bs-spy="scroll" class='table-primary  table-bordered table-striped border '>
                <tbody>
                    {countries?.map((country) => {
                        const imageCode = country.alpha2Code.toLowerCase();
                        //console.log(imageCode);
                        //const imgUrl = <Link to={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} />
                       // console.log(imgUrl);
                        return (
                            <tr class="table-hover "  key={country._id}>
                                <NavLink class="decoration-none" /* onClick={OpenCountryDetails por definir aún} */ >
                                    <td class="table-hover justify-content-start table-primary"> <img src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`}/> <p>{country.name.common}</p> </td>
                                <td> </td>
                                </NavLink>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CountriesList;