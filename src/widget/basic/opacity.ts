import {Widget} from "../../base";
import {int} from "../../types";

interface OpacityParam {
  child?: Widget;
  opacity?: int;
  alwaysIncludeSemantics?: boolean;
}

export class OpacityWidget extends Widget {
  child?: Widget;
  opacity?: int;
  alwaysIncludeSemantics?: boolean;
  constructor(param: OpacityParam) {
    super('Opacity', ['child', 'opacity', 'alwaysIncludeSemantics']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Opacity(param: OpacityParam){return new OpacityWidget(param)};
