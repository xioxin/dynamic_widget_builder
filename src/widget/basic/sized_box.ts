import {Widget} from "../../base";
import {double} from "../../types";

interface SizedBoxParam {
  child?: Widget;
  width?: double;
  height?: double;
}

export class SizedBoxWidget extends Widget {
  child?: Widget;
  width?: double;
  height?: double;
  constructor(param: SizedBoxParam) {
    super('SizedBox', ['child', 'width', 'height']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function SizedBox(param: SizedBoxParam){return new SizedBoxWidget(param)};
