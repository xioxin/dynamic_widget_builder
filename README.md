dynamic_widget_builder
---------------------------

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

console.log(JSON.stringify(test.toJson(), null, 2));
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
