import {
  Align,
  Alignment,
  BoxConstraints,
  BoxFit,
  Color,
  Column,
  Container,
  CrossAxisAlignment,
  double,
  EdgeInsets,
  Expanded,
  FontStyle,
  FontWeight,
  Image,
  Padding,
  RaisedButton,
  Row,
  SizedBox,
  Stack,
  Text,
  TextStyle,
  Widget, Wrap
} from "../src";
import {ColorProperty} from "../src/property/color";
import {EdgeInsetsProperty} from "../src/property/edgeInsets_param";
import {AspectRatio} from "../src/widget/basic/aspect_ratio";

class MiniChip extends Widget {
  constructor(
    public label: Widget,
    public color: ColorProperty = Color.fromARGB(10, 40, 40, 40),
    public radius: double = 4,
    public padding: EdgeInsetsProperty = EdgeInsets.all(4),
  ) {
    super()
  }

  build(): Widget {
    return Container({
      color: this.color,
      // decoration 暂时不支持
      padding: this.padding,
      child: this.label,
    })
  }
}


const test = Column({
  children: [
    Padding({
      padding: EdgeInsets.symmetric({
        vertical: 8.0,
        horizontal: 16.0,
      }),
      child: Text("标题"),
    }),

    Padding({
      padding: EdgeInsets.symmetric({
        vertical: 8.0,
        horizontal: 16.0,
      }),
      child: Row({
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container({
            height: 180.0,
            child: AspectRatio({
              aspectRatio: 128 / 182,
              child: Image.asset('assets/images/test5.png', {
                boxFit: BoxFit.cover,
              }),
            })
          }),
          SizedBox({
            width: 16.0,
          }),
          Expanded({
            child: Container({
              child: Column({
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row({
                    children: [
                      Container({
                        child: Text("发布于"),
                        width: 50.0,
                        alignment: Alignment.centerRight,
                      }),
                      SizedBox({width: 4.0}),
                      Text("2020-02-02 20:02"),
                    ]
                  }),
                  Row({
                    children: [
                      Container({
                        child: Text("属性2"),
                        width: 50.0,
                        alignment: Alignment.centerRight,
                      }),
                      SizedBox({width: 4.0}),
                      Text("值2"),
                    ]
                  }),
                  Row({
                    children: [
                      Container({
                        child: Text("属性2"),
                        width: 50.0,
                        alignment: Alignment.centerRight,
                      }),
                      SizedBox({width: 4.0}),
                      Text("值2"),
                    ]
                  }),
                  Row({
                    children: [
                      Container({
                        child: Text("属性2"),
                        width: 50.0,
                        alignment: Alignment.centerRight,
                      }),
                      SizedBox({width: 4.0}),
                      Text("值2"),
                    ]
                  }),
                  Row({
                    children: [
                      Container({
                        child: Text("属性2"),
                        width: 50.0,
                        alignment: Alignment.centerRight,
                      }),
                      SizedBox({width: 4.0}),
                      Text("值2"),
                    ]
                  }),
                  RaisedButton({
                    child: Text("查看"),
                  }),
                ]
              })
            }),
          })
        ]
      }),
    }),
    Padding({
      padding: EdgeInsets.symmetric({
        vertical: 8,
        horizontal: 16,
      }),
      child: Wrap({
        spacing: 4,
        runSpacing: 4,
        children: [
          new MiniChip(Text("标签1")),
          new MiniChip(Text("标签2")),
          new MiniChip(Text("标签3")),
          new MiniChip(Text("标签4")),
          new MiniChip(Text("标签5")),
          new MiniChip(Text("标签6")),
          new MiniChip(Text("标签7")),
        ],
      }),
    }),

  ],
});

console.log(JSON.stringify(test.build(), null, 2));

/* output:
* {
  "type": "Column",
  "children": [
    {
      "type": "Padding",
      "child": {
        "type": "Text",
        "data": "标题"
      },
      "padding": "16.0,8.0,16.0,8.0"
    },
    {
      "type": "Padding",
      "child": {
        "type": "Row",
        "children": [
          {
            "type": "Container",
            "child": {
              "type": "AspectRatio",
              "child": {
                "type": "AssetImage",
                "boxFit": "cover",
                "name": "assets/images/test5.png"
              },
              "aspectRatio": 0.7032967032967034
            },
            "height": 180.0
          },
          {
            "type": "SizedBox",
            "width": 16.0
          },
          {
            "type": "Expanded",
            "child": {
              "type": "Container",
              "child": {
                "type": "Column",
                "children": [
                  {
                    "type": "Row",
                    "children": [
                      {
                        "type": "Container",
                        "child": {
                          "type": "Text",
                          "data": "发布于"
                        },
                        "alignment": "centerRight",
                        "width": 50.0
                      },
                      {
                        "type": "SizedBox",
                        "width": 4.0
                      },
                      {
                        "type": "Text",
                        "data": "2020-02-02 20:02"
                      }
                    ]
                  },
                  {
                    "type": "Row",
                    "children": [
                      {
                        "type": "Container",
                        "child": {
                          "type": "Text",
                          "data": "属性2"
                        },
                        "alignment": "centerRight",
                        "width": 50.0
                      },
                      {
                        "type": "SizedBox",
                        "width": 4.0
                      },
                      {
                        "type": "Text",
                        "data": "值2"
                      }
                    ]
                  },
                  {
                    "type": "Row",
                    "children": [
                      {
                        "type": "Container",
                        "child": {
                          "type": "Text",
                          "data": "属性2"
                        },
                        "alignment": "centerRight",
                        "width": 50.0
                      },
                      {
                        "type": "SizedBox",
                        "width": 4.0
                      },
                      {
                        "type": "Text",
                        "data": "值2"
                      }
                    ]
                  },
                  {
                    "type": "Row",
                    "children": [
                      {
                        "type": "Container",
                        "child": {
                          "type": "Text",
                          "data": "属性2"
                        },
                        "alignment": "centerRight",
                        "width": 50.0
                      },
                      {
                        "type": "SizedBox",
                        "width": 4.0
                      },
                      {
                        "type": "Text",
                        "data": "值2"
                      }
                    ]
                  },
                  {
                    "type": "Row",
                    "children": [
                      {
                        "type": "Container",
                        "child": {
                          "type": "Text",
                          "data": "属性2"
                        },
                        "alignment": "centerRight",
                        "width": 50.0
                      },
                      {
                        "type": "SizedBox",
                        "width": 4.0
                      },
                      {
                        "type": "Text",
                        "data": "值2"
                      }
                    ]
                  },
                  {
                    "type": "RaisedButton",
                    "child": {
                      "type": "Text",
                      "data": "查看"
                    }
                  }
                ],
                "crossAxisAlignment": "stretch"
              }
            }
          }
        ],
        "crossAxisAlignment": "start"
      },
      "padding": "16.0,8.0,16.0,8.0"
    },
    {
      "type": "Padding",
      "child": {
        "type": "Wrap",
        "children": [
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签1"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签2"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签3"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签4"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签5"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签6"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          },
          {
            "type": "Container",
            "child": {
              "type": "Text",
              "data": "标签7"
            },
            "padding": "4.0,4.0,4.0,4.0",
            "color": 170403880
          }
        ],
        "runSpacing": 4.0,
        "spacing": 4.0
      },
      "padding": "16.0,8.0,16.0,8.0"
    }
  ]
}*/
