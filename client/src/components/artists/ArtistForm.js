import { useState, useEffect } from 'react';

const ArtistForm = ({ addArtist, id, name, genre, updateArtist, setEdit }) => {
  const [artist, setArtist] = useState({ name: '', genre: '' })

  useEffect( () => {
    if (id) {
      setArtist({ name, genre })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTopic(id, artist)
      setEdit(false)
    } else {
      addArtist(artist)
    }
    setArtist({ name: '', genre: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          // type="number"
          name="name" 
          value={artist.name}
          onChange={(e) => setArtist({ ...artist, name: e.target.value })}
          required
          placeholder='name'
        />
        <label>Genre:</label>
        <textarea
          name="genre"
          value={artist.genre}
          onChange={(e) => setArtist({ ...artist, genre: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ArtistForm;