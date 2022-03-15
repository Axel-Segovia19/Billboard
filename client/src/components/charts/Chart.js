import { useState } from 'react';
import ChartForm from './ChartForm';
import { Link } from 'react-router-dom';

const Chart = ({ id, name, updateChart, deleteChart }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {/* inline styling */}
      <h1 style={{ color: 'teal', fontSize: '34px' }}>{name}</h1>
      {
        editing ?
        <>
          <ChartForm 
            id={id}
            name={name}
            updateChart={updateChart}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button 
            onClick={() => setEdit(true)}
           
          >
            Edit
          </button>
          <button 
            onClick={() => deleteChart(id)}
           
          >
            Delete
          </button>
          <Link 
            to={`/charts/${id}/artists`}
            state={{ chartId: id, chartName: name }}
          >
          Artists
          </Link>
        </>
      }
    </>
  )
}

export default Chart;