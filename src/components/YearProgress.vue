<template>
    <div class="progressbar">
        <!-- 进度条组件 -->
        <progress :percent='percent' activeColor='#ea5149'></progress>

        <p>{{year}}已经过去了{{days}}天({{percent}}%)</p>
    </div>
</template>

<script>
export default {
  methods: {
    // 是否是闰年
    isLeapYear () {
      let year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    // 一年多少天
    getDayOfYead () {
      return this.isLeapYear() ? 366 : 365
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // start就是今年第一天
      // 今天你的时间戳 减去今年第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.days * 100 / this.getDayOfYead()).toFixed(1)
    }
  }
}
</script>

<style lang="scss">
.progressbar{
    width: 100%;
    text-align: center;
    margin: 10rpx 0 40rpx 0;
    progress{
        margin-bottom: 10rpx;
    }
    p{
        font-size: 32rpx;
        color: #333;
    }
}
</style>
