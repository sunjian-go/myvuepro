<template>
  <el-row :gutter="20"><!--gutter设置元素与元素间隔大小-->
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-card class="box-card" shadow="hover"><!--hover：鼠标放上去有阴影效果-->
        <p>段落1</p>
      </el-card>
    </div></el-col><!--注意：官网的div没有尾标签，自己记得加上-->
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-card class="box-card" shadow="hover"><!--hover：鼠标放上去有阴影效果-->
        <p>段落2</p>
      </el-card>
    </div></el-col><!--:span的值代表每个框占了几个栏位，一行栏位总共24个，根据需求去划分-->
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-card class="box-card" shadow="hover"><!--hover：鼠标放上去有阴影效果-->
        <div>
          <p>段落2</p>
        </div>
      </el-card>
    </div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple">
      <el-card class="box-card" shadow="hover"><!--hover：鼠标放上去有阴影效果-->
        <div v-for="o in 4" :key="o" class="text item" >{{ 'List item ' + o }}</div>
      </el-card>
    </div></el-col>
<!--    <el-col :offset="3" :span="3"><div class="grid-content ep-bg-purple">4</div></el-col>&lt;!&ndash;offset调整框与框的间距&ndash;&gt;-->
    <el-col :span="24"><div class="grid-content ep-bg-purple">5</div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "layout"
}
</script>

<style scoped>
  .ep-bg-purple{
    background: aqua;
    color: black;
    text-align: center;
    height: 300px;
    margin-bottom: 10px;/*下移10px*/
  }
  .el-card{
    background: aqua;
    height: 300px;
  }
</style>