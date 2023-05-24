import { API_URL } from '$env/static/private';
import type { Article } from '$lib/types/article.type.svelte';
import type { RequestHandler } from './$types';

// 二次封装接口，用于从latest获取文章，然后分别存入相应数组，在首页不同区域显示
export const GET = (async () => {
  const featureArticles = await fetch(`${API_URL}/article/featured?limit=7`)
    .then(res => res.json())
    .catch((error) => {
      console.error("获取推荐文章失败：", error);
      return []
    })
  // 将7篇推荐文章的id存入Set，避免后续产生重复文章
  const featuredIds = new Set(featureArticles.map((article: Article) => article._id))

  let latestPage = 1;
  const latestLimit = 9;
  const topicLimit = 7

  let latestArticles: Article[] = [];
  let techArticles: Article[] = [];
  let societyArticles: Article[] = [];
  let cultureArticles: Article[] = [];
  let emotionArticles: Article[] = [];

  while (
    techArticles.length < topicLimit ||
    societyArticles.length < topicLimit ||
    cultureArticles.length < topicLimit
  ) {
    // 每一次获取10篇最新文章
    const latestBatch = await fetch(`${API_URL}/article/latest?page=${latestPage}&limit=10`)
      .then(res => res.json())
      .catch((error) => {
        console.error(`获取第${latestPage}页最新文章失败：`, error);
        return [];
      })

    // 如果已经没有最新文章，停止循环
    if (latestBatch.length === 0) {
      break;
    }

    latestBatch.forEach((article: Article) => {
      // 检测是否在刚才的推荐文章中
      if (!featuredIds.has(article._id)) {

        // 首先增加最新的12篇文章
        if (latestArticles.length < latestLimit) {
          latestArticles.push(article);
          return;
        }

        //接着处理各分类的文章
        switch (article.topic) {
          case 'tech':
            if (techArticles.length < topicLimit) techArticles.push(article);
            break;
          case 'society':
            if (societyArticles.length < topicLimit) societyArticles.push(article);
            break;
          case 'culture':
            if (cultureArticles.length < topicLimit) cultureArticles.push(article);
            break;
          case 'emotion':
            if (emotionArticles.length < topicLimit) emotionArticles.push(article);
            break;
          default:
            break;
        }
      }
    });

    latestPage++;
  }

  const result = {
    featureArticles,
    latestArticles,
    techArticles,
    societyArticles,
    cultureArticles,
    emotionArticles
  }

  return new Response(JSON.stringify(result), {
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'public, max-age=600'
    }
  });
}) satisfies RequestHandler;