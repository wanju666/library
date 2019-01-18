<template>
    <div class="container">
        <div class="userinfo">
            <img :src="userinfo.avatarUrl" alt="">
            <p class="me">{{userinfo.nickName}}</p>
        </div>

        <!-- 今年过去了多少天 -->
        <YearProgress></YearProgress>

        <button @click='scanBook' class="btn">添加图书</button>
    </div>
</template>

<script>
import YearProgress from '@/components/YearProgress'

export default {
    components: {
        YearProgress
    },
    data(){
        return {
            userinfo:{

            }
        }
    },
    methods: {
        // 扫码功能
        scanBook(){
            wx.scanCode({
                // 是否允许从相册选择图片
                onlyFromCamera: true,
                success:(res)=>{
                    console.log(res)
                }
            })
        },
    },
    created(){
        this.userinfo = wx.getStorageSync('userinfo')
    }
}
</script>

<style lang='scss'>
.container{
    padding: 0 100rpx;
    .userinfo{
        margin-top: 100rpx;
        text-align: center;
        img{
            width: 150rpx;
            height: 150rpx;
            border-radius: 50%;
        }
        .me{
            margin-bottom: 50rpx;
        }
    }
}
</style>
