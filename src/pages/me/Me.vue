<template>
    <div class="container">
        <button class="userinfo" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">
            <img :src="userinfo.avatarUrl" alt="">
            <p class="me">{{userinfo.nickName}}</p>
        </button>

        <!-- 今年过去了多少天 -->
        <YearProgress></YearProgress>

        <button v-if="userinfo.openId" @click='scanBook' class="btn">添加图书</button>
    </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
import {showSuccess, post, showModal} from '@/util'

import YearProgress from '@/components/YearProgress'

export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    // 添加图书
    async addBook(isbn){
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      showModal('添加成功', `${res.title}添加成功`);
    },
    // 扫码功能
    scanBook () {
      wx.scanCode({
        // 是否允许从相册选择图片
        onlyFromCamera: true,
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    // 登录功能
    doLogin () {
      const _this = this

      const session = qcloud.Session.get()

      if (session) {
        // 第二次登录
        // 或者本地已经有登录状态
        // 可使用本函数更新登录状态
        qcloud.loginWithCode({
          loginUrl: config.loginUrl,
          success: function (userinfo) {
            console.log('已经登录成功', userinfo)
            _this.userinfo = wx.getStorageSync('userinfo')
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      } else {
        // 首次登录
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            console.log('登录成功', userinfo)
            // util工具函数-显示弹窗
            showSuccess('登录成功')
            // 缓存数据
            wx.setStorageSync('userinfo', userinfo)
            _this.userinfo = userinfo
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  },
  created () {
    // 刷新页面时判断是否有用户信息
    if (wx.getStorageSync('userinfo').openId) {
      this.userinfo = wx.getStorageSync('userinfo')
    }
  }
}
</script>

<style lang='scss'>
.container{
    padding: 0 100rpx;
    .userinfo{
        margin-top: 100rpx;
        text-align: center;
        width: 150rpx;
        padding: 0;
        background-color: #fff;
        &::after{
            border: 0;
        }
        img{
            width: 150rpx;
            height: 150rpx;
            border-radius: 50%;
        }
        .me{
            font-size: 32rpx;
            line-height: 48rpx;
            position: relative;
            top: -30rpx;
        }
    }
}
</style>
