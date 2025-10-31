import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "大李的算法小屋",
  description: "大李@bigbigli的算法小屋",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
