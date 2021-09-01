export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/example.md',
            '/guide/introduction.md',
            '/guide/start.md',
          ],
        },
      ],
    } 
    // sidebar: 'auto'
    // sidebar: [
    //   // SidebarItem
    //   // '/guide/introduction.md',
    //   // '/guide/start.md'
    //   {
    //     text: '介绍',
    //     link: '/guide/introduction.html'
    //   },
    //   {
    //     text: '开始',
    //     link: '/guide/start.html',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: '环境准备',
    //         link: '/guide/start.html#环境准备',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-1',
    //         link: '/guide/start.html#环境准备-1',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-2',
    //         link: '/guide/start.html#环境准备-2',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-3',
    //         link: '/guide/start.html#环境准备-3',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-4',
    //         link: '/guide/start.html#环境准备-4',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-5',
    //         link: '/guide/start.html#环境准备-5',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-6',
    //         link: '/guide/start.html#环境准备-6',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-7',
    //         link: '/guide/start.html#环境准备-7',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-8',
    //         link: '/guide/start.html#环境准备-8',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备-9',
    //         link: '/guide/start.html#环境准备-9',
    //         children: [],
    //       },
    //       {
    //         text: '环境准备5',
    //         link: '/guide/start.html#环境准备5',
    //         children: [],
    //       },
    //     ],
    //   },
    // ],
  },
}