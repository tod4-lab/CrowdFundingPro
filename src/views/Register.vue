<template>

  <el-card class="box-card">
    <h3>用户注册</h3>
    <el-divider/>
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px"
             class="demo-ruleForm">

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="登录账号" prop="loginAcct">
            <el-input type="text" v-model="registerForm.loginAcct" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="登录密码" prop="userPswd">
            <el-input type="password" v-model="registerForm.userPswd" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="确认密码" prop="userPswd2">
            <el-input type="password" v-model="registerForm.userPswd2" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input type="text" v-model="registerForm.phoneNumber" autocomplete="off">

              <template slot="append">
                <div style="cursor: pointer" @click="sendValidateCode('registerForm')">
                  <i class="el-icon-mobile-phone"></i>
                </div>
              </template>

            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="4">
          <el-form-item label="验证码" prop="validateCode">
            <el-input v-model="registerForm.validateCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12" :offset="4">
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </el-card>


</template>

<script>
export default {
  name: "Register",
  data() {
    // const loginAcctVal = (rule, value, callback) => {
    //
    // }
    // 密码验证
    const userPswd2Val = (rule, value, callback) => {
      if (value !== this.registerForm.userPswd) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    // 手机号码验证
    const phoneNumberVal = (rule, value, callback) => {
      if (value.length !== 11) {
        callback(new Error('手机号必须为11位'))
      } else {
        for (let i = 0; i < value.length; i++) {
          if (!Number.isInteger(value[i] - '0')) {
            callback(new Error('手机号必须全部为数字'))
          }
        }
        callback()
      }

    }
    // 登录名验证
    const loginAcctVal = async (rule, value, callback) => {
      let res = await this.$API.member.reqIsLoginAcctExist({loginAcct: value})
      if(res.code === 200) {
        if(res.data) {
          callback(new Error(res.data.message))
        } else {
          callback()
        }
      }
    }
    return {
      // registerForm: {
      //   loginAcct: '',
      //   loginPswd: '',
      //   loginPswd2: '',
      //   phoneNumber: '',
      //   validateCode: ''
      // },
      // 登录表单收集
      registerForm: {
        loginAcct: 'admin',
        userName: 'admin',
        userPswd: '123456',
        userPswd2: '123456',
        phoneNumber: '15688872215',
        validateCode: '123456'
      },

      rules: {
        loginAcct: [
          {required: true, message: '请输入登录账号', trigger: 'blur'},
          {min: 4, max: 9, message: '请将长度控制在4~9个字符'},
          {validator: loginAcctVal, trigger: 'blur'}
        ],
        userPswd: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 6, max: 12, message: '请将长度控制在6~12个字符'}
        ],
        userPswd2: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {min: 6, max: 12, message: '请将长度控制在6~12个字符'},
          {validator: userPswd2Val, trigger: 'blur'}
        ],
        phoneNumber: [
          {required: true, message: '请输入手机号', trigger: 'blur'},
          {validator: phoneNumberVal, trigger: 'blur'}
        ],
        validateCode: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    // 注册
    submitForm(formName) {
      this.$nextTick(() => {

        this.$refs[formName].validate(async (valid) => {
          if (valid) {

            let {loginAcct, userName, userPswd, phoneNumber, validateCode} = this.registerForm

            let res = await this.$API.member.reqRegister({loginAcct, userName, userPswd, phoneNumber, validateCode})

            if(res.code === 200) {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.resetForm()
            }


          } else {
            this.$message({
              message: '提交表单有误，请重新检查',
              type: 'error'
            })
          }
        })

      })
    },
    // 表单重置
    resetForm() {
      this.registerForm = {
        loginAcct: '',
        userName: '',
        loginPswd: '',
        userPswd2: '',
        phoneNumber: '',
        validateCode: ''
      }
    },

    // 发送手机验证码
    sendValidateCode(formName) {
      this.$nextTick(() => {

        this.$refs[formName].validate( async (valid) => {
          if (!valid) {
            this.$message({
              message: '请先完善表单信息',
              type: 'error'
            })
          } else {
            let {phoneNumber} = this.registerForm
            let res = await this.$API.member.reqSendValidateCode({phoneNumber})
            if(res.code === 200) {
              this.$message({
                message: '验证码发送成功',
                type: 'success'
              })
            }
          }
        })

      })

    }
  }
}
</script>

<style scoped>
.el-card {
  margin-top: 150px;
  margin-left: 550px;
  width: 800px;
  background: rgba(200, 200, 200, 0.2);
  backdrop-filter: blur(10px);
}

.el-row {
  margin-top: 10px;
}
</style>
