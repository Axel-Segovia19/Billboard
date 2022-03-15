
import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <>
    { songs.map( s => 
      <Song 
        key={s.id}
        {...s}
        fav={false}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
  </>
)

export default SongList;