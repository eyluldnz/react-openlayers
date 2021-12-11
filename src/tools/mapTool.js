import {OSM, Vector as VectorSource} from 'ol/source';
import OLVectorLayer from "ol/layer/Vector";
import { Draw } from 'ol/interaction';

const createVectorLayer=(name)=>{

    return new OLVectorLayer({
        source:new VectorSource(),
        name:name
        });
}

const createDrawInteraction=(name,layer,type,map)=>{
    const source=findLayer(layer,map).getSource();
    const interaction=new Draw({
        source:source,
        type:type.toString()
    });
    interaction.set("name", name);

    interaction.setActive(false);

    return interaction;
}

const findLayer=(name,map)=>{
    return map.getLayers().getArray().find(layer=>layer.get("name")===name);
}

export const mapTool={
    createVectorLayer,
    createDrawInteraction
    
}
export default mapTool