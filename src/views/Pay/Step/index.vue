<template>
  <div>

    <el-row>
      <el-col :span="16" :offset="4">
        <el-steps :active="step" finish-status="success" simple style="margin-top: 20px">
          <el-step title="确认回报内容" ></el-step>
          <el-step title="确认订单" ></el-step>
          <el-step title="付款" ></el-step>
          <el-step title="完成" ></el-step>
        </el-steps>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 80px">
      <el-col :span="16" :offset="4">

        <el-card>
          <Step1 @setOrderNum="setOrderNum" :OrderProjectVO="OrderProjectVO"  @preStep="preStep" v-show="step===0"/>
          <Step2 @nextStep="nextStep" :OrderProjectVO="OrderProjectVO" :order="order"  @preStep="preStep" v-show="step===1"/>
          <Step3 @nextStep="nextStep"  @preStep="preStep" v-show="step===2"/>
          <Step4 @nextStep="nextStep" v-show="step===3"/>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Step1 from "@/views/Pay/Step/Step1";
import Step2 from "@/views/Pay/Step/Step2";
import Step3 from "@/views/Pay/Step/Step3";
import Step4 from "@/views/Pay/Step/Step4";
export default {
  name: "index",
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      step: 0,
      order: {
        orderNum: '',
        payOrderNum: '',
        invoice: '',
        invoiceTitle: '',
        orderMark: ''
      },
      OrderProjectVO: [{
        projectName: '活性富氢净水直饮机',
        launchName: '深圳市博实永道电子商务有限公司',
        returnContent: '每满1750人抽取一台活性富氢净水直饮机，至少抽取一台。抽取名额（小数点后一位四舍五入）=参与人数÷1750人，由苏宁官方抽取。',
        returnCount: 1,
        supportPrice: 1,
        freight: 0
      }]
    }
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
    setOrderNum(orderNum) {
      this.order.orderNum = orderNum
      this.step++
    }
  }
}
</script>

<style scoped>

</style>
