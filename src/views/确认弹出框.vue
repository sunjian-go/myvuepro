<template>
  <!--
  confirm-button-text: 确认时候按钮的内容
  cancel-button-text: 取消时候按钮的内容
  icon: 提示内容的icon（图标）
  icon-color: 提示内容的icon颜色（图标颜色）
  title: 提示的内容
  @confirm: 确认按钮的钩子函数
  @cancel: 取消按钮的钩子函数
  -->
  <el-popconfirm
      confirm-button-text="OK"
      cancel-button-text="No"
      icon="Delete"
      icon-color="#626AEF"
      title="Are you sure to delete this?"
      @confirm="confirmEvent"
      @cancel="cancelEvent"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: "确认弹出框",
  methods:{
    confirmEvent(){
      alert("删除成功")
    },
    cancelEvent(){
      alert("已取消")
    }
  }
}
</script>

<style scoped>

</style>