import {Widget} from "../../base";
import {double} from "../../types";
import {ColorProperty} from "../../property/color";
import {EdgeInsetsProperty} from "../../property/edgeInsets_param";

interface RaisedButtonParam {
  child?: Widget;
  color?: ColorProperty;
  disabledColor?: ColorProperty;
  disabledElevation?: double;
  disabledTextColor?: ColorProperty;
  elevation?: double;
  padding?: EdgeInsetsProperty;
  splashColor?: ColorProperty;
  textColor?: ColorProperty;
  //todo: click_event
}

export class RaisedButtonWidget extends Widget {
  child?: Widget;
  color?: ColorProperty;
  disabledColor?: ColorProperty;
  disabledElevation?: double;
  disabledTextColor?: ColorProperty;
  elevation?: double;
  padding?: EdgeInsetsProperty;
  splashColor?: ColorProperty;
  textColor?: ColorProperty;

  constructor(param: RaisedButtonParam) {
    super('RaisedButton', [
      'child', 'color', 'disabledColor', 'disabledElevation',
      'disabledTextColor', 'padding', 'elevation',
      'splashColor', 'textColor'
    ]);
    if (param) for (let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function RaisedButton(param: RaisedButtonParam) {
  return new RaisedButtonWidget(param)
}
