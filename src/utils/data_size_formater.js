/**
 * Created by plutonist on 2017/6/11.
 */

export function formatDataSize(num) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB', 'NB', 'DB']
  for (let i in units) {
    const unit = units[i]

    if (num / 1024**i < 1024) {
      return {
        num: num / 1024**i,
        unit,
        text: (num / 1024**i).toFixed(2) + ' ' + unit
      }
    }
  }
}
