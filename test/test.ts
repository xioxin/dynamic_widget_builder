import {Align} from "../src/widget/basic/align";
import {Text} from "../src/widget/basic/text";
import {Alignment} from "../src/types";
import {Color, TextStyle} from "../src/utils";


const test = new Align({
    alignment: Alignment.center,
    child: new Text('hello world', {
        style: new TextStyle({
            color: new Color(0xff123456),
        }),
    }),
});

console.log(test.toJson());
