import {Widget} from "../../base";
import {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
  TextBaseline,
  TextDirection, VerticalDirection
} from "../../types";

interface RowParam {
  children?: Widget[];
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisAlignment?: MainAxisAlignment;
  mainAxisSize?: MainAxisSize;
  textBaseline?: TextBaseline;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
}

export class RowWidget extends Widget implements RowParam {
  children?: Widget[];
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisAlignment?: MainAxisAlignment;
  mainAxisSize?: MainAxisSize;
  textBaseline?: TextBaseline;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
  constructor(param: RowParam) {
    super('Row', ['children', 'crossAxisAlignment', 'mainAxisAlignment', 'mainAxisSize', 'textBaseline', 'textDirection', 'verticalDirection']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Row(param: RowParam) {
  return new RowWidget(param)
}
