module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "~assets":  "./src/assets",
            "~constants": "./src/constants",
            "~components": "./src/components",
            "~hooks": "./src/hooks",
            "~navigation": "./src/navigation",
            "~screens": "./src/screens",
            "~types": "./src/types",
          }
        }
      ]
    ],
  };
};
