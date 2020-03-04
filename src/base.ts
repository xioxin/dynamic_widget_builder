export class OutField {
    constructor(
        public key: string,
        public outKey?: string,
        public convert?: (v: any) => any
    ) {
        if(outKey == null) this.outKey = key;
    }
}

export class Widget {
    _widget: string;
    _outFields: OutField[] = [];

    constructor(widgetName?: string, outFields: (OutField | string)[] = []) {
        this._widget = widgetName;
        this.addFields(outFields);
    }

    addFields(fields: (OutField | string)[]) {
        this._outFields.push(...fields.map(v => {
            if(typeof v == "string") return new OutField(v);
            return v;
        }))
    }

    toJson() {
        const map: {[key: string] : any} = {};
        if(this._widget != null) {
            map['type'] = this._widget;
        }
        this._outFields.forEach(field => {
            let val = (this as any)[field.key];
            if(typeof val == "object" && 'toJson' in val && typeof val['toJson'] == 'function') {
                val = val['toJson']();
            }
            if(field.convert) {
                val = field.convert(val);
            }
            if(typeof val === 'undefined') return;
            map[field.outKey] = val;
        });
        return map;
    }
}
