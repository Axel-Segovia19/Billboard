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

  axios.post('/api/charts', { chart })
    .then( res => {
      setCharts([...charts, res.data ])
    })
    .catch( err => console.log(err) )
 }


  const updateChart = (id, chart) => {
    axios.put(`'/api/charts/${id}`, { chart })
    .then( res => {
      const newUpdatedCharts = charts.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
      setCharts(newUpdatedCharts)
    })
    .catch( err => console.log(err) )
  }

  const deleteChart = (id) => {
    axios.delete(`/api/charts/${id}`)
      .then(res => {
          setCharts(charts.filter(c => c.id !== id ))
          alert(res.data.message)
      }) .catch( err => console.log(err) )
  }

return(
    <>
  <h1>Charts</h1>
  <ChartForm addChart={addChart} />
  <ChartList
      charts={charts}
      updateChart={updateChart}
      deleteChart={deleteChart}
      />
    </>
  )
}

export default App;
