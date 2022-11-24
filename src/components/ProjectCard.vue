<template>
  <el-row style="margin-left: 30px;">

    <el-col :span="24">

      <el-row v-for="row in Math.ceil(projectInfoList.length / 4)" :key="row">
        <el-col :span="6" v-for="(projectInfo,index) in projectInfoList.slice(4 * (row-1), 4 * row)" :key="index">

          <el-row>
            <!--        项目头图        -->
            <el-row>
              <el-col :span="20">

                <el-image
                    @click="toProjectDetail(projectInfo.id)"
                    :src="projectInfo.headerPicturePath"
                    style="width: 290px; height: 180px;cursor: pointer"
                    fit="fill"
                >
                </el-image>

              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20">

                <el-card>
                  <a class="title">{{projectInfo.projectName}}</a>
                  <br/>
                  {{projectInfo.projectDescription}}
                  <el-row style="margin-top: 10px">

                    <el-col :span="10">
                      <i class="el-icon-loading"></i>
                      ${{projectInfo.money}}
                    </el-col>

                    <el-col :span="13" :offset="1">
                      <i class="el-icon-date"></i>
                      {{projectInfo.deployDate}}
                    </el-col>

                  </el-row>

                  <el-progress :text-inside="true" :stroke-width="24"
                               style="margin-top: 10px"
                               :percentage="Math.floor(projectInfo.supportMoney / projectInfo.money * 100)" status="success"></el-progress>
                  <el-row style="margin-top: 10px">
                    <el-col :span="10">
                      <i class="el-icon-user"></i>
                      {{projectInfo.supporter}}
                    </el-col>

                    <el-col :span="10" :offset="4">
                      <i class="el-icon-star-off" style="float: right"></i>
                    </el-col>
                  </el-row>

                </el-card>

              </el-col>
            </el-row>

          </el-row>

        </el-col>

      </el-row>

    </el-col>

  </el-row>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ['projectInfoList'],
  data() {
    return {
    }
  },
  methods: {
    toProjectDetail(projectId) {
      this.$router.push({path: '/projectDetail', query: {'projectId' : projectId}})
    }
  }
}
</script>

<style scoped>

</style>
