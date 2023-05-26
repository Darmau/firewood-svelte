export default function topicTranslate(topic: string) {
  return topicList.get(topic)
}

const topicList = new Map([
  ['international', '国际'],
  ['sports', '体育'],
  ['entertainment', '娱乐'],
  ['society', '社会'],
  ['finance', '财经'],
  ['politics', '时事'],
  ['tech', '科技'],
  ['emotion', '情感'],
  ['automobile', '汽车'],
  ['education', '教育'],
  ['fashion', '时尚'],
  ['game', '游戏'],
  ['military', '军事'],
  ['travel', '旅游'],
  ['food', '美食'],
  ['culture', '文化'],
  ['health', '健康'],
  ['humor', '搞笑'],
  ['home', '家居'],
  ['comic', '动漫'],
  ['pet', '宠物'],
  ['baby', '母婴'],
  ['constellation', '星座'],
  ['history', '历史'],
  ['music', '音乐'],
  ['others', '综合'],
  [null, '无分类'],
])