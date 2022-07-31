
import React, {useState, useEffect } from 'react'
import RepContainer from "./RepContainer";
import Header from './Header';

import legislatorsData from '../data/legislatorsData';
import { all } from 'q';

function App() {
  
  const [allTransactions, setAllTransactions] = useState([]);
  const [legislators, setLegislators] = useState([]); 

  useEffect(() => setLegislators(legislatorsData), [])

  useEffect(() => {
    fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json") 
      .then(res => res.json())
      .then(data => setAllTransactions(data))
  }, []) 

  return (
    <div>
        <RepContainer />
    </div>
  )
}

export default App
