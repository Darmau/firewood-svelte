import type { ParamMatcher } from '@sveltejs/kit';
// 只允许page为整数
export const match: ParamMatcher = (param) => {
  return /^\d+$/.test(param);
};
