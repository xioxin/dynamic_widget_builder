dynamic_widget_builder
---------------------------
# Parser
https://github.com/dengyin2000/dynamic_widget

## Already completed widgets
* [x] Container Widget
* [x] Text Widget
* [ ] TextSpan
* [x] TextStyle
* [x] RaisedButton Widget
* [x] Row Widget
* [x] Column Widget
* [x] AssetImage Widget
* [x] NetworkImage Widget
* [x] FileImage Widget
* [x] Placeholder Widget
* [ ] GridView Widget
* [ ] ListView Widget
* [ ] PageView Widget
* [x] Expanded Widget
* [x] Padding Widget
* [x] Center Widget
* [x] Align Widget
* [x] AspectRatio Widget
* [ ] FittedBox Widget
* [ ] Baseline Widget
* [x] Stack Widget
* [ ] Positioned Widget
* [ ] IndexedStack Widget
* [x] ExpandedSizedBox Widget
* [x] SizedBox Widget
* [x] Opacity Widget
* [x] Wrap Widget
* [ ] ClipRRect Widget
* [x] SafeArea Widget
* [ ] ListTile Widget

## Example

### Complex example
[test/test.ts](test/test.ts)


### Simple example
```javascript
const test = Stack({
    children: [
        Align({
            alignment: Alignment.center,
            child: Column({
                children: [
                    Container({
                        constraints: BoxConstraints({
                            minHeight: 200,
                            maxHeight: 500
                        }),
                        padding: EdgeInsets.symmetric({vertical: 8, horizontal: 16}),
                        child: Text('hello world', {
                            style: TextStyle({
                                color: Color(0xff123456),
                                fontWeight: FontWeight.bold,
                                fontStyle: FontStyle.italic,
                            }),
                        }),
                    }),
                  Row({
                      children: [
                          Text('hello world'),
                          Text('hello world')
                      ]
                  })
                ]
            }),
        }),
    ]
});

console.log(JSON.stringify(test.build(), null, 2));
```

### OUTPUT
```json
{
  "type": "Stack",
  "children": [
    {
      "type": "Align",
      "child": {
        "type": "Column",
        "children": [
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "hello world",
              "style": {
                "color": 4279383126,
                "fontStyle": "italic",
                "fontWeight": "bold"
              }
            },
            "padding": "16,8,16,8",
            "constraints": {
              "minHeight": 200,
              "maxHeight": 500
            }
          },
          {
            "type": "Row",
            "children": [
              {
                "type": "Text",
                "data": "hello world"
              },
              {
                "type": "Text",
                "data": "hello world"
              }
            ]
          }
        ]
      },
      "alignment": "center"
    }
  ]
}
```
