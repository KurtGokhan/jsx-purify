// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JSX Purify',
  tagline: 'Sanitize untrusted JSX into safe JSX',

  // Set the production url of your site here
  url: 'https://gkurt.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jsx-purify/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KurtGokhan', // Usually your GitHub org/user name.
  projectName: 'jsx-purify', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/KurtGokhan/jsx-purify/',

          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'JSX Purify',
        items: [
          {
            href: 'https://github.com/KurtGokhan/jsx-purify',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {},
      prism: {
        theme: themes.oneLight,
        darkTheme: themes.oneDark,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'error-next-line',
            block: { start: 'error-start', end: 'error-end' },
          },
        ],
      },
    }),
};

module.exports = config;
