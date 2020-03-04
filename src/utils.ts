import {double, FontStyle, FontWeight, TextDecoration} from "./types";
import {Widget} from "./base";


export class Color {
    constructor(public color: number) {
    }
    static hex( hex: string) {

    }
    toJson() {
        return this.color;
    }
}

export interface TextStyleParam {
    color?: Color;
    debugLabel?: string;
    decoration?: TextDecoration;
    fontFamily?: string;
    fontSize?: double;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
}
export class TextStyle extends Widget {
    public color?: Color;
    public debugLabel?: string;
    public decoration?: TextDecoration;
    public fontFamily?: string;
    public fontSize?: double;
    public fontStyle?: FontStyle;
    public fontWeight?: FontWeight;
    constructor(param: TextStyleParam) {
        super(null, ['color', 'debugLabel', 'decoration', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight']);
        this.color = param.color;
        this.debugLabel = param.debugLabel;
        this.decoration = param.decoration;
        this.fontFamily = param.fontFamily;
        this.fontSize = param.fontSize;
        this.fontStyle = param.fontStyle;
        this.fontWeight = param.fontWeight;
    }
}
