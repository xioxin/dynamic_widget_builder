import {Widget} from "../../base";
import {Alignment, double} from "../../types";


interface AlignParam {
    child?: Widget,
    alignment?: Alignment,
    widthFactor?: double,
    heightFactor?: double,
}

export class Align extends Widget {

    child?: Widget;
    alignment?: Alignment;
    widthFactor?: double;
    heightFactor?: double;

    constructor(param: AlignParam) {
        super('Align', ['child', 'alignment', 'widthFactor', 'heightFactor']);
        this.child = param.child;
        this.alignment = param.alignment;
        this.widthFactor = param.widthFactor;
        this.heightFactor = param.heightFactor;
    }
}
