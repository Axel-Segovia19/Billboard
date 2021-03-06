import { useState, useEffect } from 'react';

const ChartForm = ({ addChart, id, name, award, position, updateChart, setEdit}) => {
  const [chart, setChart] = useState({ name: '', award: false, position: 0}) 

  useEffect( () => {
    if (id) {
      setChart({ name, award, position })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateChart(id, chart)
      setEdit(false)
    } else {
      addChart(chart)
    }
    setChart({ name: '', award: false, postion: 0 })
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        
        <input
          name='name'
          value={chart.name}
          onChange={ (e) => setChart({ ...chart, name: e.target.value })}

          placeholder='Name'
          required
        />

        {/* <input type="checkbox"
        name='award'
        value={chart.award}
        onChange={ (e) => setChart({ ...chart, award: e.target.value })}
        /> */}
        <input
          name='position'
          value={chart.position}
          onChange={ (e) => setChart({ ...chart, position: e.target.value })}

  
          required
          />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ChartForm;