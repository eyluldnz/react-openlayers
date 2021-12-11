import * as ol from "ol";
import { useContext, useEffect} from "react";
import MapContext from "../context/mapContext";
import province from "../data/province.json";
import GeoJSON from 'ol/format/GeoJSON';
import {OSM, Vector as VectorSource} from 'ol/source';
import { Fill, Stroke, Style } from "ol/style";

import OLVectorLayer from "ol/layer/Vector";

function VectorLayer() {

    const {map}= useContext(MapContext);

    useEffect(() => {

        if(!map) return;


        //componentDidMount

        const vectorLayer=new OLVectorLayer({
            source:new VectorSource({
                features: new GeoJSON().readFeatures(province,{
                    featureProjection:"EPSG:3857",})
            }),
            style:new Style({
                stroke: new Stroke({
                  color: "blue",
                  width: 1,
                }),
                fill:new Fill({
                    color: "red",
                    opacity:0.5
                })
              }),
        });
       
        map.addLayer(vectorLayer);
        vectorLayer.setZIndex(0);
        //ComponentWillUnmount
        return ()=> {
            if(map){
                map.removeLayer(vectorLayer);
            }
        };
    },[map]);

    return null;
}

export default VectorLayer;