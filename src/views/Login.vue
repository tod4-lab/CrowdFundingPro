<template>
  <div>
    <el-card class="box-card">
      <h3>用户登录</h3>
      <el-divider/>
      <el-form :model="loginForm" status-icon :rules="rules" ref="registerForm" label-width="100px"
               class="demo-ruleForm">

        <el-row>
          <el-col :span="14" :offset="4">
            <el-form-item label="登录账号" prop="loginAcct">
              <el-input type="text" v-model="loginForm.loginAcct" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="14" :offset="4">
            <el-form-item label="登录密码" prop="userPswd">
              <el-input type="password" v-model="loginForm.userPswd" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12" :offset="4">
            <el-form-item>
              <el-button type="primary" @click="loginHandle">登录</el-button>
              <el-button >重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        loginAcct: 'hikaru',
        userPswd: '123456'
      },
      rules: {

      }
    }
  },
  methods: {
    async loginHandle() {
      let res = await this.$store.dispatch('member/login', this.loginForm)

      if(res.code === 200) {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        await this.$router.push({path: '/'})
      }

    }
  }
}
</script>

<style scoped>
.el-card {
  margin-top: 270px;
  margin-left: 550px;
  width: 800px;
  background: rgba(200, 200, 200, 0.2);
  backdrop-filter: blur(10px);
}
</style>
