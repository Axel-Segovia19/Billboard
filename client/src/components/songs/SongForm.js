import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, title, updateSong, setEdit }) => {
  const [song, setSong] = useState({ title: '' })

  useEffect( () => {
    if (id) {
      setSong({ title, genre })
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
    setSong({ title: '' })
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
        
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;