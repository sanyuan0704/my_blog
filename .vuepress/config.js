const sidebar = require("./siderbar.js");
module.exports = {
  title: "三元博客",
  description: "三元同学的博客",
  dest: "public",
  // "base": '/my_blog/',
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [
    "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
  ],
  theme: "reco",
  themeConfig: {
    mode: "light",
    subSidebar: "auto",
    valineConfig: {
      appId: "h6i7vXvVEK37fFFwb1DtMJ6W-gzGzoHsz",
      appKey: "cYI3hypnGAI00CPuzhNfeY8Q",
    },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/sanyuan0704/my_blog",
            icon: "reco-github",
          },
          {
            text: "掘金",
            link: "https://juejin.cn/user/430664257382462",
            icon: "reco-juejin",
          },
          {
            text: "知乎",
            link: "https://www.zhihu.com/people/yang-xing-yuan-9",
            icon: "reco-zhihu",
          },
        ],
      },
    ],
    sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "sanyuan",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
};
