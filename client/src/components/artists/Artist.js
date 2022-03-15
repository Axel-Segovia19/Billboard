import { useState } from 'react';
import ArtistForm from './ArtistForm';
import { Link } from 'react-router-dom';

// export Link
const Artist = ({ id, name, upcoming, genre, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <ArtistForm
              id={id}
              name={name}
              genre={genre}
              upcoming={upcoming}
              updateArtist={updateArtist}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        :
        <>
          <h1 style={{ color: 'teal', fontSize: '34px' }}>Title: {name}</h1>
          <p>{genre}</p>
          <p>Favorite: {upcoming ? "☆ Yes" : "x no"}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteArtist(id)}>Delete</button>
          <Link to={`/artists/${id}/songs`}> 
            <button>
              go to Songs
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default Artist;