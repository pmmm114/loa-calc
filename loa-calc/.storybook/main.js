module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|mdx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};
