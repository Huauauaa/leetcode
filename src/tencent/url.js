// 4.实现向 url 添加 query 参数
// /**
// * 向 url 添加 query 参数
// *
// * @param {string} targetUrl
// * @param {object} params
// */
// function addQueryParam(targetUrl, params) {
// const index1 = targetUrl.indexOf('?');
// const index2 = targetUrl.indexOf('#');
// const paramStr = targetUrl.substring(index1 + 1, index2);
// const paramStrArr = paramStr.split('&');
// const paramObj = {};
// paramStrArr.forEach((item) => {
// const temp = item.split('=');
// paramObj[temp[0]] = temp[1];
// });
// const resultParamObj = { ...paramObj, ...params };
// const resultParamStrArray = [];
// Object.keys(resultParamObj).forEach((item) => {
// const temp = `${item}=${resultParamObj[item]}`;
// resultParamStrArray.push(temp);
// });
// const domain = targetUrl.substring(0, index1 + 1);
// const resultParams = resultParamStrArray.join('&');
// const hash = targetUrl.substring(index2);

// return `${domain}${resultParams}${hash}`;

// }

// addQueryParam('https://cloud.tencent.com?a=1#hash', { b: 1, c: 1})
// // 返回 https://cloud.tencent.com?a=1&b=1&c=1#hash

// addQueryParam('https://cloud.tencent.com?a=1&b=1#hash', { b: 1})
// // 返回 https://cloud.tencent.com?a=1&b=1#hash

// addQueryParam('https://cloud.tencent.com?a=1&b=1#hash', { b: 2})
// // 返回 https://cloud.tencent.com?a=1&b=2#hash
