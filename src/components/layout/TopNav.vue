<template>
  <div class="navbar">
    <el-row>
      <el-col :span="10" :offset="2">
        <div @click="toHome">
          <div class="navbar-brand">
            <a>尚筹网-创意产品众筹平台</a>
          </div>
        </div>
      </el-col>

      <el-col :span="3" :offset="9">
        <div class="right-menu">
          <div style="margin-top: 16px" v-show="!$store.getters.token">

            <a @click="toLogin">登录</a>

            <a @click="toRegister">注册</a>

            <a>|</a>
            <a href="admin-login.html">管理员入口</a>

          </div>

          <el-dropdown style="margin-top: 7px" class="avatar-container" trigger="click" v-show="$store.getters.token">
            <div class="avatar-wrapper">
              <img src="@/assets/images/avatar.gif" class="user-avatar"/>
              <i class="el-icon-caret-bottom"/>
            </div>

            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <router-link to="/personCenter">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided @click.native="logoutHandle">
                <span style="display:block;">Log Out</span>
              </el-dropdown-item>

            </el-dropdown-menu>

          </el-dropdown>

        </div>
      </el-col>

    </el-row>
  </div>


</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "TopNav",
  mounted() {
  },
  data() {
    return {}
  },
  methods: {
    toRegister() {
      this.$router.push({path: '/register'})
    },
    toHome() {
      this.$router.replace({path: '/'})
    },
    toLogin() {
      this.$router.push({path: '/login'})
    },
    async logoutHandle() {
      let res = await this.$store.dispatch('member/logout')
      if (res.code === 200) {
        this.$message({
          message: '退出成功',
          type: 'success'
        })
        await this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #1e1e1e;
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  z-index: 99;
}

.navbar-brand {
  color: #848484;
  font-size: 25px;
  padding-top: 10px;
}

.navbar-brand :hover {
  color: #b6b1b1;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.avatar-wrapper {

}

.right-menu {
}

.right-menu a {
  margin-left: 7px;
  color: #848484;
}

.right-menu a:hover{
  color: #b6b1b1;
}

.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

</style>
