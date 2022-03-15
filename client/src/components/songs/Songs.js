import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SongForm from './SongForm';
import SongList from './SongList';

const Songs = () => {
  const { artistId } = useParams()
  const [songs, setSongs] = useState([])

  useEffect( () => {
    axios.get(`/api/artists/${artistId}/songs`)
      .then( res => setSongs(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addSong = (song) => {
    axios.post(`/api/artists/${artistId}/songs`, { song })
      .then( res => setSongs([...songs, res.data]))
      .catch( err => console.log(err) )
  }

  const updateSong = (id, song) => {
    axios.put(`/api/artists/${artistId}/songs/${id}`, { song })
      .then( res => {
        const newUpdatedSongs = songs.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setSongs(newUpdatedSongs)
      })
      .catch( err => console.log(err) )
  }

  const deleteSong = (id) => {
    axios.delete(`/api/artists/${artistId}/songs/${id}`)
      .then( res => {
        setSongs(songs.filter( s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>songs</h1>
      <SongForm addSong={addSong} />
      <SongList 
        songs={songs} 
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    </>
  )
}

export default Songs;