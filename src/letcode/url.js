/*
http://www.qq.com  // 通过

http://www.qq.com.cn  // 不通过

http://www.qq.com/a/b  // 通过

http://www.qq.com?a=1  // 通过

http://www.123qq.com?a=1  // 不通过
*/
export default function (url) {
  return /^https?:\/\/www\.qq\.com[^.]*$/.test(url);
}
