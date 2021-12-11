import * as ol from "ol";
import { useEffect, useRef, useState } from "react";
import MapContext from "../context/mapContext";

function Map({ children, zoom, center }) {

    const mapRef = useRef();

    const [map, setMap] = useState(null);

    useEffect(() => {

        //componentDidMount
        const mapObject = new ol.Map({
            view: new ol.View({
                center: [0, 0],
    zoom: 2,
            }),
            layers: [],
        });
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        //ComponentWillUnmount
        return ()=>mapObject.setTarget(undefined); 
    },[]);
    // zoom change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setCenter(center)
	}, [center])

    return (
        <MapContext.Provider value={{map}}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    )
}

export default Map;