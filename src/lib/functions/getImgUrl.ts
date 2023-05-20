export default function getImgUrl(url: string): string {
  const regex = /(.+cos\.)myqcloud(\..+)/;
  const replacement = '$1accelerate$2';
  const newUrl = url.replace(regex, replacement);
  return 'https://' + newUrl;
}