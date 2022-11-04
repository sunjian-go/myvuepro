<template>
  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    /><!--prev上一页 pager下一页-->
  </div>
</template>

<script>
export default {
  name: "fenye",
  data(){
    return{
      currentPage: 1,
      pageSize:10
    }
  },
  methods:{
    handleSizeChange(p){//获取组数
      this.pageSize=p
      console.log("组数：",p)
    },
    handleCurrentChange(c){//获取页码
      this.currentPage=c
      console.log("页码：",c)
    }
  }
}
</script>

<style scoped>

</style>