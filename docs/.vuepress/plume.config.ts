import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNavbar, enNavbar } from './navbar'

const currentYear = new Date().getFullYear()

export default defineThemeConfig({
  logo: '/images/Cyrene.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI-Docs' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/1203736702' }
  ],
  navbarSocialInclude: ['github', 'bilibili'],

  transition: {
    appearance: 'circle-clip',  // 配置深色模式切换过渡动画类型
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      footer: {
        message: '由 <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> 驱动',
        copyright: `© ${currentYear} Cyrene2008 | <a href="https://昔涟.cn" target="_blank" rel="noopener noreferrer">昔涟.cn</a> | <a href="https://icp.gov.moe/?keyword=20260093" target="_blank" rel="noopener noreferrer">萌ICP备20260093号</a> | <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3 许可证</a>`,
      },
    },
    '/en/': {
      navbar: enNavbar,
      footer: {
        message: 'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
        copyright: `© ${currentYear} Cyrene2008 | <a href="https://昔涟.cn" target="_blank" rel="noopener noreferrer">昔涟.cn</a> | <a href="https://icp.gov.moe/?keyword=20260093" target="_blank" rel="noopener noreferrer">萌ICP备20260093号</a> | <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GPLv3 License</a>`,
      },
    },
  },

})
