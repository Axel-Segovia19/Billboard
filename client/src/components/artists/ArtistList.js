import Artist from './Artist.js';

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
<>
  {artists.map( c =>
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