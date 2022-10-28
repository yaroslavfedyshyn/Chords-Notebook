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
            components: "./src/components",
            constants: "./src/constants",
            layouts: "./src/layouts",
            navigation: "./src/navigation",
            screens: "./src/screens",
            themes: "./src/themes",
            types: "./src/types",
            src: "./src",
          },
        },
      ],
    ],
  };
};
