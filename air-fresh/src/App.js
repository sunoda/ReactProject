import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [ data, setData ] = useState()
  const [ reverse, setReverse] = useState(false)
  useEffect(() => {
    async function fetchData(){
      const result = await axios('https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json');

      result.data.records.sort((prev, next) => prev.PM25 - next.PM25)
      setData({ ...result.data})
    }
    fetchData()
  }, [])
  

  const sortPM25 = () => {
    reverse ? data.records.sort((prev, next) => prev.PM25 - next.PM25) : data.records.sort((prev, next) => next.PM25 - prev.PM25)
    setData(prevData => { return { ...prevData}})
    setReverse(!reverse)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <button onClick={sortPM25}>濃度排序</button>
          <div className="title">
            {data?.fields.map(title => <div className="title" key={title.info.label}>{title.info.label}</div>)}
          </div>
          {data?.records.map(record => 
          <div className="item" key={record.Site}>
            <div className="item">{record.Site}</div>
            <div className="item">{record.county}</div>
            <div className="item">{record.PM25}</div>
            <div className="item">{record.DataCreationDate}</div>
            <div className="item">{record.ItemUnit}</div>
          </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
