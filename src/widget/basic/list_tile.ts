import {Widget} from "../../base";
import {EdgeInsetsProperty} from "../../property/edgeInsets_param";

interface ListTileParam {
  contentPadding?: EdgeInsetsProperty;
  dense?: boolean;
  enabled?: boolean;
  isThreeLine?: boolean;
  leading?: Widget;
  selected?: boolean;
  subtitle?: Widget;
  title?: Widget;
  trailing?: Widget;
  //todo: tapEvent?: Widget;
}

export class ListTileWidget extends Widget {
  contentPadding?: EdgeInsetsProperty;
  dense?: boolean;
  enabled?: boolean;
  isThreeLine?: boolean;
  leading?: Widget;
  selected?: boolean;
  subtitle?: Widget;
  title?: Widget;
  trailing?: Widget;

  constructor(param: ListTileParam) {
    super('ListTile', [
      'contentPadding', 'dense', 'enabled', 'isThreeLine', 'leading',
      'selected', 'subtitle', 'title', 'trailing',
    ]);
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function ListTile(param: ListTileParam){return new ListTileWidget(param)};
