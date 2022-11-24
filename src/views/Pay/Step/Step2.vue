<template>
  <div>
    <el-alert
        type="error">
      <span style="font-size: 15px">
        <i class="el-icon-info"></i>
       &nbsp;请在下单后15分钟内付款，否则您的订单会被自动关闭。
      </span>
    </el-alert>

    <el-row>
      <el-col :offset="0" :span="24">
        <h3 style="color: #ff6600;
        margin-top: 10px;
        margin-bottom: 30px">
          丨 收货地址</h3>

        <Address/>

      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="0" :span="24">
        <h3 style="color: #ff6600;
        margin-top: 10px;
        margin-bottom: 30px">
          丨 发票信息</h3>

        <el-col>

          <el-row>
            <el-col :span="22" :offset="1">
              <el-radio v-model="invoice" :label="false">无需发票</el-radio>
            </el-col>

          </el-row>

          <el-row style="margin-top: 20px">

            <el-col :span="2" :offset="1" style="margin-top: 10px">

              <el-radio v-model="invoice" :label="true">需要发票</el-radio>

            </el-col>

            <el-col :span="20">

              <el-form inline>
                <el-form-item>
                  <el-input :disabled="!invoice" v-model="invoiceTitle" placeholder="发票抬头（个人）">

                  </el-input>
                </el-form-item>
              </el-form>

            </el-col>

          </el-row>

        </el-col>

      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="0" :span="8">
        <h3 style="color: #ff6600;margin-top: 10px;margin-bottom: 30px">
          丨 项目信息</h3>
      </el-col>
    </el-row>

    <el-row>
      <el-table border
                :data="OrderProjectVO">
        <el-table-column align="center" label="项目名称" prop="projectName">

        </el-table-column>

        <el-table-column align="center" label="发起人" prop="launchName">

        </el-table-column>

        <el-table-column width="350" align="center" label="回报内容" prop="returnContent">

        </el-table-column>

        <el-table-column align="center" prop="returnCount" label="回报数量">


        </el-table-column>

        <el-table-column align="center" label="支持单价">
          <template slot-scope="{row}">

            <div style="color: red;">
              {{ row.supportPrice }}
            </div>

          </template>
        </el-table-column>

        <el-table-column align="center" label="配送费用">
          <template slot-scope="{row}">
            {{ row.freight === 0 ? '免运费' : row.freight }}
          </template>
        </el-table-column>

      </el-table>
    </el-row>

    <el-row>
      <el-col :offset="0" :span="8">
        <h3 style="color: #ff6600;margin-top: 10px;margin-bottom: 30px">
          丨 账单</h3>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="bill">
          <div>
            支持金额：
            <span>￥1.00</span>
          </div>
          <div>
            配送费用：
            <span>￥0.00</span>
          </div>
          <div>
            优惠金额：-
            <span>￥0.00</span>
          </div>

          <div style="font-size: 30px">
            支付总金额：
            <span>￥{{OrderProjectVO[0].returnCount * OrderProjectVO[0].supportPrice + OrderProjectVO[0].freight}}</span>
          </div>

          <div>
            请在下单后15分钟内付款，否则您的订单会被自动关闭。
          </div>

          <el-row style="margin-top: 10px">
            <el-col :span="4" :offset="20">
              <el-button :disabled="!checked" @click="payHandle" type="warning" style="font-size: 25px">
                <i class="el-icon-bank-card"></i>
                付款
              </el-button>
            </el-col>
          </el-row>

          <div>
            <el-checkbox v-model="checked">我已知晓风险和规则</el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col style="margin-left: 30px;margin-top: 80px">
        <i style="color: #008cce" class="el-icon-info"></i>
        提示
      </el-col>
      <el-row>
        <el-col :span="20" :offset="1" style="margin-top: 20px;font-size: 15px">
          1.众筹并非商品交易，存在一定风险。支持者根据自己的判断选择、支持众筹项目，与发起人共同实现梦想并获得发起人承诺的回报。<br/>
          2.众筹平台仅提供平台网络空间及技术支持等中介服务，众筹仅存在于发起人和支持者之间，使用众筹平台产生的法律后果由发起人与支持者自行承担。<br/>
          3.本项目必须在2017-06-04之前达到 ￥1000000.00 的目标才算成功，否则已经支持的订单将取消。订单取消或募集失败的，您支持的金额将原支付路径退回。<br/>
          4.请在支持项目后15分钟内付款，否则您的支持请求会被自动关闭。<br/>
          5.众筹成功后由发起人统一进行发货，售后服务由发起人统一提供；如果发生发起人无法发放回报、延迟发放回报、不提供回报后续服务等情况，您需要直接和发起人协商解决。<br/>
          6.如您不同意上述风险提示内容，您有权选择不支持；一旦选择支持，视为您已确认并同意以上提示内容。<br/>
        </el-col>
      </el-row>
    </el-row>

    <br/><br/>

  </div>
</template>

<script>
import Address from "@/views/Pay/Step/Address";

export default {
  name: "Step2",
  props: ['OrderProjectVO', 'order'],
  components: {
    Address
  },
  data() {
    return {
      checked: false,
      invoice: false,
      invoiceTitle: ''
    }
  },
  methods: {
    async payHandle() {
      if(this.invoice) {
        this.order.invoiceTitle = this.invoiceTitle
      }
      let res = await this.$API.order.reqPayOrder(this.order)
      await this.$router.push({path: '/pay/alipay', query: {codeUrl : res.data}})
    }
  }
}
</script>

<style scoped>
.bill {
  background-color: #fcf8e3;
  width: 100%;
  height: 350px;
  border: #ffc186 2px solid;
  border-radius: 5px;
  color: #936f3a;
  padding-top: 35px;
}

.bill div {
  margin-top: 10px;
  margin-right: 15px;
  text-align: right
}

.bill span {
  color: red;
}
</style>
