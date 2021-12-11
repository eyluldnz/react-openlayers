import { useContext,useEffect } from "react";
import MapContext from "../context/mapContext";
import {Draw, Modify, Snap} from 'ol/interaction';
import {OSM, Vector as VectorSource} from 'ol/source';

import OLVectorLayer from "ol/layer/Vector";
import mapTool from "../tools/mapTool";

function Event(){

    const {map}= useContext(MapContext);

    useEffect(() => {

        if(!map) return;

        //componentDidMount

        const eventLayer=mapTool.createVectorLayer("event_layer");
       
        map.addLayer(eventLayer);

        const eventInteraction=mapTool.createDrawInteraction(
            "event_interaction","event_layer","Point",map
        );
        map.addInteraction(eventInteraction);

        eventInteraction.on("drawend",(event)=>{
            event.target.setActive(false);
            let provinceCount=map.getLayers().array_[1].values_.source.getFeatures().length
            for(let i=0;i<provinceCount;i++){
                let _feature=map.getLayers().array_[1].values_.source.getFeatures()[i];
                let _intersect=_feature.getGeometry().intersectsExtent(event.feature);
                if(_intersect){
                    console.log(_feature);
                }
                }
           
        })
        
        //ComponentWillUnmount
        return ()=> {
            if(map){
                ;
            }
        };
    },[map]);

    const addEventHandler=()=>{
       let interaction= map.getInteractions().getArray().find(x => x.get("name") === "event_interaction");
       interaction.setActive(true);
    }

    return(
        <div className="event-tool">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10">
                        <button  className="btn btn-primary"onClick={addEventHandler}>
                            Event Ekle
                        </button>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Event;