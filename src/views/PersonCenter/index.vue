<template>

  <div class="personCenter">
    <!--  头像区域  -->
    <el-row class="avatar">

      <el-col :offset="4" :span="3">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image">
          <div style="padding: 14px;">
            <span>{{$store.getters.userName}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="10" :offset="1">

        <el-row>

          <el-col :span="20">
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="我支持的" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="我关注的" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="我发起的" name="third">角色管理</el-tab-pane>
            </el-tabs>
          </el-col>

          <el-col :span="4">
            <el-button type="warning" @click="toCrowdFunding">发起众筹</el-button>
          </el-col>

        </el-row>



      </el-col>

    </el-row>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      currentDate: new Date()
    }
  },
  mounted() {
    if(this.$route.query && this.$route.query.out_trade_no) {
      this.payReturn(this.$route.query.out_trade_no)
    }
  },
  methods: {
    toCrowdFunding() {
      this.$router.push({path: '/crowdFunding/agreement'})
    },
    handleClick() {

    },
    async payReturn(orderNum) {
      let res = await this.$API.order.reqPayReturn(orderNum)
      console.log(res.data)
    }
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.avatar {
  margin-top: 80px;
}
</style>
