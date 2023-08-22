// 传入一个完整域名，提取其中的主域名
export default function getDomain(url: string) {
  const fullUrl = new URL(url);
  const host = fullUrl.host;
  return host;
}
