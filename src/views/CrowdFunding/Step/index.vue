<template>
  <div>

    <el-row>
      <el-col :span="14" :offset="5">
        <el-steps :active="step" finish-status="success" simple style="margin-top: 20px">
          <el-step title="项目及发起人信息" ></el-step>
          <el-step title="回报设置" ></el-step>
          <el-step title="确认信息" ></el-step>
          <el-step title="完成" ></el-step>
        </el-steps>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 80px">
      <el-col :span="14" :offset="5">

        <el-card>
          <Step1 @nextStep="nextStep" :projectInfo="projectInfo" @preStep="preStep" v-show="step===0"/>
          <Step2 @nextStep="nextStep" :projectInfo="projectInfo" @preStep="preStep" v-show="step===1"/>
          <Step3 @nextStep="nextStep" :projectInfo="projectInfo" @preStep="preStep" @launchProject="launchProject" v-show="step===2"/>
          <Step4 @nextStep="nextStep" :projectInfo="projectInfo" v-show="step===3"/>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Step1 from "@/views/CrowdFunding/Step/Step1";
import Step2 from "@/views/CrowdFunding/Step/Step2";
import Step3 from "@/views/CrowdFunding/Step/Step3";
import Step4 from "@/views/CrowdFunding/Step/Step4";
export default {
  name: "Step",
  mounted() {
  },
  data() {
    return{
      step: 0,

      projectInfo: {

        // 项目信息
        typeList: '',
        tagList: [],
        projectName: '',
        projectDescription: '一句话介绍',
        money: '999999',
        day: '7',
        headerPicturePath: '',

        // 项目详情图
        detailPictureList: [],

        // 发起人信息
        memberLaunchInfoVO: {
          descriptionSimple: '自我介绍',
          descriptionDetail: '详细自我介绍',
          phoneNum: '156888888',
          serviceNum: '156888888',
        },

        returnVOList: [],

        memberConfirmInfoVO: {
          payNum: '',
          cardNum: ''
        },


      }
    }
  },
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  methods: {
    nextStep() {
      window.scrollTo(0, 0)
      this.step++;
    },
    preStep() {
      window.scrollTo(0, 0)
      this.step--;
    },
    async launchProject() {
      let res = await this.$API.crowdFund.reqLaunchProject(this.projectInfo)
      if(res.code === 200) {
        this.nextStep()
      }
    }
  }
}
</script>

<style scoped>

</style>
