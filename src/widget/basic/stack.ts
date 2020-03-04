import {Widget} from "../../base";
import {
  Alignment,
  Overflow, StackFit,
  TextDirection
} from "../../types";

interface StackParam {
  children?: Widget[];
  alignment?: Alignment;
  fit?: StackFit;
  overflow?: Overflow;
  textDirection?: TextDirection;
}

export class StackWidget extends Widget implements StackParam {
  children?: Widget[];
  alignment?: Alignment;
  fit?: StackFit;
  overflow?: Overflow;
  textDirection?: TextDirection;
  constructor(param: StackParam) {
    super('Stack', ['children', 'alignment', 'fit', 'overflow', 'textDirection']);
    if (param) for (let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Stack(param: StackParam) {
  return new StackWidget(param)
}
