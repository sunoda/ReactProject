import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [ data, setData ] = useState()
  const [ counties, setCounties ] = useState()
  const [ records, setRecords ] = useState()
  const [ reverse, setReverse] = useState(false)
  useEffect(() => {
    async function fetchData(){
      const result = await axios('https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json');

      result.data.records.sort((prev, next) => prev.PM25 - next.PM25)
      setData({ ...result.data})
      setRecords(result.data.records)
      let cities = new Set(result.data.records.map(record => record.county))
      setCounties([...cities])
    }
    fetchData()
  }, [])
  

  const sortPM25 = () => {
    setRecords(record => reverse ? record.sort((prev, next) => prev.PM25 - next.PM25) : record.sort((prev, next) => next.PM25 - prev.PM25))
    setReverse(!reverse)
  }
  const cityChange = (city) => {
    let after;
    if(city){
      after = data.records.filter(record => record.county === city)
    } else {
      after = data.records
    }
    setRecords(after)
  }
  const SiteSearch = (station) => {
    console.log(station);
    let after;
    if(station) {
      after = data.records.filter(record => record.Site.indexOf(station) >= 0)
    } else {
      after = data.records
    }
    setRecords(after)
    console.log(data.records)
    console.log(after)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <div className="functionArea">
            <label>查詢檢測站</label>
            <input type="text" onKeyPress={(event) => SiteSearch(event.target.value)}/>
            <select onChange={(event) => cityChange(event.target.value)}>
              <option value="" default>全部城市</option>
              {counties?.map(county => <option value={county} key={county}>{county}</option>)}
            </select>
            <button onClick={sortPM25}>濃度排序</button>
          </div>

          <table>
            <thead>
              <tr>
                {data?.fields.map(title => <th className="item" key={title.info.label}>{title.info.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records?.map(record =>
                <tr key={record.Site}>
                  <td className="item">{record.Site}</td>
                  <td className="item">{record.county}</td>
                  <td className="item">{record.PM25}</td>
                  <td className="item">{record.DataCreationDate}</td>
                  <td className="item">{record.ItemUnit}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
