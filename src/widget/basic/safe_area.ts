import {Widget} from "../../base";
import {double} from "../../types";
import {EdgeInsetsProperty} from "../../property/edgeInsets_param";

interface SafeAreaParam {
  child?: Widget;
  bottom?: double;
  right?: double;
  top?: double;
  left?: double;
  minimum?: EdgeInsetsProperty;
}

export class SafeAreaWidget extends Widget {
  child?: Widget;
  bottom?: double;
  right?: double;
  top?: double;
  left?: double;
  minimum?: EdgeInsetsProperty;
  constructor(param: SafeAreaParam) {
    super('SafeArea', ['child', 'bottom', 'right', 'top', 'left', 'minimum']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function SafeArea(param: SafeAreaParam){return new SafeAreaWidget(param)};
