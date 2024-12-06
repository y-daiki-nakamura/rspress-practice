import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginLastUpdated } from '@rspress/plugin-last-updated';
import mermaid from 'rspress-plugin-mermaid';
import katex from 'rspress-plugin-katex';
import fileTree from 'rspress-plugin-file-tree';

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
  plugins: [
    mermaid({
      mermaidConfig: {
        theme: 'forest',
      },
    }),
    katex(),
    fileTree(),
  ],
});
