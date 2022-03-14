import { useState, useEffect } from 'react';
import axios from 'axios';
import SongForm from './SongForm';
import SongtList from './SongList';
import { useLocation, useParams } from 'react-router-dom';


const Song = ({}) => {
  const [songs, setSongs] = useState([])
  const location = useLocation();
  const { songId, Title } = location.state

  useEffect( () => {
    axios.get(`/api/charts/${chartId}/artists`)
      .then( res => setSongs(res.data) )
      .catch( err => console.log(err))
  }, [])

  // create
  const addSong = (Title) => {
    axios.post(`/api/charts/${chartId}/artists`, { artist })
    .then( res => setSongs([...songs, res.data]) )
    .catch( err => console.log(err))
  }

  // update 
  const updateSong = (id, title) => {
    axios.put(`/api/charts/${chartId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedSongs = song.map( s => {
          if (s.id === id) {
            return res.data 
          }
          return s
        })
        setSongs(newUpdatedSongs)
      })
      .catch( err => console.log(err))
  }

  // destroy
  const deleteSongs = (id) => {
    axios.delete(`/api/chart/${chartId}/artists/${id}`)
      .then( res => {
        setSongs( song.filter( s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Artist: {artistName}</h1>
      <h3>Songs</h3>
      <SongForm addSong={addSong} />
      <SongList
        songs={songs}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    </>
  )
}

export default Song;