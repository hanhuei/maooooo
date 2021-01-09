module.exports = {
  plugins: {
    // 'postcss-import': {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false,
      selectorBlackList: ['.dp-', '.scroller-', '.van-'],
    },
  },
}
