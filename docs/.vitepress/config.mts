import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
<<<<<<< HEAD
import { defineConfig } from "vitepress";
=======
import { defineConfig } from 'vitepress'
>>>>>>> ba8d34294348b6e591551a9fbbb643555337cd49

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getTutorialSidebar = () => {
  const dir = path.resolve(__dirname, "../tutorials");
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith(".md"));
  return [
    {
      text: "教程列表",
      items: files.map((file: string) => ({
        text: file.replace(".md", ""),
        link: `/tutorials/${file.replace(".md", "")}`,
      })),
    },
  ];
};

export default defineConfig({
  base: "/",
  title: "我的 GitHub 博客",
  description: "用 VitePress 搭建的文章展示网站",

  // 优化后的 live2d 脚本配置
  head: [
    [
      "script",
      {
        src: "/dist/autoload.js",
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "教程",
        items: [
          { text: "教程1", link: "/tutorials/first-tutorial" }, // 修正链接路径（去掉多余的 ../）
          { text: "教程2", link: "/tutorials/second-tutorial" },
          { text: "教程3", link: "/tutorials/third-tutorial" },
        ],
      },
      {
        text: "笔记",
        items: [{ text: "学习笔记", link: "/notes/study-note" }], // 修正链接路径
      },
    ],

    sidebar: {
      "/tutorials/": getTutorialSidebar(),
      "/notes/": [
        {
          text: "笔记列表", // 修正标题（原"教程列表"不准确）
          items: [{ text: "学习笔记", link: "/notes/study-note" }], // 修正链接路径
        },
      ],
      "/": [
        {
          text: "首页文章",
          items: [{ text: "首页", link: "/" }],
        },
      ],
    },

    footer: {
      message: "部署于 GitHub Pages | 欢迎访问",
    },
  },
});
