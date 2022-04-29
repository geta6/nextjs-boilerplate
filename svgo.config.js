module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          // removeDimensions: true,
          convertColors: {
            currentColor: true,
          },
        },
      },
    },
    'cleanupListOfValues',
  ],
};
