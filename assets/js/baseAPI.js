/*
 * @Author: your name
 * @Date: 2021-09-10 11:24:08
 * @LastEditTime: 2021-10-14 09:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第四阶段：前后端交互阶段资料新\大事件项目课程资料\day1（1-3小节）\code\assets\js\baseAPI.js
 */
// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);
})