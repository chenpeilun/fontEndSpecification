<!--
 * @Author: your name
 * @Date: 2020-04-18 17:48:26
 * @LastEditTime: 2020-04-25 20:52:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontEnd-specification\docs\htmlSpec\README.md
 -->
## 基础规范
* 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式
* 在属性上，使用双引号，不要使用单引号。
* 不要在自动闭合标签结尾处使用斜线 - HTML5 规范 指出他们是可选的。
* 不要忽略可选的关闭标签
* 嵌套的节点应该缩进（四个空格）。
* 根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。
* 标签上属性过多影响可读性必须换行处理，一般超过3个就可以换行处理，但是如果属性在一行内可以展示完可以不用换行
  ```html
        <!-- 此处可不用换行 -->
        <input type="hidden" id="processChartId" name="processChartId" ui-type=""/>
        <!-- 此处可不用换行 -->
          <input type="hidden" id="createTime" name="createTime" ui-type=""/>
         
          <table class="table table-responsive">
              <tr>
                  <td class="form-td-label">线路:</td>
                  <td class="form-td-content">
                  <!-- 此处可不用换行 -->
                      <input name="lineId" class="wui-input" id="lineId" validate="required" >
                  </td>
                  <td class="form-td-label">图类型:</td>
                  
                  <td class="form-td-content">
                  <!-- 此处需换行 -->
                      <input name="chartType"
                             class="wui-input"
                             id="chartType"
                             validate="required"
                             maxlength="100" >
                  </td>
              </tr>
          </table>
  ```
## 属性顺序
HTML 属性应该按照特定的顺序出现以保证易读性。

* class

* id

* name

* data-*

* src, for, type, href, value , max-length, max, min, pattern

* placeholder, title, alt

* aria-*, role

* required, readonly, disabled

## 标签规范
### img标签
<img>标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：

网速太慢
src 属性中的错误
浏览器禁用图像
用户使用的是屏幕阅读器

从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容

