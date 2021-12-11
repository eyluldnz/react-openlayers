import { useContext, useEffect} from "react";
import MapContext from "../context/mapContext";
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

function TileLayerMap() {

    const {map}= useContext(MapContext);

    useEffect(() => {

        if(!map) return;


        //componentDidMount

        let tileLayer=new TileLayer({source:new OSM()});
        map.addLayer(tileLayer);

        //ComponentWillUnmount
        return ()=> {
            if(map){
                map.removeLayer(tileLayer);
            }
        };
    },[map]);

    return null;
}

export default TileLayerMap;