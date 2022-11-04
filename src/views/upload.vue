<template>
  <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handlerSuccess"
      list-type="picture"
      :file-list="fileList"><!--on-preview、on-remove、on-success后面跟着对应的钩子函数，可以在触发此条件时，在钩子函数里做任何事-->

    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip" style="margin-bottom: 10px">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: "upload",
  data(){
    return{
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemec1dn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
    },
  methods:{
    handleRemove(){
      alert("删除成功！")
    },
    handlerSuccess(){
      alert("文件上传成功！")
    },
    handlePreview(){
      alert("点击图片")
    }
  }
  }

</script>

<style scoped>

</style>