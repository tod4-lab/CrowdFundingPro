<template>
  <el-col :span="18" style="margin-left: 250px;">
    <el-card>
      <el-col :offset="1">
        <el-row style="margin-top: 15px;">
          分类:
          <a v-for="(type, index) in typeList"
             :class="searchIndexList.typeIndex === index ? 'active' : ''"
             @click="searchIndexList.typeIndex = index"
             :key="index">
            {{ type }}
          </a>

        </el-row>

        <el-row style="margin-top: 15px;">
          状态:
          <a v-for="(state, index) in stateList"
             :class="searchIndexList.stateIndex === index ? 'active' : ''"
             @click="searchIndexList.stateIndex = index"
             :key="index">
            {{ state }}
          </a>

        </el-row>

        <el-row style="margin-top: 15px;margin-bottom: 25px;">
          排序:
          <a v-for="(order, index) in orderBy"
             :class="searchIndexList.orderIndex === index ? 'active' : ''"
             @click="searchIndexList.orderIndex = index"
             :key="index">
            {{ order }}
          </a>

        </el-row>
      </el-col>
    </el-card>
    <el-card style="padding-bottom: 14px;background-color: #f4f4f4">

      <el-col :span="5" :offset="1">
        <h3>{{ count }}</h3>
      </el-col>

      <el-col :span="6" :offset="12">
        <el-col :span="15">
          <el-input></el-input>
        </el-col>

        <el-col :span="2" :offset="1">
          <el-button type="primary">搜索</el-button>
        </el-col>

      </el-col>

    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "SearchSelector",
  data() {
    return {
      typeList: [
        '全部',
        '科技',
        '设计',
        '公益',
        '农业',
        '文化'
      ],
      stateList: [
        '全部',
        '即将开始',
        '众筹中',
        '众筹成功',
      ],
      orderBy: [
        '综合排序',
        '最新上线',
        '金额最多',
        '支持最多',
      ],
      searchIndexList: {
        typeIndex: 0,
        stateIndex: 0,
        orderIndex: 0,
      },
      count: 10
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
  margin: auto 8px;
}

.active {
  color: #eeac6c;
  border: #eeac6c 1px solid;
  padding: 3px;
  /*font-weight: 600;*/
  border-radius: 5px;
}

h3 {
  color: #eeac6c;
}
</style>
