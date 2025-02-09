import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "LeetCode and Codewars solutions",
  tagline: "記錄自己 Leetcode 和 Codewars 刷題的紀錄",
  favicon: "img/favicon.ico",
  url: "https://junelin2001.github.io/",
  baseUrl: "/",
  projectName: "solve-problems",
  organizationName: "JuneLin2001",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/JuneLin2001/solve-problems/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "哩扣哇筆記",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "刷題記錄",
        },
        { to: "/about", label: "About", position: "left" },
        {
          href: "https://github.com/JuneLin2001/solve-problems",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
