import {Widget} from "../../base";
import {
  Alignment,
  CrossAxisAlignment,
  double,
  MainAxisAlignment,
  MainAxisSize,
  TextBaseline,
  TextDirection, VerticalDirection
} from "../../types";

interface ColumnParam {
  children?: Widget[];
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisAlignment?: MainAxisAlignment;
  mainAxisSize?: MainAxisSize;
  textBaseline?: TextBaseline;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
}

export class ColumnWidget extends Widget implements ColumnParam {
  children?: Widget[];
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisAlignment?: MainAxisAlignment;
  mainAxisSize?: MainAxisSize;
  textBaseline?: TextBaseline;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
  constructor(param: ColumnParam) {
    super('Column', ['children', 'crossAxisAlignment', 'mainAxisAlignment', 'mainAxisSize', 'textBaseline', 'textDirection', 'verticalDirection']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Column(param: ColumnParam) {
  return new ColumnWidget(param)
}
