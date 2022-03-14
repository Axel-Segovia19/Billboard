// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ChartForm from './ChartForm';
// import ChartList from './ChartList';

// const Charts = () => {
//   const [charts, setCharts] = useState([])

//   useEffect( () => {
//     // make a call to our rails to grab all items
//     axios.get('/api/charts')
//       .then( res => {
//         // update the state with the items from the database
//         setCharts(res.data)
//       })
//       .catch( err => console.log(err) )
//   }, [])

//           // { title: 'Food' }
//   const addChart = (chart) => {
//     // TODO make a call to our rails to create the item using the params
//                     // { sub: { title: 'Food' }}
//     axios.post('/api/charts', { chart })
//       .then( res => {
//         // add the new sub in our state
//         setCharts([...charts, res.data ])
//       })
//       .catch( err => console.log(err) )
//   }

//   const updateChart = (id, chart) => {
//     // TODO make a call to our rails to updating the item using the params
//     axios.put(`/api/charts/${id}`, { chart })
//     // TODO update the state
//       .then( res => {
//         const newUpdatedChart = chart.map( c => {
//           if (c.id === id) {
//             return res.data
//           }
//           return c
//         })
//         setCharts(newUpdatedCharts)
//       })
//       .catch( err => console.log(err) )
//   }

//   const deleteChart = (id) => {
//     // TODO make a call to our rails to delete the item
//     axios.delete(`/api/charts/${id}`)
//       .then(res => {
//         // TODO delete item in the state, display message 
//         setCharts(chart.filter( c => c.id !== id ))
//         alert(res.data.message)
//       })
//       .catch( err => console.log(err) )
//   }

//   return(
//     <>
//       <h1>Charts</h1>
//       <ChartForm addChart={addChart} />
//       <ChartList 
//         charts={chart}
//         updateChart={updateChart}
//         deleteChart={deleteChart}
//       />
//     </>
//   )
// }

// export default Charts;