import { resolve } from 'path'
const root = process.cwd()

export default (mode) => {
  console.log(mode)
  return {
    root,
    port: 3100,
    alias: {
      '/@/': resolve(__dirname, 'src'),
    },
  }
}
