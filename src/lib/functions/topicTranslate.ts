export default function topicTranslate(topic: string) {
  return topicList.get(topic)
}

const topicList = new Map([
  ['tech', '技术'],
  ['code', '编程'],
  ['society', '社会'],
  ['diary', '日记'],
  ['life', '生活'],
  ['politics', '政治'],
  ['career', '职场'],
  ['travel', '旅行'],
  ['culture', '人文'],
  ['education', '学习'],
  ['emotion', '情感'],
  ['others', '综合'],
  [null, '无分类'],
  // 以下为历史遗留分类
  ['international', '国际'],
  ['sports', '体育'],
  ['entertainment', '娱乐'],
  ['finance', '财经'],
  ['automobile', '汽车'],
  ['fashion', '时尚'],
  ['game', '游戏'],
  ['military', '军事'],
  ['food', '美食'],
  ['health', '健康'],
  ['humor', '搞笑'],
  ['home', '家居'],
  ['comic', '动漫'],
  ['pet', '宠物'],
  ['baby', '母婴'],
  ['constellation', '星座'],
  ['history', '历史'],
  ['music', '音乐'],
])