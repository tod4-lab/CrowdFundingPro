<template>
  <div>
    <el-row>
      <el-col :offset="0" :span="6">
        <h3 style="color: #ff6600;margin-bottom: 30px">
          丨 完成</h3>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2">

        <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">

        </el-result>

      </el-col>

      <el-col :span="10" :offset="2" style="margin-top: 70px;">
          <h4>你发起的众筹项目信息已经提交完毕，</h4><br/>
          <h4>我们会在5~7个工作日内对项目进行审核，请耐心等候 你能在会员中心-我的众筹- 发起的项目中查看</h4>
      </el-col>

    </el-row>

    <el-row>
      <el-col>
        <el-button type="warning" @click="nextStep">我的众筹</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {reqLaunchProject} from "@/api/crowdFund";

export default {
  name: "Step4",
  data() {
    return {
      checkboxGroup1: []
    }
  },
  methods: {
    nextStep() {
      this.$router.push({path : '/personalCenter'})
    },
  }
}
</script>

<style scoped>

</style>
