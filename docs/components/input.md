---
title: Input
sidebarDepth: 2
---
# 输入框
使用方法：按通过鼠标或键盘输入字符


### 代码演示

#### 基本使用
<ClientOnly> 
  <input-demo-1 class='demo'></input-demo-1>
</ClientOnly> 

#### 当出现不和规则的输入时
<ClientOnly> 
  <input-demo-2 class='demo'></input-demo-2>
</ClientOnly> 

#### 实现双向绑定
<ClientOnly> 
  <input-demo-3 class='demo'></input-demo-3>
</ClientOnly> 

### Attributes/属性
1. readonly: 是否为只读（Boolean） 当此属性为true时，点击按钮，变成只读状态
2. disabled: 是否禁用状态(boolean) 当此属性为true时，变成disable状态
3. v-model: 实现双向绑定
4. erro: 报错功能