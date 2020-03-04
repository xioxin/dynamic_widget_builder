import {Widget} from "../../base";
import {int} from "../../types";

interface ExpandedParam {
  child?: Widget;
  flex?: int;
}

export class ExpandedWidget extends Widget {
  child?: Widget;
  flex?: int;
  constructor(param: ExpandedParam) {
    super('Expanded', ['child', 'flex']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Expanded(param: ExpandedParam){return new ExpandedWidget(param)};
