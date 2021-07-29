import logo from './logo.svg';
import './App.css';
import { MusicPlayerProvider } from './components/MusicPlayerContext';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';

function App() {
  return (
    <div className="App">
      

<MusicPlayerProvider>
  <div className="container">
    <TrackList/>
    <PlayerControls/>
  </div>
</MusicPlayerProvider>

    </div>
  );
}

export default App;
