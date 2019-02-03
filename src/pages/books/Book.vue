<template>
    <div>
        图书页面
        <!-- <button class="btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button> -->
    </div>
</template>

<script>
// import qcloud from 'wafer2-client-sdk'
// import config from '../../config'
// import {showSuccess} from '../../util'

export default {
  methods: {
    // doLogin: function () {
    //     const session = qcloud.Session.get()

    //     if (session) {
    //         // 第二次登录
    //         // 或者本地已经有登录状态
    //         // 可使用本函数更新登录状态
    //         qcloud.loginWithCode({
    //             loginUrl: config.loginUrl,
    //             success: function (userInfo) {
    //                 console.log('已经登录成功', userInfo);
    //             },
    //             fail: function (err) {
    //                 console.log('登录失败', err);
    //             }
    //         })
    //     } else {
    //         // 首次登录
    //         qcloud.setLoginUrl(config.loginUrl);
    //         qcloud.login({
    //             success: function (userinfo) {
    //                 console.log('登录成功', userinfo);
    //                 // util工具函数-显示弹窗
    //                 showSuccess('登录成功');
    //                 // 缓存数据
    //                 wx.setStorageSync('userinfo', userinfo);

    //             },
    //             fail: function (err) {
    //                 console.log('登录失败', err);

    //             }
    //         });
    //     }
    // }
  }
}
</script>

<style>

</style>
