<template>
  <el-card class="box-card"><!--不写shadow默认是always,总是有阴影-->
    <template #header>
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
</template>
