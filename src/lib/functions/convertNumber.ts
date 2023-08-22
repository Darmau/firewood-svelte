// 本文件负责将数字转换成1k, 10k, 1m的形式，1000-1000之间的数字，则精确到小数点后1位
export default function convertNumber(count: number) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(2) + "K";
  } else {
    return count;
  }
}
