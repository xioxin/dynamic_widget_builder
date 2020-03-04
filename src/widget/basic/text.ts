import {Widget} from "../../base";
import {Alignment, double, int, TextAlign, TextDirection, TextOverflow} from "../../types";
import {TextStyle} from "../../utils";

export interface TextParam {
    textAlign?: TextAlign;
    overflow?: TextOverflow;
    maxLines?: int;
    semanticsLabel?: string;
    softWrap?: boolean;
    textDirection?: TextDirection,
    textScaleFactor?: double,
    style?: TextStyle,
    //todo: textSpan?: TextSpan
}

export class Text extends Widget {

    public data: string;
    textAlign?: TextAlign;
    overflow?: TextOverflow;
    maxLines?: int;
    semanticsLabel?: string;
    softWrap?: boolean;
    textDirection?: TextDirection;
    textScaleFactor?: double;
    style?: TextStyle;

    constructor(data: string, param: TextParam) {
        super('Text', ['textAlign', 'overflow', 'maxLines', 'semanticsLabel', 'softWrap', 'textDirection', 'textScaleFactor', 'style']);
        this.data = data;
        if(param) for(let key in param) (this as any)[key] = (param as any)[key];
    }
}
