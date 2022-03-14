import { useState } from 'react';
import ChartForm from './ChartForm';
import Artists from '../artists/Artists';
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
            style={styles.btn}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteChart(id)}
            style={styles.deleteBtn}
          >
            Delete
          </button>
          {/* <Topics subId={id} /> */}
          <Link 
            to={`/charts/${id}/`}
            state={{ chartId: id, chartName: name }}
          >
            Artists
          </Link>
        </>
      }
    </>
  )
}
// styling as a module
const styles = {
  btn: {
    background: 'yellow',
    color: 'orange',
    fontSize: '12px',
    borderRadius: '10px',
  },
  deleteBtn: {
    background: 'red',
    color: 'white',
    fontSize: '12px',
    borderRadius: '5px',
  }
}

export default Chart;