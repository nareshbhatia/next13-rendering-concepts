import type { StorybookConfig } from '@storybook/nextjs';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  stories: [
    '../../../packages/*/src/**/*.stories.mdx',
    '../../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/*/src/**/*.stories.mdx',
    '../../../apps/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          configFile: './../movie-magic/tsconfig.json',
        }),
      ];
    }

    return config;
  },
};

export default config;
