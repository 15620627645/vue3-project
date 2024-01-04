// 获取当前时间是那个时间段
export const getTime = () => {
  let message = ''
  const hour = new Date().getHours()
  if (hour <= 9) {
    message = '早上'
  } else if (hour <= 12) {
    message = '上午'
  } else if (hour <= 18) {
    message = '下午'
  } else if (hour > 18) {
    message = '晚上'
  }
  return message
}
