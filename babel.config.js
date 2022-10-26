module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: "./src/component",
            constants: "./src/constants",
            layouts: "./src/layouts",
            screens: "./src/screens",
            themes: "./src/themes",
            src: "./src",
          },
        },
      ],
    ],
  };
};
