import { identifier } from '@babel/types'
import { type } from 'os';
import React, { useState } from 'react'

function RepCard({ legislator }) {
  const {id, name, bio, terms} = legislator;
  const bioguide = id.bioguide;
  const currentTerm = terms[terms.length -1];

  let partyColor = ""; 
  {currentTerm.party === "Republican" ? partyColor = "red" : partyColor = "blue"}

  return ( 
    <li className="cards__item">
    <div className="card">
      <img
        src={`/225x275/${bioguide}.jpg`}
        alt={name.official_full}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__title">{name.official_full}</div>
        <div className="card__detail">
          <p>Serves: {
          currentTerm.type === "sen" ? 
          "Senate" : 
          "House"
          } </p> 
          <p style={{ color: partyColor }}> Party: {currentTerm.party} </p> 
          <p> State: {currentTerm.state} </p>
          <br></br>
          <button className="center">Summary</button>
        </div>
      </div>
    </div>
  </li>
  ) 
} 

export default RepCard