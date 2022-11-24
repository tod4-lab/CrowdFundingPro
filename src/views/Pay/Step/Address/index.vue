<template>
  <div>
    <el-table :data="address" style="cursor: pointer" @row-click="changeAddressId">

      <el-table-column width="50px" align="right">
        <template slot-scope="{row}">
            <el-radio v-model="addressId" :label="row.id">
              <span></span>
            </el-radio>
        </template>

      </el-table-column>

      <el-table-column align="center" label="收货人" width="200px" prop="receiveName">

      </el-table-column>

      <el-table-column align="center" label="电话" width="200px" prop="phoneNum">

      </el-table-column>

      <el-table-column align="center" label="地址" prop="address">

      </el-table-column>

      <el-table-column align="center" label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      addressId: 1,
      address: [
        {
          id: 1,
          receiveName: 'LongVacation',
          phoneNum: '15688872222',
          address: 'Harbin'
        },
        {
          id: 2,
          receiveName: 'LongVacation',
          phoneNum: '15688872222',
          address: 'Harbin'
        }
      ]
    }
  },
  methods: {
    changeAddressId(row) {
      this.addressId = row.id
    }
  }
}
</script>

<style scoped>

</style>
