module.exports = {
  base: '/J-UI/',
  title: "J-wang's UI",
  description: '一个适用与手机和电脑的UI框架，在学习VUE过程的一些成果展示',
  themeConfig: {
    sidebar: [
      '/',
      '/designpics/',
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: true,
        children: [
          '/components/button',
          '/components/input',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
        ]
      },
    ]
  }

}