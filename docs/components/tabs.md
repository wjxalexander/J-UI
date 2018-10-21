---
title: Tabs
sidebarDepth: 2
---

# Tabs 标签页

选项卡切换组件。

### 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
本UI提供了两种Tabs组件，分别是横向布局和纵向布局

### 代码演示
#### 1. 横向布局

请点击以下tab

<ClientOnly> 
  <tabs-demo-1 class='demo'></tabs-demo-1>
</ClientOnly> 

#### 2. 纵向布局

请点击以下tab

<ClientOnly> 
  <tabs-demo-2 class='demo'></tabs-demo-2>
</ClientOnly> 

### Attributes/属性
1. direction： 接受两个值："flat","vertical"。默认为flat
2. currenttab: 设置默认展示的tab
3. name： 对应tabitem 和 tabpannel的name必须一致，这个是必填项 