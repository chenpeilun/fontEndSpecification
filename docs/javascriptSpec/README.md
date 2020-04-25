<!--
 * @Author: your name
 * @Date: 2020-04-18 17:48:38
 * @LastEditTime: 2020-04-19 21:59:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontEnd-specification\docs\javascriptSpec\README.md
 -->

## 基础规范
1. 书写过程中, 每行代码结束必须有分号.
2. 变量命名:  首字母小写驼峰式命名
3. 函数命名: 首字母小写驼峰式命名
4. 常量命名: 使用全大写字母＋下划线的命名方式方式
   ```
    var GLOBAL_VARIABLE = '';
   ```
5. 命名语义化: 尽可能利用英文单词或其缩写(推荐网易有道词典进行翻译)
6. 尽量避免使用存在兼容性及消耗资源的方法或属性, 比如eval() & innerText;
7. 代码结构明了, 加适量注释. 提高函数重用率

## 代码编写(举例：列表页面)
1. 每个模块需要一个模块逻辑文件，命名按照模块名称命名；一个服务js文件，按照模块名称+ Service命名
2. 逻辑文件中必须有一个保存这个模块中变量的全局变量
   
  eg: xxx.js
  ```js
  "use strict";    // 使用严格模式
  //当前页面全局变量
  var EPMLocalDomain = {};

  $(document).ready(function () {

    // 加载页面信息
    loadPageInfo();

  });
  var loadPageInfo = function () {
    //页面初始化
    _init();
    // 绑定页面按钮事件
    _bindBtnEvent();
  }
    /**
    * 页面初始化
    * @private
    */
   function _init = function () {
     
   }

   /**
    * 绑定页面按钮事件
    * @return {[type]} [description]
    */
   var _bindBtnEvent = function () {

   }
  ```
  xxxService.js
  ```js
    var xxxService = (function () {
      var _className = "xxxServeice"
      var _rootUrl = EPM_GLOBAL.SERVER.epm_visualize_api + "/visuTimeNetworkMgn";
      var _visuTimeNetworkMgnGetUrl = _rootUrl + "/get";//获取单个实体数据


       /**
     *
     * @param success 成功回调方法
     * @param fail 失败回调方法
     * @param id 主键id
     * @private
     */
    var _get = function (success, fail, timeNetworkId) {
        wui.logMethodCalled("_get", _className);

        if (!timeNetworkId) {
            console.info("visuTimeNetworkMgn的主键id不能为空");
            return;
        }
        var theUrl = _visuTimeNetworkMgnGetUrl + "?timeNetworkId=" + timeNetworkId;
        var param = {
            url: theUrl,
            method: "GET",
            successCallback: success,
            errorCallback: fail
        };
        wui.ajax(param);
      }
      return {
        get: _get, //获取visuTimeNetworkMgn
      }
    })()
  ```


## 注释
  ```js
  // 单行注释斜杠后面要留有一个空格

  /*
  * 多行注释最少三行，注释内容与星标前保留一个空格
  */

  var hello = '';        // 描述变量可以这样写在变量右边

  /*
 * 描述方法（函数）必须使用多行描述
 * 如有必要可以加上参数和返回值说明，参考 http://usejsdoc.org/
 * @param {Object} balabalabala
 * @return {Object} balabalabala
 */
 function foo() {
     // 描述下面代码时做什么的，方法第一行不需要留空格
     doSomething();
     
     // 描述下面代码时做什么的，上方需要留一个空行
     afterDoSomething();
     
     if (flag) {
         // 描述下面代码时做什么的，代码块的第一行也不需要留空格
         drive();
     }
 }
  ```

## 语法
1. 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
2. 单行长度，理论上不要超过80列，不过如果编辑器开启 soft wrap 的话可以不考虑单行长度如果需要换行，存在操作符的情况，一定在操作符后换行，然后换的行缩进4个空格。这里要注意，如果是多次换行的话就没有必要继续缩进了，比如说下面这种就是最佳格式。
  ```js
    if (typeof qqfind === "undefined" ||
      typeof qqfind.cdnrejected === "undefined" ||
      qqfind.cdnrejected !== true) {
      
  } else {
      
  }
  ```
3. if 语法
   ```js
    // if else 前后留有空格，
    if (flag) {

    } else {

    }
   ```
4. for 语法
   ```js
    // 普通for
    var values = [ 1, 2, 3, 4, 5, 6, 7 ],
        i, len;
    // len 记得先赋值后再做比较，性能比较好
    for (i=0, len=values.length; i<len; i++) {
    }

    // 一般情况不要用for in语法
   ```
5. switch 语法
   ```js
    // switch和括号之间有空格， case需要缩进， break之后跟下一个case中间留一个空行
    switch (condition) {
        case "first":
            // code
            break;

        case "third":
            // code
            break;

        default:
        // code
    }

    // 没有default的情况需要注释特别说明
    switch(condition) {
        case "first":
            // code
            break;

        case "second":
            // code
            break;

        // no default
    }
   ```
6. 变量声明
   ```js
    function foo() {
    var result,    // 一个代码块里的变量声明只用一个var
         length,    // 一个变量一行，行末跟注释
         mainWrap;// 驼峰式命名法
         
    }
   ```
7. 函数声明
   ```js
    // good
    function foo() {        // 小括号前不需要空格，小括号与大括号间需要一个空格
        doSomething(); // 函数调用括号前后不需要空格
        return "hello world";
    }

    // bad
    var foo = function() {
        return "hello world";
    }

    // bad
    var foo = new Function(
        'return "hello world"'
    );


    // 立即执行函数的写法, 最外层必须包一层括号
    // 详情请看 ##代码编写(举例：列表页面)
    // Good
    (function() {
        "use strict";    // 使用严格模式

        function doSomething() {
            // code
        }

        function doSomethingElse() {
            // code
        }

    })();
   ```
8. 空行
   ```js
   function foo1() {
    
    }
    // 方法之间加空行
    function foo2() {
        
    }
    // 逻辑块与方法之间加空行增加可读性
    for (var i=0; i<10; i++) {
        
    } 
    // 逻辑块之间加空行增加可读性
    if (flag) {
        
    } else {
        
    }
    // 文件结尾留一个空行
   ```
9. 其他
    只有字符串类型允许使用 == !=，如if(x == 'a') 其他情况一律用严格比较条件 === !==
    eval 非特殊业务， 禁用！！！
    with 非特殊业务， 禁用！！！


