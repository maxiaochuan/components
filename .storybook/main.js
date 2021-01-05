module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async options => {
    options.plugins = [
      ...options.plugins,
      [
        'babel-plugin-import',
        {
          libraryName: 'antd',
          style: true,
        },
      ],
    ];
    return options;
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: { lessOptions: { javascriptEnabled: true } },
        },
      ],
    });

    return config;
  },
};
