function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}
const root = process.cwd()
const alias = {
  '@/': pathResolve('src'),
}

export default (mode) => {
  return {
    port: 3100,
    alias,
  }
}
