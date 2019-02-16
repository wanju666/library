<template>
  <div>
    <Card v-for="book in books" :key="book.id" :book="book"></Card>
    <p class="text-footer" v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>

<script>
import { get } from "@/util";
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      books: [],
      page: 0,
      more: true
    };
  },
  methods: {
    async getList(init) {
      if(init){
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get("/weapp/booklist", {page: this.page});
      if(books.list.length<10 && this.page>0){
        this.more = false
      }
      if(init){
        this.books = books.list
        wx.stopPullDownRefresh()
      } else {
        // 下拉刷新，不能直接覆盖books
        this.books = this.books.concat(books.list)
      }
      wx.hideNavigationBarLoading()
    },
  },
  onPullDownRefresh(){
    this.getList(true);
  },
  onReachBottom(){
    if(!this.more){
      // 没有更多
      return false
    }
    this.page = this.page+1
    this.getList()
  },
  mounted() {
    this.getList(true);
  }
};
</script>

<style lang='scss'>

</style>
