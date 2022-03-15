import { useState } from 'react';
import SongForm from './SongForm';
import { Link } from 'react-router-dom';

// export Link
const Song = ({ id, peak, run_time, title, chart_time, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <SongForm
              id={id}
              title={title}
              peak={peak}
              run_time={run_time}
              chart_time={chart_time}
              updateSong={updateSong}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1>Title: {title}</h1>
          <p>{run_time}</p>
          <p>{chart_time}</p>
          <p>{peak}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteSong(id)}>Delete</button>
    
        </>
      }
    </>
  )
}

export default Song;