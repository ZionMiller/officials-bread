
import React, {useState, useEffect } from 'react'
import RepContainer from "./RepContainer";
import Header from './Header'; 
import Search from './Search';
import FilterByState from './FilterByState';

import legislatorsData from '../data/legislatorsData';
import { all } from 'q';

function App() {
  
  const [allTransactions, setAllTransactions] = useState([]);
  const [search, setSearch] = useState(""); 
  const [stateSelected, setStateSelected] = useState("");

  const legislators = legislatorsData; 

  useEffect(() => {
    fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json") 
      .then(res => res.json())
      .then(data => setAllTransactions(data))
  }, [])

  function handleSearch(event) { 
    setSearch((search) => search = event.target.value) 
  } 

  function handleStateChange(event) { 
    setStateSelected(event.target.value)
  }

  const legislatorsToDisplay = legislators.filter((legislator) => {
    if (stateSelected === "") { 
      return legislator.name.official_full.toLowerCase().includes(search.toLowerCase())
    }
    else {
      return stateSelected === legislator.terms[legislator.terms.length-1].state &&
      legislator.name.official_full.toLowerCase().includes(search.toLowerCase())
    }
  })

  return (
    <div>
        <Header /> 
        <Search 
          handleSearch={handleSearch}
        />
        <FilterByState 
          handleStateChange={handleStateChange}
        />
        <RepContainer 
          legislators={legislatorsToDisplay}
        />
    </div>
  )
}

export default App
