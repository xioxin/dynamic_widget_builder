import {Widget} from "../../base";

interface ExpandedSizedBoxParam {
  child?: Widget;
}

export class ExpandedSizedBoxWidget extends Widget {
  child?: Widget;
  constructor(param: ExpandedSizedBoxParam) {
    super('ExpandedSizedBox', ['child']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function ExpandedSizedBox(param: ExpandedSizedBoxParam){return new ExpandedSizedBoxWidget(param)};
