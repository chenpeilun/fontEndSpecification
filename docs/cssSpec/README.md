<!--
 * @Author: your name
 * @Date: 2020-04-18 17:48:12
 * @LastEditTime: 2020-04-19 21:59:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontEnd-specification\docs\cssSpec\README.md
 -->

## css基本样式


```css
// 新浪重置页面样式的css
@charset 'utf-8';
html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img {
    margin:0;
    padding:0
}
fieldset,img {
    border:0
}
img {
    display:block
}
address,caption,cite,code,dfn,th,var {
    font-style:normal;
    font-weight:normal
}
ul,ol {
    list-style:none
}
input {
    padding-top:0;
    padding-bottom:0;
    font-family:"SimSun","宋体"
}
input::-moz-focus-inner{
    border:0;
    padding:0
}
select,input{
    vertical-align:middle
}
select,input,textarea{
    font-size:12px;
    margin:0
}
input[type="text"],input[type="password"],textarea{
    outline-style:none;
    -webkit-appearance:none
}
textarea{
    resize:none
}
table{
b    order-collapse:collapse


```

## 语法
* 使用组合选择器时，保持每个独立的选择器占用一行。
* 为了代码的易读性，在每个声明的左括号前增加一个空格。
* 声明块的右括号应该另起一行。
* 每条声明 : 后应该插入一个空格。
* 每条声明应该只占用一行来保证错误报告更加准确。
* 所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。
* 逗号分隔的取值，都应该在逗号之后增加一个空格。比如说box-shadow
* 不要在颜色值 rgb() rgba() hsl() hsla()和 rect() 中增加空格
* 不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。
* 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
* 为选择器中的属性取值添加引号，例如 input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。
* 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;
  ```css
  /* Bad CSS */
    .selector, .selector-secondary, .selector[type=text] {
        padding: 15px;
        margin: 0px 0px 15px;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 2px #C0C0C0, inset 0 1px 0 #F8F8F8
    }

    /* Good CSS */
    .selector,
    .selector-secondary,
    .selector[type="text"] {
        padding: 15px;
        margin-bottom: 15px;
        background-color: rgba(0,0,0,.5);
        box-shadow: 0 1px 2px #c0c0c0, inset 0 1px 0 #f8f8f8;
    }
  ```