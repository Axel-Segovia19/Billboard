import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Charts from './components/charts/Charts';
import Artists from './components/artists/Artists';
import Songs from './components/songs/Songs';


const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/charts" element={ <Charts /> } />
      <Route path="/charts/:chartId/artists" element={ <Artists /> } />
      <Route path="/artists/:artistId/songs" element={ <Songs /> } />
      <Route path="*" element={ <Nomatch /> } />
    </Routes>
    
  </>
)

export default App;