//)Este es el componente que renderizaremos
//a través de la Route del react-router-dom,

import { useState } from "react"
/* import axios from 'axios';
import React from "react"; */
/* //^ no hace falta el Json ya que la info la va a recibir por props, esta puesto para poder ver cómo funciona */


const CountryDetails = ({ countrySelected }) => {


    console.log({countrySelected});
    /*const imageCode = country.alpha2Code.toLowerCase();
    const countryBorders = country.borders;
    console.log(countryBorders) */;

    return (
        <div key="blu">{countrySelected}</div>)
    /*   <div className="countryDetails">

          <table className="table-primary table-bordered table-striped border ">
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


      </div>
  ) */
}

export default CountryDetails;