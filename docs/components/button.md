---
title: Button
sidebarDepth: 2
---
# 按钮
使用方法：按钮用于开始一个即时操作。

### 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
### 代码演示

<ClientOnly> 
  <button-demo class='demo'></button-demo>
</ClientOnly> 

### Attributes/属性
1. loadingfunc: 是否加载中状态（Boolean） 当此属性为true时，点击按钮，按钮进入加载状态，同时变成不可点击
2. disabled: 是否禁用状态(boolean) 当此属性为true时，按钮变成不可点击