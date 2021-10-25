module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader.includes('css-loader') &&
          !moduleLoader.loader.includes('postcss-loader')
        ) {
          delete moduleLoader.options.modules.getLocalIdent;
          moduleLoader.options = {
            ...moduleLoader.options,
            modules: {
              ...moduleLoader.options.modules,
              localIdentName: 'css-[hash:base64:5]',
            },
          };
        }
      });
    });

    return config;
  },
};
