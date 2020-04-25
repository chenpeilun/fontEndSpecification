/*
 * @Author: your name
 * @Date: 2020-04-18 15:02:04
 * @LastEditTime: 2020-04-25 21:28:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontEnd-specification\docs\.vuepress\config.js
 */
module.exports = {
  base: '/fontEndSpecification/',
  title: '前端规范', 
  description: '前端规范',
  head: [
      // ['link', { rel: 'icon', href: '/img/logo.ico' }],
      // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
      sidebar: [
        {
        title: '基础规范',   // 必要的
        path: '/specification/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
      {
        title: 'html编写规则',   // 必要的
        path: '/htmlSpec/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
      {
        title: 'css编写规则',   // 必要的
        path: '/cssSpec/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
      {
        title: 'javaScript编写规则',   // 必要的
        path: '/javascriptSpec/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
      {
        title: '工具方法',   // 必要的
        path: '/tool/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1    // 可选的, 默认值是 1
      },
    ]
    
  },
  sidebarDepth: 3,
  lastUpdated: 'Last Updated', 
}

