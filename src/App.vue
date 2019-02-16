<script>
// import {get} from './util'
// import config from './config'

export default {
  async created () {
    // const res = await get('/weapp/demo')
    // console.log(123, res)

    // wx.request({
    //     url: config.host + '/weapp/demo',
    //     success: function (res) {
    //         console.log(res)
    //     }
    // })

    console.log('小程序启动了')
  }
}
</script>

<style>
.text-footer{
  text-align: center;
  font-size: 24rpx;
  margin-bottom: 10rpx;
}
.text-primary{
  color: #ea5149;
}
.btn{
  color: white;
  background-color: #ea5149;
  border-radius: 10rpx;
  font-size: 28rpx;
  line-height: 60rpx;
  height: 60rpx;
  width: 100%;
}
.btn:active{
  background-color: #fa5149;
}
</style>
