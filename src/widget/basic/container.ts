import {Widget} from "../../base";
import {Alignment, double} from "../../types";
import {BoxConstraintsProperty} from "../../property/box_constraints";
import {ColorProperty} from "../../property/color";
import {EdgeInsetsProperty} from "../../property/edgeInsets_param";

interface ContainerParam {
  child?: Widget;
  alignment?: Alignment;
  width?: double;
  height?: double;
  margin?: EdgeInsetsProperty;
  padding?: EdgeInsetsProperty;
  color?: ColorProperty;
  constraints?: BoxConstraintsProperty;
  // todo: click_event
}

export class ContainerWidget extends Widget {
  child?: Widget;
  alignment?: Alignment;
  width?: double;
  height?: double;
  margin?: EdgeInsetsProperty;
  padding?: EdgeInsetsProperty;
  color?: ColorProperty;
  constraints?: BoxConstraintsProperty;

  constructor(param: ContainerParam) {
    super('Container', ['child', 'alignment', 'width', 'height', 'margin', 'padding', 'color', 'constraints']);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Container(param: ContainerParam){return new ContainerWidget(param)};
