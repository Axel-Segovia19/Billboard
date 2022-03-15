import Artist from './Artist';

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
<>
  {artists.map( a =>
    <Artist
      key={a.id}
      {...a}
      updateArtist={updateArtist}
      deleteArtist={deleteArtist}
      />
    )}
   </>
)

export default ArtistList;