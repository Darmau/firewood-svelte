// 接收一个日期，并跟现在日期进行比较。如果在一天内，返回几小时前，如果在一月内，返回几天前，如果在一年内，返回几月前，否则返回几年前
export const convertDate = (date: string) => {
  const now = new Date();
  const publishDate = new Date(date);
  const diff = now.getTime() - publishDate.getTime();
  const diffDay = diff / (1000 * 60 * 60 * 24);
  const diffMonth = diff / (1000 * 60 * 60 * 24 * 30);
  const diffYear = diff / (1000 * 60 * 60 * 24 * 365);
  if(diff < 3600000) {
    return `${Math.floor(diff / (1000 * 60))}分钟前`;
  }
  if (diffDay < 1) {
    return `${Math.floor(diff / (1000 * 60 * 60))}小时前`;
  }
  if (diffMonth < 1) {
    return `${Math.floor(diffDay)}天前`;
  }
  if (diffYear < 1) {
    return `${Math.floor(diffMonth)}月前`;
  }
  return `${Math.floor(diffYear)}年前`;
}
