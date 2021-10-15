/*
 * @Author: your name
 * @Date: 2021-10-14 10:41:56
 * @LastEditTime: 2021-10-15 09:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第四阶段：前后端交互阶段资料新\大事件项目课程资料\day1（1-3小节）\code\assets\js\index.js
 */
$(function() {
    getUserInfo()
    var layer = layui.layer
    $('#btn_Logout').on('click', function() {
        layer.confirm('确定退出登录？', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem('token')
            layer.close(index)
            location.href = './index.html'
        })
    })
})

function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(user) {
    var name = user.nicname || user.username
    $('#welcome').html('欢迎&nbsp&nbsp' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', 'user.user_pic').show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}