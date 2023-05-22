import * as ols from "ol";
import olLayerTile from "ol/layer/Tile";
import olSourceXYZ from "ol/source/XYZ";

let ol:any= {
    ...ols,
    layer:{
        Tile:olLayerTile,
    },
    source:{
        XYZ:olSourceXYZ
    }
}

export default ol
