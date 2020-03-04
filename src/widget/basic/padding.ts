import {Widget} from "../../base";
import {EdgeInsetsProperty} from "../../property/edgeInsets_param";

interface PaddingParam {
  child?: Widget;
  padding?: EdgeInsetsProperty;
}

export class PaddingWidget extends Widget {
  child?: Widget;
  padding?: EdgeInsetsProperty;

  constructor(param: PaddingParam) {
    super('Padding', ['child', 'padding']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Padding(param: PaddingParam){return new PaddingWidget(param)};
