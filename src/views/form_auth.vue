<template>
  <el-form
      :rules="rules"
      ref="form"
      :model="form"
      label-width="120px"
  ><!--:rules:绑定规则;ref：绑定form对象，验证的时候要用-->
    <el-form-item label="Activity name" prop="name"> <!--prop的名称跟rules里面的规则名称位对应关系，通过prop名称查找rules里面的规则-->
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time" prop="date1">
      <el-col :span="11" >
        <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center" >
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11" >
        <el-form-item prop="date2">
        <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
        />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="form.type" >
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">Create</el-button>
      <el-button>Cancel</el-button>
      <el-button type="warning" @click="resetBtn('form')">reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "form_auth",
  data(){
    var validatePass=(rule, value, callback)=>{ //定义校验箭头函数，rule：匹配到的规则，一般用不到，value：校验的值，callback：回调函数，没有入参表示通过校验，类似return true
      if(value !='aaa'){
          callback(new Error("输入内容不等于aaa")); //new Error可以输入提示语
        }else {
          callback();
        }
    };
    return{
      form:{
        name:'',
        region:'',
        date1:'',
        date2:'',
        delivery:false,
        type:[],
        resource:'',
        desc:''
      },
      rules: {//校验规则定义
        // name: [//跟上面的prop的名称一一对应
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },//required: 为true就是必填项；message: 没填的时候提示语；trigger:blur 光标失去聚焦的时候提示
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } //min: 最小长度 max：最大长度
        // ],
        name:[
          {validator: validatePass, trigger: 'blur'}//自定义校验规则，validatePass是用于校验的箭头函数，定义在data里面
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }//trigger: 'change'  值没发生变化的时候提示
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
    }
  },

  methods:{
    onSubmit(f){
      this.$refs[f].validate((valid)=>{//refs会去绑定这个对象，validate会去验证他的rules规则，valid会返回true或者false
        if (valid) {
          alert('submit!');//为真则通过
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetBtn(f){
      console.log(this.form)
      this.$refs[f].resetFields(); //resetFields：对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
    }
  }
}
</script>

<style scoped>

</style>