<template>
  <el-card shadow="never" :body-style="{padding:'0px'}"><!--padding：内边距设置-->
    <el-table
        :data="tableData"
        style="width: 100%"
    @selection-change="selectChange"
    >
      <el-table-column
          type="selection"
          width="55"><!--多加一列用于打勾-->
      </el-table-column>
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
  </el-card>
  <br>
  <el-card shadow="never" :body-style="{padding:'0px'}"><!--padding：内边距设置-->
    <el-table :data="rows" style="width:50%">
      <el-table-column prop="date"></el-table-column>
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="address"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "table",
  methods:{
    selectChange(row){
      this.rows=row
      console.log(this.rows)
      //console.log(row)
    }
  },
  data(){
    return{
      rows:[],
      tableData:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>