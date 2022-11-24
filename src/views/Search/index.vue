<template>
  <div class="search">
    <el-row>
      <search-selector/>
    </el-row>

    <el-row>
      <el-col :span="18" style="margin-left: 250px;margin-top: 50px">
        <project-card :projectInfoList="projectInfoList"/>
      </el-col>
    </el-row>

    <el-col :span="18" :offset="3"
            style="margin-top: 20px;margin-bottom: 40px">
        <el-pagination
            align="center"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </el-col>


  </div>
</template>

<script>
import SearchSelector from "@/views/Search/SearchSelector";

export default {
  name: "Search",
  components: {
    SearchSelector
  },
  mounted() {
    this.getProjectCardInfoList()
  },
  methods: {
    async getProjectCardInfoList() {
      let {pageIndex, pageSize} = this
      let res = await this.$API.project.reqGetProjectCardInfoList({pageIndex, pageSize})
      if(res.code === 200) {
        this.projectInfoList = res.data.records
      }
    }
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 16,
      projectInfoList: [],
      projectInfoList1: [
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-2.gif'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '2999',
          totalMoney: '40000'
        },
        {
          src: require('@/assets/images/product-3.png'),
          projectName: '小熊猫鱼眼全景安防摄像机',
          money: '20000',
          date: '2022-10-23',
          count: '1999',
          totalMoney: '70000'
        },
        {
          src: require('@/assets/images/product-4.jpg'),
          projectName: '一款精致的机械表',
          money: '20000',
          date: '2022-10-23',
          count: '3999',
          totalMoney: '20000'
        },
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-2.gif'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '2999',
          totalMoney: '40000'
        },
        {
          src: require('@/assets/images/product-3.png'),
          projectName: '小熊猫鱼眼全景安防摄像机',
          money: '20000',
          date: '2022-10-23',
          count: '1999',
          totalMoney: '70000'
        },
        {
          src: require('@/assets/images/product-4.jpg'),
          projectName: '一款精致的机械表',
          money: '20000',
          date: '2022-10-23',
          count: '3999',
          totalMoney: '20000'
        },
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-2.gif'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '2999',
          totalMoney: '40000'
        },
        {
          src: require('@/assets/images/product-3.png'),
          projectName: '小熊猫鱼眼全景安防摄像机',
          money: '20000',
          date: '2022-10-23',
          count: '1999',
          totalMoney: '70000'
        },
        {
          src: require('@/assets/images/product-4.jpg'),
          projectName: '一款精致的机械表',
          money: '20000',
          date: '2022-10-23',
          count: '3999',
          totalMoney: '20000'
        },
        {
          src: require('@/assets/images/product-1.jpg'),
          projectName: '酷驰触控龙头，智享厨房黑科技',
          money: '20000',
          date: '2022-10-23',
          count: '999',
          totalMoney: '60000'
        },
        {
          src: require('@/assets/images/product-4.jpg'),
          projectName: '一款精致的机械表',
          money: '20000',
          date: '2022-10-23',
          count: '3999',
          totalMoney: '20000'
        },
      ]
    }
  }
}
</script>

<style scoped>
.search {
  margin-top: 130px;
}
</style>
