import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //node平台提供的模块，可以获取相对路径/绝对路径
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// mock
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({ command, mode }) => {
  // 在配置中使用环境变量要用loadEnv
  // 根据当前工作目录中的 `mode` 加载 .env 文件(当前环境文件)
  // 第二个参数固定写  process.cwd(）获取根路径，配置文件所在要在项目根下
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd())
  return {
    // vite 配置
    plugins: [
      vue(),
      //svg图标的配置，可以在项目中直接用外部svg图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // mock配置
      viteMockServe({
        // 配置选项
        mockPath: 'mock', // mock文件所在目录
        localEnabled: false, // 只在开发环境启用
      }),
    ],
    // 引入路径的时候可以用@代替src
    resolve: {
      alias: {
        '@': path.resolve('./src'), //相对路径别名，使用@代替src
      },
    },
    // sass全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },

    // 跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //接口有/api才会执行跨域
          //目标服务器
          target: env.VITE_SERVE,
          // 是否跨域
          changeOrigin: true,
          // 是否重写路由
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
