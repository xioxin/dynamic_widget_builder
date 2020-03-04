import {double, FontStyle, FontWeight, TextDecoration} from "../../types";
import {Widget} from "../../base";
import {ColorProperty} from "./color";

export interface TextStyleParam {
  color?: ColorProperty;
  debugLabel?: string;
  decoration?: TextDecoration;
  fontFamily?: string;
  fontSize?: double;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
}

export class TextStyleProperty extends Widget {
  public color?: ColorProperty;
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

export function TextStyle(param: TextStyleParam) {
  return new TextStyleProperty(param);
}
