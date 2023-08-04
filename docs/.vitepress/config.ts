import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hzb-blog-vitepress/',
  title: "hzb-blog",
  description: "个人博客",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar-circle.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Tools',
        items: [
          { text: 'hzb-cli', link: '/hzb-cli/' },
          { text: 'hzb-utils-box', link: 'https://zhongbohuang.github.io/hzb-utils-box/' },
        ]
      },
      { text: '前端面试题', link: '/interview/' },
    ],
    sidebar: {
      '/hzb-cli/': [
        {
          text: '快速开始',
          link: '/hzb-cli/'
        },
      ],
      '/interview/': [
        {
          text: '前端面试题',
          link: '/interview/'
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhongboHuang' }
    ],
    lastUpdatedText: '最近更新',
  },
  
})
