import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue"; // 关键：用自己的布局

export default {
  extends: DefaultTheme,
  Layout, // 覆盖默认布局
};
