import {double, int} from "../../types";

export class ColorProperty {
  constructor(public value: number) {
  }

  get alpha() {
    return (0xff000000 & this.value) >> 24;
  }

  get opacity() {
    return this.alpha / 0xFF;
  }

  get red() {
    return (0x00ff0000 & this.value) >> 16;
  }

  get green() {
    return (0x0000ff00 & this.value) >> 8;
  }

  get blue() {
    return (0x000000ff & this.value) >> 0;
  }

  withAlpha(a: int): ColorProperty {
    return Color.fromARGB(a, this.red, this.green, this.blue);
  }

  withOpacity(o: double) : ColorProperty {
    return Color.fromRGBO(this.red, this.green, this.blue, o);
  }

  withRed(r: int): ColorProperty {
    return Color.fromARGB(this.alpha, r, this.green, this.blue);
  }
  withGreen(g: int): ColorProperty {
    return Color.fromARGB(this.alpha, this.red, g, this.blue);
  }
  withBlue(b: int): ColorProperty {
    return Color.fromARGB(this.alpha, this.red, this.green, b);
  }


  toJson() {
    return this.value;
  }
}

export function Color(color: int) {
  return new ColorProperty(color);
}

Color.fromARGB = (a: int, r: int, g: int, b: int) => {
  const value = (((a & 0xff) << 24) |
    ((r & 0xff) << 16) |
    ((g & 0xff) << 8) |
    ((b & 0xff) << 0)) & 0xFFFFFFFF;
  return new ColorProperty(value);
};
Color.fromRGBO = (r: int, g: int, b: int, opacity: double) => {
  const value = (((Math.floor(opacity * 0xff / 1) & 0xff) << 24) |
    ((r & 0xff) << 16) |
    ((g & 0xff) << 8) |
    ((b & 0xff) << 0)) & 0xFFFFFFFF;
  return new ColorProperty(value);
};
