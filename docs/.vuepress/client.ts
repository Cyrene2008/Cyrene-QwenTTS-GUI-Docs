import { defineClientConfig } from 'vuepress/client'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // 可以在这里注册全局组件
  },
})