import { defineConfig } from "vitepress"
import { nav } from "./configs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/hzb-blog-vitepress/',
  title: "hzb-blog",
  description: "个人博客",
  head: [
    ['link', { rel: 'icon', href: '/hzb-blog-vitepress/favicon.ico' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/images/avatar-circle.png',
    nav,
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
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhongboHuang' }
    ],
    lastUpdatedText: '最近更新',
  },
  
})
