import { resolve } from 'path'
window.name
function pathResolve(dir) {
  return resolve(__dirname, '.', dir)
}
const root = process.cwd()
console.log(pathResolve('src'))
const alias = {
  '/@/': pathResolve('src'),
}

export default (mode) => {
  return {
    port: 3100,
    alias,
  }
}
