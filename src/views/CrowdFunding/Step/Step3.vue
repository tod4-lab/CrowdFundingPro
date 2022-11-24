<template>
  <div>
    <el-row>
      <el-col :offset="0" :span="15">
        <h3 style="color: #ff6600;margin-bottom: 30px">
          丨 确认信息（请填写易付宝企业账号用于收款及身份核实）</h3>
      </el-col>
    </el-row>

    <el-row>
      <el-form :inline="false" label-width="130px">
        <el-row>
          <el-col :span="9" :offset="1" style="margin-top: 10px">

            <el-form-item label="易付宝企业账号：">
              <el-col :span="24">
                <el-input v-model="projectInfo.memberConfirmInfoVO.payNum"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="法人身份证号：">
              <el-col :span="24">
                <el-input v-model="projectInfo.memberConfirmInfoVO.cardNum"></el-input>
              </el-col>
            </el-form-item>

          </el-col>

          <el-col :span="12" :offset="1">
            <el-card>

              <el-row>
                <el-col :offset="0" :span="12">
                  <h4><i class="el-icon-user"></i> 易购账户名：<el-link type="primary">15688872215</el-link></h4>
                </el-col>
              </el-row>

              <el-row>
                <h4>您正在使用该账号发起众筹项目</h4>
              </el-row>

            </el-card>
          </el-col>

        </el-row>

      </el-form>
    </el-row>

    <el-row>
      <el-col>
        <el-button type="warning" @click="preStep">上一步</el-button>
        <el-button type="warning" @click="nextStep">提 交</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Step3",
  data() {
    return {
      checkboxGroup1: []
    }
  },
  props: ['projectInfo'],
  methods: {
    nextStep() {
      this.$emit('launchProject')
    },
    preStep() {
      this.$emit('preStep')
    },
  }
}
</script>

<style scoped>

</style>
