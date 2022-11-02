<template>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <br>
  <el-button type="primary" plain style="margin-top: 10px">Primary</el-button>
  <br>
  <el-button type="primary" round style="margin-top: 10px">Primary</el-button>
  <br>
  <el-button type="primary" icon="Edit" circle style="margin-top: 10px"/><!--由于官方bug，icon前面不需要加:绑定-->
  <el-button type="success" icon="Check" circle style="margin-top: 10px"/>
  <el-button type="info" icon="Message" circle style="margin-top: 10px"/>
  <el-button type="warning" icon="Star" circle style="margin-top: 10px"/>
  <el-button type="danger" icon="Delete" circle style="margin-top: 10px"/>
</template>