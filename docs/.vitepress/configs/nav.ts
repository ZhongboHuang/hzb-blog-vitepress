import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: '前端导航', link: '/nav/' },
  {
    text: 'Tools',
    items: [
      { text: 'hzb-cli', link: '/hzb-cli/' },
      { text: 'hzb-utils-box', link: 'https://zhongbohuang.github.io/hzb-utils-box/' },
    ]
  },
  { text: '前端面试题', link: '/interview/' }
]