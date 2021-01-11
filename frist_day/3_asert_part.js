// 立即执行函数写法（函数作用域）
// (function () {
//     var $ = (window.$ = {});
//     $.web = "hdcms";
//     var url = "hdcms.com";
//     $.getUrl = function () {
//         return url;
//     }
// }.bind(window)());

// 上面的语句的另一种写法：块作用域（块作用域要使用let或const声明）
{
    let $ = (window.$ = {});
    $.web = "hdcms";
    let url = "hdcms.com";
    let site = "houdunren";
    $.getUrl = function () {
        return url;
    }
}