import Map from '../components/Map';
import TileLayerMap from "../components/TileLayerMap"
import VectorLayer from '../components/VectorLayer';
import Event from "../components/Event";
import MapContext from "../context/mapContext";

function HomePage() {
    return (

        <div>

            <Map>
                <TileLayerMap zIndex={0} />
                <VectorLayer />
                <Event />
            </Map>
          

        </div>
    );
}

export default HomePage;