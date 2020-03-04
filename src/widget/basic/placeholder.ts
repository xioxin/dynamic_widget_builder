import {Widget} from "../../base";
import {ColorProperty} from "../../property/color";
import {double} from "../../types";

interface PlaceholderParam {
  color?: ColorProperty;
  strokeWidth?: double;
  fallbackWidth?: double;
  fallbackHeight?: double;
}

export class PlaceholderWidget extends Widget {
  color?: ColorProperty;
  strokeWidth?: double;
  fallbackWidth?: double;
  fallbackHeight?: double;
  constructor(param: PlaceholderParam) {
    super('Placeholder', ['color', 'strokeWidth', 'fallbackWidth', 'fallbackHeight']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Placeholder(param: PlaceholderParam){return new PlaceholderWidget(param)};
