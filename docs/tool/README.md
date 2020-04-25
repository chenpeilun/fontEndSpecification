<!--
 * @Author: your name
 * @Date: 2020-04-25 21:17:31
 * @LastEditTime: 2020-04-25 21:23:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fontEndSpecification\docs\tool\README.md
 -->
# 常用公共方法
## 去除字符串空格
```js
/**
* 去除字符串空格
* @param str 要处理的字符串
* @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
*/
strTrim:function (str,type){
  switch (type){
    case 1:return str.replace(/\s+/g,"");
    case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:return str.replace(/(^\s*)/g, "");
    case 4:return str.replace(/(\s*$)/g, "");
  default:return str;
}
```

## 获取url参数
```js
/**
* 获取URL参数
* @param url 地址
* @returns 例：getUrlPrmt("http://www.baidu.com?id=1&nam=cpl&type=1,2,3")，结果{id: "1", nam: "cpl", type: "1,2,3"}
*/
getUrlPrmt:function (url) {
  url = url ? url : window.location.href;
  let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
  for (var i = 0, _len = _arrS.length; i < _len; i++) {
  let pos = _arrS[i].indexOf('=');
  if (pos == -1) {
  continue;
  }
  let name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
  _rs[name] = value;
  }
  return _rs;
},
```

## 日期重载方法
```js
/**()
 * 日期重载方法
 @method (new Date()).Format()
 @param formatStr {String} 日期格式
 @return strin
 */
Date.prototype.Format = function (formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, this.getMonth() >= 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
}
```
