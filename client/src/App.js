import { useState, useEffect } from 'react';
import axios from 'axios';
import ChartForm from './components/charts/ChartForm';
import ChartList from './components/charts/ChartList';
const App = () => {
  const [charts, setCharts] = useState([])//we might need to modify this since we have input of our own.

  useEffect ( () => {
  // make a call to rails to grab all items "make an API"
  axios.get('/api/charts')
    .then( res => {
      setCharts(res.data)
    })
    .catch( err => console.log(err) )
  }, [])

  const addChart = (chart) => {
  //TODO make a call to our rails to create the item using the params
  //TODO update the state
  axios.post('/api/charts', { chart })
    .then( res => {
      setCharts([...charts, res.data ])
    })
    .catch( err => console.log(err) )
 }


  const updateChart = (id, chart) => {
   // TODO make a call to rails to update the item using params
    axios.put(`'/api/charts/${:id}`, )
  }

  const deleteChart = (id) => {
  // TODO make a call to our rails to delete item
  //TODO delete item in teh stae, display message
  }

return(
    <>
  <h1>Charts</h1>
  <ChartForm addChart={addChart} />
    </>
  )
}

export default App;
