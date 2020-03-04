import {Widget} from "../../base";
import {double} from "../../types";

interface AspectRatioParam {
  child?: Widget;
  aspectRatio?: double;
}

export class AspectRatioWidget extends Widget {
  child?: Widget;
  aspectRatio?: double;
  constructor(param: AspectRatioParam) {
    super('AspectRatio', ['child', 'aspectRatio']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function AspectRatio(param: AspectRatioParam){return new AspectRatioWidget(param)};
