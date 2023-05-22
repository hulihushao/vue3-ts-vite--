import * as ols from "ol";
import olLayerTile from "ol/layer/Tile";
import olSourceXYZ from "ol/source/XYZ";
import type{ Options } from "ol/layer/BaseTile"
let ol: any = {
    ...ols,
    layer: {
        Tile: olLayerTile,
    },
    source: {
        XYZ: olSourceXYZ
    }
}
export interface olLayerTileConfig extends Options<olSourceXYZ>{

   title?: string;
}
export default ol
