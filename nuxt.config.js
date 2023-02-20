export default {
  // 用于配置应用默认的meta标签
  head: {
    title: 'bc-game',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  },

  // 全局样式
  css: [
    { src: 'element-ui/lib/theme-chalk/index.css' },
    { src: '@/assets/css/main.css' },
    { src: 'vant/lib/index.css' }
  ],
  // 用于配置 Nuxt.js 应用是开发还是生产模式
  dev: {

  },
  // 用于定义应用客户端和服务端的环境变量
  env: {

  },
  // 用于配置那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    // vant
    { src: '@/plugins/vant', ssr: true },
    { src: '@/plugins/device.js', ssr: true },
    { src: '@/plugins/lib-flexible.js', ssr: false },
    { src: '@/plugins/request.js', ssr: true },
    { src: '@/plugins/vue-lazyload.js', ssr: false }
  ],
  build: {
    //  vant
    transpile: [/vant.*?less/],
    transpile: [/^element-ui/],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: (name) => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ]
      ]
    },

  },
  // 
  components: true,

  // 
  buildModules: [],

  // 该配置项允许您将Nuxt模块添加到项目中
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios 
  axios: {
    proxy: true,
    // baseURL: '/',
  },
  // proxy
  proxy: {
    '/api': {
      changeOrigin: true,
      target: '',// 跨域地址
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  // 应用依赖第三方模块
  build: {
    transpile: [/^element-ui/],
  },
  // 该配置项让你开启组件缓存策略以提升渲染性能
  catch: {

  }
}
