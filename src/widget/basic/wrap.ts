import {Widget} from "../../base";
import {
  Alignment,
  Axis,
  CrossAxisAlignment,
  double,
  TextDirection,
  VerticalDirection,
  WrapAlignment
} from "../../types";

interface WrapParam {
  children?: Widget[];
  alignment?: Alignment;
  crossAxisAlignment?: CrossAxisAlignment;
  direction?: Axis;
  runAlignment?: WrapAlignment;
  runSpacing?: double;
  spacing?: double;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
}

export class WrapWidget extends Widget {
  children?: Widget[];
  alignment?: Alignment;
  crossAxisAlignment?: CrossAxisAlignment;
  direction?: Axis;
  runAlignment?: WrapAlignment;
  runSpacing?: double;
  spacing?: double;
  textDirection?: TextDirection;
  verticalDirection?: VerticalDirection;
  constructor(param: WrapParam) {
    super('Wrap', [
      'children', 'alignment', 'crossAxisAlignment', 'direction', 'runAlignment',
      'runSpacing', 'spacing', 'textDirection', 'verticalDirection'
    ]);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Wrap(param: WrapParam){return new WrapWidget(param)};


