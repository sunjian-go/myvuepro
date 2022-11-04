<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
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
              <el-col :span="24"><div class="grid-content ep-bg-purple">
                <el-form :model="form" label-width="120px">
                  <el-form-item label="Activity name">
                    <el-input v-model="form.name" />
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Activity time">
                    <el-col :span="11">
                      <el-date-picker
                          v-model="form.date1"
                          type="date"
                          placeholder="Pick a date"
                          style="width: 100%"
                      />
                    </el-col>
                    <el-col :span="2" class="text-center">
                      <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                      <el-time-picker
                          v-model="form.date2"
                          placeholder="Pick a time"
                          style="width: 100%"
                      />
                    </el-col>
                  </el-form-item>
                  <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery" />
                  </el-form-item>
                  <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="Online activities" name="type" />
                      <el-checkbox label="Promotion activities" name="type" />
                      <el-checkbox label="Offline activities" name="type" />
                      <el-checkbox label="Simple brand exposure" name="type" />
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="Sponsor" />
                      <el-radio label="Venue" />
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Activity form">
                    <el-input v-model="form.desc" type="textarea" />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                  </el-form-item>
                </el-form>
              </div></el-col>
            </el-row>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
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
      }
    }
  },
  methods:{
    onSubmit(){
      alert("创建成功！")
      console.log(this.form.name)
      console.log(this.form.region)
      console.log(this.form.date1)
      console.log(this.form.date2)
      console.log(this.form.type)
      console.log(this.form.resource)
      console.log(this.form.desc)
    }
  }
}
</script>

<style>
.el-container{
  height: 100vh;
}
.el-header{
  background: #545c64;
  text-align: center;
}
.el-aside{
  background: #545c64;
  text-align: center;
}
.el-main{
  background: aqua;
  text-align: center;
}
.el-footer{
  background: azure;
  text-align: center;
}
.ep-bg-purple{
  background: aquamarine;
  color: black;
  text-align: center;
  height: 300px;
  margin-bottom: 10px;/*下移10px*/
  margin-top: 30px;
}
.el-card{
  background: aquamarine;
  height: 300px;
}
</style>