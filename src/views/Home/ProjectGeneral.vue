<template>
  <div class="project-detail">
    <el-row>
      <el-col :span="6" :offset="2" v-for="(item, index) in proInfoList" :key="index">

        <el-row>
          <el-col style="text-align: center;margin-top: 10px">
            <img class="img-circle" :src="item.src" alt="Generic placeholder image" style="width: 140px; height: 140px;">
          </el-col>
        </el-row>

        <el-row style="text-align: center;margin-top: 10px">
          <el-col>
            <h2>{{item.name}}</h2>
          </el-col>
        </el-row>

        <el-row style="text-align: center;margin-top: 10px">
          <el-col :span="24">
            <p>{{item.title}}</p>
          </el-col>
        </el-row>

        <el-row style="text-align: center;margin-top: 10px">
          <el-col>
            <el-button>项目详情</el-button>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProjectGeneral",
  data() {
    return {
      proInfoList: [
        {
          src: require('@/assets/images/p1.jpg'),
          name: '智能高清监控机器人',
          title: '可爱的造型，摄像安防远程互联的全能设计，让你随时随地守护您的家人，陪伴你的生活。'
        },
        {
          src: require('@/assets/images/p2.jpg'),
          name: 'NEOKA智能手环',
          title: '要运动更要安全，这款、名为“蝶舞”的NEOKA-V9100智能运动手环为“安全运动而生”'
        },
        {
          src: require('@/assets/images/p3.png'),
          name: '驱蚊扣',
          title: '随处使用的驱蚊纽扣，解决夏季蚊虫问题。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-detail {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
</style>
