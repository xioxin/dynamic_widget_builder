import {OutField, Widget} from "../../base";
import {ColorProperty} from "../../property/color";
import {Alignment, BlendMode, BoxFit, double, FilterQuality, ImageRepeat} from "../../types";

interface ImageBaseParam {
  semanticLabel?: string;
  excludeFromSemantics?: boolean;
  scale?: double;
  width?: double;
  height?: double;
  color?: ColorProperty;
  blendMode?: BlendMode;
  boxFit?: BoxFit;
  alignment?: Alignment;
  repeat?: ImageRepeat;
  // todo: centerSlice
  matchTextDirection?: boolean;
  gaplessPlayback?: boolean;
  filterQuality?: FilterQuality;
  // todo: click_event;
}

export class ImageBaseWidget extends Widget {
  semanticLabel?: string;
  excludeFromSemantics?: boolean;
  scale?: double;
  width?: double;
  height?: double;
  color?: ColorProperty;
  blendMode?: BlendMode;
  boxFit?: BoxFit;
  alignment?: Alignment;
  repeat?: ImageRepeat;
  // todo: centerSlice
  matchTextDirection?: boolean;
  gaplessPlayback?: boolean;
  filterQuality?: FilterQuality;
  // todo: click_event;

  constructor(widgetName?: string, outFields: (OutField | string)[] = []) {
    super(widgetName, [
      'semanticLabel', 'excludeFromSemantics', 'scale',
      'width', 'height', 'color', 'blendMode', 'boxFit', 'alignment',
      'repeat', 'matchTextDirection', 'gaplessPlayback', 'filterQuality',
        ...outFields
    ]);
  }
}

export class NetworkImageWidget extends ImageBaseWidget {
  src: string;
  constructor(src: string, param?: ImageBaseParam) {
    super('NetworkImage', ['src']);
    this.src = src;
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export class AssetImageWidget extends ImageBaseWidget {
  name: string;
  constructor(name: string, param?: ImageBaseParam) {
    super('AssetImage', ['name']);
    this.name = name;
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export class FileImageWidget extends ImageBaseWidget {
  filePath: string;
  constructor(filePath: string, param?: ImageBaseParam) {
    super('AssetImage', ['name']);
    this.filePath = filePath;
    if(param) for(let key in param) (this as any)[key] = (param as any)[key];
  }
}

export function Image() {}
Image.network = (src: string, param?: ImageBaseParam) => {
  return new NetworkImageWidget(src, param);
};
Image.asset = (name: string, param?: ImageBaseParam) => {
  return new AssetImageWidget(name, param);
};
Image.file = (filePath: string, param?: ImageBaseParam) => {
  return new FileImageWidget(filePath, param);
};

