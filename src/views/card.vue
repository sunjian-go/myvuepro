<template>
  <el-card class="box-card"><!--不写shadow默认是always,总是有阴影-->
    <template #header><!--插槽，将此template的内容插到header中-->
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item" >{{ 'List item ' + o }}</div>
  </el-card>
  <br>
  <el-card class="box-card" shadow="hover"><!--hover：鼠标放上去有阴影效果-->
    <div v-for="o in 4" :key="o" class="text item" >{{ 'List item ' + o }}</div>
  </el-card>
  <br>
  <el-card class="box-card" shadow="never"><!--never:无阴影效果-->
    <div v-for="o in 4" :key="o" class="text item" >{{ 'List item ' + o }}</div>
  </el-card>
  <br>
  <div class="block text-center">
    <span class="demonstration"
    >Switch when indicator is hovered (default)</span
    >
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(value,item) in compute" :key="item">
        <h3 class="small justify-center" text="2xl">{{ value }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data(){
    return{
      compute:["主机","鼠标","键盘"]
    }
  }
}
</script>
