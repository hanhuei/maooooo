import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}
// const root = process.cwd()
console.log(pathResolve('src'))
const alias = {
  '/@/': pathResolve('src'),
}

export default (mode) => {
  console.log(mode)
  return {
    root,
    port: 3100,
    alias,
  }
}
