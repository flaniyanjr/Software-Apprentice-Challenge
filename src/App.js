import './App.css';
import React, { useEffect, useState } from "react";
import AdList from './AdList';

function App() {
  const [adData, setAdData]= useState({})

  useEffect(() => {
    fetch('http://localhost:3000/fakeDataSet')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then(data => setAdData(data))
      }
      else {
        console.log('Failed to retrieve ad data')
      }
    })
  }, [])

  return (
    <div>
      <AdList adData= {adData}/>
    </div>
  );
}

export default App;
