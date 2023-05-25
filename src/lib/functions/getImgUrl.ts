export default function getImgUrl(url: string): string {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const cdnDomain = "https://firewood.darmau.design/";
    const pathName = url.split('/').slice(1).join('/');
    return cdnDomain + pathName;
  } else {
    return "https://" + url;
  }
}