import {double} from "../types";
import {Widget} from "../base";

export interface BoxConstraintsParam {
  minWidth?: double;
  maxWidth?: double;
  minHeight?: double;
  maxHeight?: double;
}
export class BoxConstraintsProperty extends Widget {
  minWidth?: double;
  maxWidth?: double;
  minHeight?: double;
  maxHeight?: double;
  constructor(param: BoxConstraintsParam){
    super(null, ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function BoxConstraints(param: BoxConstraintsParam) {
  return new BoxConstraintsProperty(param);
}
