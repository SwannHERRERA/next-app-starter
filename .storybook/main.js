module.exports = {
  stories: [
     '../stories/**/*.stories.mdx',
     '../stories/**/*.stories.@(js|jsx|ts|tsx)',
   ],
   addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],
   framework: '@storybook/react',
   core: {
    builder: "@storybook/builder-webpack5"
   }
}
