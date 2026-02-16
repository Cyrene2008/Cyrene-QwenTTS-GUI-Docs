import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

import { zhNavbar, enNavbar } from './navbar'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Cyrene QwenTTS GUI',
  description: '一个现代化的 Qwen-TTS 图形界面，基于 PySide6 和 FluentUI 构建',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/Cyrene.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Cyrene QwenTTS GUI',
      description: '一个现代化的 Qwen-TTS 图形界面，基于 PySide6 和 FluentUI 构建',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Cyrene QwenTTS GUI',
      description: 'A modern GUI for Qwen-TTS, built with PySide6 and FluentUI',
    },
  },



  theme: plumeTheme({
    hostname: 'https://qwentts.昔涟.cn/',

    docsRepo: 'https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI',
    docsDir: 'docs',
    docsBranch: 'main',

    llmstxt: true,
    contributors: {
      mode: 'block',
      avatar: 'github',
      contributors: [
        {
          name: '星海昔涟',
          avatar: 'https://github.com/Cyrene2008.png',
          email: 'admin@cyrene.cq.cn',
          url: 'https://github.com/Cyrene2008',
        },
        {
          name: '叶背影',
          avatar: 'https://github.com/LeafS825.png',
          email: 'leafshadow52@outlook.com',
          url: 'https://github.com/LeafS825',
        }
      ],
    },
    changelog: true,

    cache: 'filesystem',

    autoFrontmatter: {
      permalink: false,
    },

    search: {
      provider: 'local',
    },

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'Cyrene2008/Cyrene-QwenTTS-GUI-Docs',
      repoId: 'R_kgDORROB9g',
      category: 'General',
      categoryId: 'DIC_kwDORROB9s4C2hsh',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'bottom',
    },

    markdown: {
      icon: { provider: 'iconify', size: '1.5rem' },
      table: {
        align: 'center',
      },
      field: true,
    },



    locales: {
      '/': {
        nav: zhNavbar,
        sidebar: {
          '/doc/': [
            {
              text: '指南',
              link: '/doc/guide/start',
              items: [
                { text: '开始使用', link: '/doc/guide/start' },
                { text: '界面介绍', link: '/doc/guide/interface' },
                { text: '软件指南', link: '/doc/guide/software-guide' },
              ],
            },
            {
              text: '设置',
              link: '/doc/settings/basic',
              items: [
                { text: '基本设置', link: '/doc/settings/basic' },
                { text: '高级设置', link: '/doc/settings/advanced' },
              ],
            },
            {
              text: '资源',
              link: '/doc/resources/contribute',
              items: [
                { text: '贡献指南', link: '/doc/resources/contribute' },
              ],
            },
          ],
        },
      },
      '/en/': {
        nav: enNavbar,
        sidebar: {
          '/doc/': [
            {
              text: 'Guide',
              link: '/doc/guide/start',
              items: [
                { text: 'Getting Started', link: '/doc/guide/start' },
                { text: 'Interface', link: '/doc/guide/interface' },
                { text: 'Software Guide', link: '/doc/guide/software-guide' },
              ],
            },
            {
              text: 'Settings',
              link: '/doc/settings/basic',
              items: [
                { text: 'Basic Settings', link: '/doc/settings/basic' },
                { text: 'Advanced Settings', link: '/doc/settings/advanced' },
              ],
            },
            {
              text: 'Resources',
              link: '/doc/resources/contribute',
              items: [
                { text: 'Contribution Guide', link: '/doc/resources/contribute' },
              ],
            },
          ],
        },
      },
    },
  }),
})
