<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
export default {
  name: "alert",
  methods:{
    open1(){
      this.$message("消息");
    },
    open2(){
      this.$message({
        message:'恭喜你，这是一条成功消息',
        type:'success',
        center:true
      });
    },
    open3(){
      this.$message({
        message:"警告",
        type:'warning'
      });
    },
    open4(){
      this.$message.error("错误");
    }
  }
}
</script>

<style scoped>

</style>