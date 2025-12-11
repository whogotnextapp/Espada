// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // Reanimated plugin must be last in this list
    plugins: ["react-native-reanimated/plugin"],
  };
};
