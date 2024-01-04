import tinycolor from 'tinycolor2'
// 修改主题颜色
export const setThemeColor = (val: string) => {
  const baseColor = tinycolor(val)
  // --el-color-primary-light-3
  document.documentElement.style.setProperty('--el-color-primary', val)
  document.documentElement.style.setProperty(
    '--el-color-primary-dark-2',
    baseColor.lighten(2).toString(),
  )
  for (let i = 1; i < 10; i++) {
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${i}`,
      baseColor.lighten(i + 1).toString(),
    )
  }
}
// 暗黑模式
export const dark = (val: boolean) => {
  const themeDark = val ? '' : 'dark'
  document.documentElement.className = themeDark
}
