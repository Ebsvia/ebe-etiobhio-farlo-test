module.exports = {
    jest: function(config) {
      config.transformIgnorePatterns = [
        '/node_modules/(?!(axios)/)',  // Tell Jest to process axios with Babel
      ];
      return config;
    },
  };
  