<template>
  <div>
    <el-row>

      <el-col :offset="0" :span="6">
        <h3 style="color: #ff6600;margin-bottom: 30px">
          丨 回报设置</h3>
      </el-col>

      <el-col :span="4" :offset="14" style="padding-top: 13px">
        <el-button type="primary" @click="addOrEditHandle()">添加</el-button>
      </el-col>

    </el-row>

    <el-row style="margin-bottom: 20px">
      <el-col :offset="1" :span="22">

        <el-table
            :header-cell-style="{'text-align':'center'}"
            :data="projectInfo.returnVOList"
            style="width: 100%"
            border
            :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column
              align="center"
              type="index"
              label="序号"
              sortable
              width="110px">
          </el-table-column>

          <el-table-column
              align="center"
              prop="supportMoney"
              label="支付金额"
              sortable
              width="110px">
          </el-table-column>

          <el-table-column
              align="center"
              prop="count"
              label="名额">
          </el-table-column>

          <el-table-column
              align="center"
              prop="signalPurchase"
              label="单笔限购">
          </el-table-column>

          <el-table-column
              align="center"
              prop="content"
              label="回报内容">
          </el-table-column>

          <el-table-column
              align="center"
              prop="returnDate"
              label="回报时间">
          </el-table-column>

          <el-table-column
              align="center"
              prop="freight"
              label="运费">
          </el-table-column>

          <el-table-column
              align="center"
              label="操作">

            <template slot-scope="{$index}">
              <el-button type="primary" @click="addOrEditHandle($index)" icon="el-icon-edit" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="deleteHandle($index)" circle></el-button>
            </template>

          </el-table-column>

        </el-table>

      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-button type="warning" @click="preStep">上一步</el-button>
        <el-button type="warning" @click="nextStep">下一步</el-button>
      </el-col>
    </el-row>

    <el-dialog title="回报信息添加" :visible.sync="dialogFormVisible">
      <el-form :model="returnForm">

        <el-form-item label="支付金额" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.supportMoney" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="名额" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.count" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="单笔限购" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.signalPurchase" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="回报内容" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.content" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="回报时间" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.returnDate" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="运费" label-width="120px">
          <el-col :span="10">
            <el-input v-model="returnForm.freight" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelHandle">取 消</el-button>
        <el-button type="primary" @click="addOrEditReturnInfoHandle()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Step2",
  data() {
    return {
      dialogFormVisible: false,
      returnForm: {
        type: '',
        supportMoney: '',
        content: '',
        count: '',
        signalPurchase: '',
        purchase: '',
        freight: '',
        invoice: '',
        returnDate: '',
        describePicPath: ''
      },
      curIndex: ''
    }
  },
  props: ['projectInfo'],
  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
    preStep() {
      this.$emit('preStep')
    },
    formatter(row, column) {
      return row.address;
    },
    // 模态框取消回调
    cancelHandle() {
      this.dialogFormVisible = false
      this.returnForm = {
        type: '',
        supportMoney: '',
        content: '',
        count: '',
        signalPurchase: '',
        purchase: '',
        freight: '',
        invoice: '',
        returnDate: '',
        describePicPath: ''
      }
      this.curIndex = ''
    },
    addOrEditHandle(index) {
      if(index !== undefined) {
        this.curIndex = index
        this.returnForm = this.projectInfo.returnVOList[index]
      }
      this.dialogFormVisible = true
    },
    addOrEditReturnInfoHandle() {
      if(this.curIndex === '') {
        this.projectInfo.returnVOList.push(this.returnForm)
        this.cancelHandle()
      } else {
        this.projectInfo.returnVOList[this.curIndex] = this.returnForm
        this.cancelHandle()
      }

    },

    deleteHandle(index) {
      this.projectInfo.returnVOList.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
