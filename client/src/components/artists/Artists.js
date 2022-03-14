import { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList.js';
import { useLocation, useParams } from 'react-router-dom';

// const Topics = ({ subId }) => {
const Artists = ({}) => {
  const [topics, setArtists] = useState([])
  // if you want to grab the id from the link state then:
  const location = useLocation();
  const { chartId, chartTitle } = location.state

  // is you want to grab the id from the url then
  // const { subId,  } = useParams()

  useEffect( () => {
    axios.get(`/api/charts/${chartId}/artists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err))
  }, [])

  // create
  const addArtist = (topic) => {
    axios.post(`/api/charts/${chartId}/artists`, { artist })
    .then( res => setArtists([...artists, res.data]) )
    .catch( err => console.log(err))
  }

  // update 
  const updateArtist = (id, artist) => {
    axios.put(`/api/charts/${chartId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artist.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setArtists(newUpdatedArtists)
      })
      .catch( err => console.log(err))
  }

  // destroy
  const deleteArtist = (id) => {
    axios.delete(`/api/chart/${chartId}/artists/${id}`)
      .then( res => {
        setArtists( artist.filter( t => t.id !== id ))
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