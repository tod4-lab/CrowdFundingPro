<template>
  <div>
    <el-row>
      <el-col :offset="0" :span="6">
        <h3 style="color: #ff6600;margin-bottom: 30px">
          丨 项目及发起人信息</h3>
      </el-col>
    </el-row>

    <!--  项目信息  -->
    <el-row>
      <el-col :offset="1" style="text-align: left;">
        <h4>项目信息</h4>
        <el-divider/>

        <el-form label-width="120px">

          <el-form-item label="分类信息">
            <el-radio-group v-model="projectInfo.typeList">
              <el-radio :label="type.id" v-for="(type,index) in typeInfoList" :key="index">{{ type.name }}</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="标签">
            <el-row v-for="(tag, index) in tagInfoList"
                    :key="index">
              <el-col :span="1">
                <el-tag
                    type="info"
                    effect="plain">
                  {{ tag.name }}
                </el-tag>
              </el-col>

              <el-col :span="20" style="margin-left: 20px;">

                <el-checkbox-group v-model="projectInfo.tagList" size="small">
                  <el-checkbox style="margin-left: 1px !important;"
                               :label="tag1.id" border
                               v-for="(tag1,index) in tag.children"
                               :key="index">{{ tag1.name }}
                  </el-checkbox>
                </el-checkbox-group>

              </el-col>
            </el-row>

          </el-form-item>

          <el-form-item label="项目名称">

            <el-col :span="20">
              <el-input v-model="projectInfo.projectName"></el-input>
            </el-col>

          </el-form-item>

          <el-form-item label="一句话简介">
            <el-col :span="20">
              <el-input v-model="projectInfo.projectDescription" type="textarea"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="筹资金额（元）">
            <el-col :span="6">
              <el-input v-model="projectInfo.money"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="筹资天数（天）">
            <el-col :span="6">
              <el-input v-model="projectInfo.day"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="项目头图">
            <el-upload
                class="avatar-uploader"
                action="/uploadImg/project/uploadPic"
                :show-file-list="false"
                :headers="headers"
                :on-success="handleHeaderPicSuccess">
              <img
                  v-if="projectInfo.headerPicturePath" :src="projectInfo.headerPicturePath" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

          </el-form-item>

          <el-form-item label="项目详情">
            <el-upload
                ref="itemPic"
                action="/uploadImg/project/uploadPic"
                list-type="picture-card"
                :on-success="uploadItemPicSuccessHandle"
                :headers="headers"
                :auto-upload="true">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
              </div>
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>

        </el-form>

      </el-col>
    </el-row>

    <!--  发起人信息  -->
    <el-row>
      <el-col :offset="1" style="text-align: left">
        <h4>发起人信息</h4>
        <el-divider/>

        <el-form label-width="120px">

          <el-form-item label="自我介绍">
            <el-col :span="20">
              <el-input v-model="projectInfo.memberLaunchInfoVO.descriptionSimple" placeholder="一句话自我介绍，不超过40字"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="详细自我介绍">
            <el-col :span="20">
              <el-input v-model="projectInfo.memberLaunchInfoVO.descriptionDetail" type="textarea"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="联系电话">
            <el-col :span="6">
              <el-input v-model="projectInfo.memberLaunchInfoVO.phoneNum"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="客服电话">
            <el-col :span="6">
              <el-input v-model="projectInfo.memberLaunchInfoVO.serviceNum"></el-input>
            </el-col>
          </el-form-item>

        </el-form>

      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-button type="warning" @click="nextStep">下一步</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Step1",
  mounted() {
    this.getTageAndTypeInfoList()
  },
  data() {
    return {
      typeInfoList: [],
      tagInfoList: [],

      // 项目头图上传
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,


      // 文件上传请求头
      headers: {
        token: this.$store.getters.token
      }
    }
  },
  props: ['projectInfo'],
  methods: {
    nextStep() {
      let days = this.projectInfo.day
      this.projectInfo.deployDate = '2022-10-24'
      this.$emit('nextStep')
    },
    // 获取项目标签类别信息
    async getTageAndTypeInfoList() {
      let res = await this.$API.crowdFund.reqTypeInfo()
      if (res.code === 200) {
        this.typeInfoList = res.data
      }
      let res2 = await this.$API.crowdFund.reqTagInfo()
      if (res2.code === 200) {
        this.tagInfoList = res2.data
      }
    },

    handleRemove(file) {
      // 组件中删除
      this.$refs.itemPic.handleRemove(file)
      // 收集的信息中删除
      this.projectInfo.detailPictureList = this.projectInfo.detailPictureList.filter(item => {
        return file.url.includes(item);
      })
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    uploadItemPicSuccessHandle(res, file, fileList) {

      if (res.code === 200) {
        file.url = res.data
        this.projectInfo.detailPictureList.push(file.url)
      }

    },
    handleHeaderPicSuccess(res, file, fileList) {
      if (res.code === 200) {
        file.url = res.data
        this.projectInfo.headerPicturePath = file.url
      }
    }
  }
}
</script>

<style>

.el-upload input {
  display: none !important;;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
