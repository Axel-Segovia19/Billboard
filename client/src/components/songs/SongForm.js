import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, peak, run_time, chart_time, title, updateSong, setEdit }) => {
  const [song, setSong] = useState({ title: '', peak: 0, run_time: '', chart_time: '' })

  useEffect( () => {
    if (id) {
      setSong({ title, peak, run_time, chart_time })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ title: '', peak, run_time, chart_time })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          // type="number"
          title="title" 
          value={song.title}
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
          placeholder='name'
        />
        <input
        // type="number"
        title="run_time" 
        value={song.run_time}
        onChange={(e) => setSong({ ...song, run_time: e.target.value })}
        required
        placeholder='run time'
      />
         <input
          // type="number"
          title="chart_time" 
          value={song.chart_time}
          onChange={(e) => setSong({ ...song, chart_time: e.target.value })}
          required
          placeholder='Chart time'
        />
        <input
          name='peak'
          value={song.peak}
          onChange={ (e) => setSong({ ...song, peak: e.target.value })}

  
          required
          />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;