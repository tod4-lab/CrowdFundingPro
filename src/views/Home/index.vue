<template>

  <div>
    <!--  轮播图  -->
    <ContainerList class="homeContainer"/>

    <ProjectDetail class="projectDetail"/>

    <ProjectShow class="projectShow" :project="project" v-for="(project, index) in projectsList" :key="index"/>

  </div>

</template>

<script>
// @ is an alias to /src
import ContainerList from "@/views/Home/ContainerList";
import ProjectDetail from "@/views/Home/ProjectGeneral";
import ProjectShow from "@/views/Home/ProjectShow";
export default {
  name: 'Home',
  components: {
    ContainerList,
    ProjectDetail,
    ProjectShow
  },
  data() {
    return {
      projectsList: [
        {
          type: '科技',
          itemType: '开启智慧未来',
          projectInfoList: [
            {
              headerPicturePath: require('@/assets/images/product-1.jpg'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '999',
              money: '60000'
            },
            {
              headerPicturePath: require('@/assets/images/product-2.gif'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '2999',
              money: '40000'
            },
            {
              headerPicturePath: require('@/assets/images/product-3.png'),
              projectName: '小熊猫鱼眼全景安防摄像机',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '1999',
              money: '70000'
            },
            {
              headerPicturePath: require('@/assets/images/product-4.jpg'),
              projectName: '一款精致的机械表',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '3999',
              money: '20000'
            }
          ]
        },
        {
          type: '设计',
          itemType: '创意改变生活',
          projectInfoList: [
            {
              headerPicturePath: require('@/assets/images/product-1.jpg'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '999',
              money: '60000'
            },
            {
              headerPicturePath: require('@/assets/images/product-2.gif'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '2999',
              money: '40000'
            },
            {
              headerPicturePath: require('@/assets/images/product-3.png'),
              projectName: '小熊猫鱼眼全景安防摄像机',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '1999',
              money: '70000'
            },
            {
              headerPicturePath: require('@/assets/images/product-4.jpg'),
              projectName: '一款精致的机械表',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '3999',
              money: '20000'
            }
          ]
        },
        {
          type: '科技',
          itemType: '开启智慧未来',
          projectInfoList: [
            {
              headerPicturePath: require('@/assets/images/product-1.jpg'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '999',
              money: '60000'
            },
            {
              headerPicturePath: require('@/assets/images/product-2.gif'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '2999',
              money: '40000'
            },
            {
              headerPicturePath: require('@/assets/images/product-3.png'),
              projectName: '小熊猫鱼眼全景安防摄像机',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '1999',
              money: '70000'
            },
            {
              headerPicturePath: require('@/assets/images/product-4.jpg'),
              projectName: '一款精致的机械表',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '3999',
              money: '20000'
            }
          ]
        },
        {
          type: '科技',
          itemType: '开启智慧未来',
          projectInfoList: [
            {
              headerPicturePath: require('@/assets/images/product-1.jpg'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '999',
              money: '60000'
            },
            {
              headerPicturePath: require('@/assets/images/product-2.gif'),
              projectName: '酷驰触控龙头，智享厨房黑科技',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '2999',
              money: '40000'
            },
            {
              headerPicturePath: require('@/assets/images/product-3.png'),
              projectName: '小熊猫鱼眼全景安防摄像机',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '1999',
              money: '70000'
            },
            {
              headerPicturePath: require('@/assets/images/product-4.jpg'),
              projectName: '一款精致的机械表',
              supportMoney: '20000',
              date: '2022-10-23',
              supporter: '3999',
              money: '20000'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.homeContainer {
  margin-top: 80px;
}
.projectShow {
  margin-top: 30px
}
.projectDetail {
  margin: 70px 140px;
}
</style>
