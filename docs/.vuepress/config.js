const createSideBarConfig = require('./config/sidebar');
module.exports = {
  head: [
    // add jquert and fancybox
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }],
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./logo.jpg` }]
  ],
  base: '/my_blog/',
  dest: 'dist',
  title: '神三元的博客',
  description: '跟着前端万粉博主，一起构建完整知识体系',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [ 
      {text: "算法系统练习", link: "http://47.98.159.95/leetcode-js/"},
      {text: "GitHub地址", link: "https://github.com/sanyuan0704/frontend_daily_question"},
    ],
    // sidebar: 'auto'
    sidebar: [
      'nav/',
      createSideBarConfig('HTML', 'html'),
      createSideBarConfig('CSS', 'css'),
      createSideBarConfig('JS-基础', 'js-base'),
      createSideBarConfig('JS-深入数组', 'js-array'),
      createSideBarConfig('JS-其它API原理', 'js-api'),
      createSideBarConfig('JS-V8引擎原理', 'js-v8'),
      createSideBarConfig('JS-异步I/O及异步编程', 'js-async'),
      // createSideBarConfig('Chromium-架构篇', 'browser-arch'),
      createSideBarConfig('Chromium-渲染篇', 'browser-render'),
      // createSideBarConfig('Chromium-事件处理', 'browser-event'),
      // createSideBarConfig('Chromium-网络', 'browser-net'),
      createSideBarConfig('Chromium-安全', 'browser-security'),
      createSideBarConfig('TCP协议', 'tcp'),
      createSideBarConfig('HTTP协议', 'http'),
      createSideBarConfig('前端性能相关', 'perform'),
      createSideBarConfig('扩展阅读', 'extend'),
    ]
  }

}
