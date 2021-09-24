export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      '/vue3project/': [
        {
          text: '指南',
          children: [
            '/vue3project/example.md',
            '/vue3project/introduction.md',
            '/vue3project/environmentalPreparation.md',
            '/vue3project/projectConstruction.md',
            '/vue3project/codeSpecification.md',
          ],
        },
      ],
    } 
  },
}