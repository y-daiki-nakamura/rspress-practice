import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/rspress-practice/',
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  multiVersion: {
    default: '2.0.0',
    versions: ['1.0.0', '2.0.0'],
  },
  search: {
    versioned: true,
  },
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
