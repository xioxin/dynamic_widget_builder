import {double} from "../../types";

export interface EdgeInsetsParam {
  left?: double,
  top?: double,
  right?: double,
  bottom?: double,
}

export class EdgeInsetsProperty {

  constructor(
    public left: double,
    public top: double,
    public right: double,
    public bottom: double,
  ) {
  }


  toJson() {
    return [this.left, this.top, this.right, this.bottom].toString();
  }
}

/// css style
export function EdgeInsets(top: double, right: double, bottom: double, left: double) {
  if (typeof top === "number" && typeof right === "number" && typeof bottom === "number" && typeof left === "number") {
    return new EdgeInsetsProperty(left, top, right, bottom);
  } else if (typeof top === "number" && typeof right === "number" && typeof bottom === "number") {
    return new EdgeInsetsProperty(right, top, right, bottom);
  } else if (typeof top === "number" && typeof right === "number") {
    return new EdgeInsetsProperty(right, top, right, top);
  } else if (typeof top === "number") {
    return new EdgeInsetsProperty(top, top, top, top);
  } else {
    return new EdgeInsetsProperty(0, 0, 0, 0);
  }
}

EdgeInsets.all = (v: double) => {
  return new EdgeInsetsProperty(v, v, v, v);
};
EdgeInsets.fromLTRB = (left: double, top: double, right: double, bottom: double) => {
  return new EdgeInsetsProperty(left, top, right, bottom);
};
EdgeInsets.fromLTRB = (left: double, top: double, right: double, bottom: double) => {
  return new EdgeInsetsProperty(left, top, right, bottom);
};
EdgeInsets.only = (param: EdgeInsetsParam) => {
  return new EdgeInsetsProperty(param.left, param.top, param.right, param.bottom);
};
EdgeInsets.symmetric = (param: { vertical: double, horizontal: double }) => {
  return new EdgeInsetsProperty(param.horizontal, param.vertical, param.horizontal, param.vertical);
};
