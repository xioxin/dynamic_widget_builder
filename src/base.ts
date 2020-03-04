export class OutField {
    constructor(
        public key: string,
        public outKey?: string,
        public convert?: (v: any) => any
    ) {
        if(outKey == null) this.outKey = key;
    }
}

export class Buildable {
    build() : any {}
}

export class Widget extends Buildable{
    _widget: string;
    _outFields: OutField[] = [];

    constructor(widgetName?: string, outFields: (OutField | string)[] = []) {
        super();
        this._widget = widgetName;
        this.addFields(outFields);
    }

    addFields(fields: (OutField | string)[]) {
        this._outFields.push(...fields.map(v => {
            if(typeof v == "string") return new OutField(v);
            return v;
        }))
    }

    build(): (Widget | {[key: string] : any}) {
        const map: {[key: string] : any} = {};
        if(this._widget != null) {
            map['type'] = this._widget;
        }
        this._outFields.forEach(field => {
            let val = (this as any)[field.key];
            if(typeof val === 'undefined' || val === null) return;
            while (true) {
                if(val instanceof Buildable) {
                    val = val.build();
                }else {
                    break;
                }
            }
            if(typeof val === "object" && Array.isArray(val)){
                val = val.map((v) => {
                    while (true) {
                        if(v instanceof Buildable) {
                            v = v.build();
                        }else {
                            break;
                        }
                    }
                    return v;
                });
            }
            if(field.convert) {
                val = field.convert(val);
            }
            map[field.outKey] = val;
        });
        return map;
    }

}



