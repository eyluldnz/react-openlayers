
import './App.css';
import Map from './components/Map';
import TileLayerMap from "./components/TileLayerMap"
import VectorLayer from './components/VectorLayer';

function App() {
  return (
    <div className="App">
     <Map>
       <TileLayerMap zIndex={0}/>
        <VectorLayer/>
         
     </Map>

    </div>
  );
}

export default App;
