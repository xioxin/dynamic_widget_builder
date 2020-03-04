import {Widget} from "../../base";
import {double, int, TextAlign, TextDirection, TextOverflow} from "../../types";
import {TextStyleProperty} from "../property/type_style";
export interface TextParam {
    textAlign?: TextAlign;
    overflow?: TextOverflow;
    maxLines?: int;
    semanticsLabel?: string;
    softWrap?: boolean;
    textDirection?: TextDirection,
    textScaleFactor?: double,
    style?: TextStyleProperty,
    //todo: textSpan?: TextSpan
}

export class TextWidget extends Widget {

    public data: string;
    textAlign?: TextAlign;
    overflow?: TextOverflow;
    maxLines?: int;
    semanticsLabel?: string;
    softWrap?: boolean;
    textDirection?: TextDirection;
    textScaleFactor?: double;
    style?: TextStyleProperty;

    constructor(data: string, param?: TextParam) {
        super('Text', ['data', 'textAlign', 'overflow', 'maxLines', 'semanticsLabel', 'softWrap', 'textDirection', 'textScaleFactor', 'style']);
        this.data = data;
        if(param) for(let key in param) (this as any)[key] = (param as any)[key];
    }
}

export function Text(data: string, param?: TextParam) {
    return new TextWidget(data, param);
}
