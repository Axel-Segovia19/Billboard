import { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList.js';
import { useLocation, useParams } from 'react-router-dom';


const Artists = ({}) => {
  const [artists, setArtists] = useState([])
  const location = useLocation();
  const { chartId, chartTitle } = location.state


  useEffect( () => {
    axios.get(`/api/charts/${chartId}/artists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err))
  }, [])

  // create
  const addArtist = (artist) => {
    axios.post(`/api/charts/${chartId}/artists`, { artist })
    .then( res => setArtists([...artists, res.data]) )
    .catch( err => console.log(err))
  }

  // update 
  const updateArtist = (id, artist) => {
    axios.put(`/api/charts/${chartId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artists.map( a => {
          if (a.id === id) {
            return res.data 
          }
          return a
        })
        setArtists(newUpdatedArtists)
      })
      .catch( err => console.log(err))
  }

  // destroy
  const deleteArtist = (id) => {
    axios.delete(`/api/charts/${chartId}/artists/${id}`)
      .then( res => {
        setArtists( artists.filter( a => a.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Chart: {chartTitle}</h1>
      <h3>Artists</h3>
      <ArtistForm addArtist={addArtist} />
      <ArtistList
        artists={artists}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    </>
  )
}

export default Artists;