# Notice 通告

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-notice": "path/to/w-notice/index",
}
```

### 代码演示

```html
<!--pages/w-notice/index.wxml-->
<w-pane title="Notice" desc="通告" />

<w-toast id="wuss-toast" wuss-class="test" />

<w-pane desc="Default" />

<w-notice text="{{ text }}" />

<w-pane desc="mode = closeable speed = 30" />

<w-notice
mode="closeable"
text="{{ text }}"
bindclose="noticeClose"
speed="30"
/>

<w-pane desc="mode = link  scrollable= false"  />

<w-notice
scrollable="{{ false }}"
mode="link"
url="/pages/index/index"
text="去首页看看有哪些组件"
/>

<w-pane desc="set icon color backgroundColor" />

<w-notice
	icon="voice"
	color="#fff"
	backgroundColor="rgba(255, 113, 110, 1)"
	text="{{ text }}"
/>
```

### API

#### 属性

| 属性            |                说明                |  类型   | 默认值 |
| --------------- | :--------------------------------: | :-----: | -----: |
| text            |              文本内容              | string  |      - |
| mode            |      模式可选 link\|closeable      | string  |      - |
| color           |              文本颜色              | string  |      - |
| backgroundColor |              背景颜色              | string  |      - |
| url             |      mode 为 link 时跳转地址       | string  |      - |
| openType        |      mode 为 link 时跳转类型       | string  |      - |
| speed           | 滚动速度 scrollable 为 true 时有效 | number  |      - |
| scrollable      |            是否可以滚动            | boolean |      - |
| icon            |           左边的图标地址           | string  |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明 |
| ---------- | ---- |
| wuss-class | 无   |