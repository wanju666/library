<template>
    <div class="book-card">
        <div class="thumb">
            <img :src="book.image" class="img" mode='aspectFit'>
        </div>
        <div class="detail">
            <div class="row text-primary">
                <div class="left title">
                    {{ book.title }}
                </div>
                <div class="right rate">
                    {{ book.rate }}
                    <Rate :value='book.rate'></Rate>
                </div>
            </div>
            <div class="row">
                <div class="left author">
                    作者:{{ book.author }}
                </div>
                <div class="right">
                    浏览量
                </div>
            </div>
            <div class="row">
                <div class="left publisher">
                    {{ book.publisher }}
                </div>
                <div class="right nickname">
                    {{ book.user_info.nickName }}                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rate from '@/components/Rate'

export default {
    components: {
        Rate
    },
    props: ['book']
}
</script>

<style lang='scss' scoped>
.book-card{
  padding: 10rpx;
  overflow: hidden;
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  font-size: 28rpx;
  .thumb{
    width: 180rpx;
    height: 180rpx;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail{
    margin-left: 200rpx;
    .row{
        line-height: 40rpx;
        margin-bottom: 6rpx;
        .left{
            display: inline-block;
            width: 340rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .right{
            margin-right: 20rpx;
            float: right;
        }
    }
  }
}
</style>
