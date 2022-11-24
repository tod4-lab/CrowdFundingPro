<template>
  <el-row class="project-show">
    <el-col :span="18" style="margin-left: 250px;">

      <el-row>
        <div id="mainBox">
          <div class="mHd" style="">

            <div class="path">
              <router-link :to="{path: '/search'}">>更多</router-link>
            </div>

            <div style="float: left">
              <h3>
                {{project.type}} <small style="color:#FFF;">{{project.itemType}}</small>
              </h3>
            </div>

          </div>
        </div>
      </el-row>

      <project-card :projectInfoList="project.projectInfoList"/>

    </el-col>

  </el-row>

</template>

<script>
export default {
  name: "ProjectShow",
  data() {
    return {

    }
  },
  props: ['project']
}
</script>

<style scoped>
h3 {
  font-weight: bold;
}


/* 列表页 */
#mainBox {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  overflow: hidden;
}

#mainBox .mHd {
  border-bottom: 2px solid #09c;
  height: 30px;
  line-height: 30px;
}

#mainBox .mHd h3 {
  display: initial;
  *display: inline;
  zoom: 1;
  padding: 0 15px;
  background: #09c;
  color: #fff;
}

#mainBox .mHd h3 span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

#mainBox .path {
  float: right;
}
#mainBox .path a{
  text-decoration: none;
  color: #0099cc;
}

h3.break {
  font-size: 16px;
  display: block;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

h3.break > a {
  text-decoration: none;
}

.title {
  color: #008cce;
  text-decoration: none;
  font-weight: 800;
}
.project-show {

}
</style>
