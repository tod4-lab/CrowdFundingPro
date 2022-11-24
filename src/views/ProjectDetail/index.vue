<template>
  <div class="project-detail">

    <el-row>
      <el-col :span="16" :offset="4">

        <el-card style="background-color: #eeeeee;padding-bottom: 20px">

          <el-col :offset="1" :span="20">
            <p style="margin-bottom: 20px;font-size: 25px">{{ projectInfo.projectName }}</p>
            <p>{{ projectInfo.projectDescription }}</p>
          </el-col>

        </el-card>
      </el-col>

      <el-row>
        <el-col :span="10" :offset="4" style="margin-top: 40px">
          <el-image :src="projectInfo.projectDetailBodyPic"
                    style="height: auto;width: 100%"
                    fit="fill">

          </el-image>
        </el-col>

        <el-col :span="5" :offset="1" style="margin-top: 40px">
          <el-card>
            <el-row>
              <el-tag type="success" effect="dark">
                <i class="el-icon-s-marketing"></i>
                众筹中
              </el-tag>
            </el-row>

            <el-col style="font-size: 25px">
              已筹资金：${{ projectInfo.money }}
            </el-col>

            <el-row>
              <el-col :span="16">
                目标金额 ： 1000.00
              </el-col>

              <el-col :span="8">
                达成 ： 60%
              </el-col>
            </el-row>

            <el-progress :percentage="100" status="success"></el-progress>

            <el-row>
              已有629人支持该项目
            </el-row>

            <el-row>
              <el-col :span="15">
                <el-button type="warning" size="medium">立即支持</el-button>
              </el-col>
            </el-row>

            <el-row>
              <el-divider/>
            </el-row>

            <el-row>

              <el-col :span="6">
                <el-image
                    style="width: 90px;height: 90px"
                    :src="projectInfo.avatar"/>
              </el-col>

              <el-col :span="18">

                <el-row>

                  <el-col :span="18" :offset="1">
                    <h3>{{ memberInfo.userName }}</h3>
                  </el-col>

                  <el-col :span="2">
                    <el-tag type="success" size="mini" effect="dark">
                      已认证
                    </el-tag>
                  </el-col>

                </el-row>

                <el-row>
                  <el-col :span="22" :offset="1">
                    &nbsp;&nbsp;{{ memberInfo.descriptionDetail }}
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="22" :offset="1">
                    客服电话 {{memberInfo.serviceNum}}
                  </el-col>
                </el-row>

              </el-col>

            </el-row>

          </el-card>

          <!--    return 模块      -->
          <div style="margin-top: 30px" v-for="(returnInfo, index) in projectInfo.returnVOList" :key="index">
            <el-card style="background-color: #eeeeee">

              <el-row>
                <el-col :span="12" style="font-size: 25px">
                  ￥{{returnInfo.supportMoney}}
                </el-col>
                <el-col :span="10">
                  限额{{returnInfo.count}}位,剩余{{returnInfo.count - returnInfo.purchase}}位
                </el-col>
              </el-row>

            </el-card>
            <el-card >

              <el-row>
                配送费用：{{returnInfo.freight}}
              </el-row>

              <el-row>
                预计发放时间：项目筹款成功后的{{returnInfo.returnDate}}天内
              </el-row>

              <el-row>
                <el-col>
                  <el-button type="warning">支持</el-button>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="24">
                  &nbsp;&nbsp;&nbsp;&nbsp;{{returnInfo.content}}
                </el-col>
              </el-row>

            </el-card>
          </div>


        </el-col>
      </el-row>

    </el-row>

  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  mounted() {
    this.getProjectDetailInfo()
  },
  methods: {
    async getProjectDetailInfo() {
      let res = await this.$API.project.reqGetProjectDetailInfo(this.projectId)
      if(res.code === 200) {
        this.projectInfo = res.data
      }
    }
  },
  data() {
    return {
      projectId: this.$route.query.projectId,
      projectInfo: {
        projectName: '酷驰触控龙头，智享厨房黑科技',
        projectDescription: '智能时代，酷驰触控厨房龙头，让煮妇解放双手，触发更多烹饪灵感，让美味信手拈来。',
        projectDetailBodyPic: require('@/assets/images/product_detail_body.jpg'),
        money: 50000.00,
        avatar: require('@/assets/images/services-box2.jpg'),

        returnList: [
          {
            supportMoney: '1',
            signalPurchase: '1',
            count: 99,
            purchase: 9,
            returnDate: '7',
            freight: '10',
            content: '感谢您的支持，在众筹开始后，您将以79元的优惠价格获得“遇见彩虹?”智能插座一件（参考价208元）。'
          },
          {
            supportMoney: '100',
            signalPurchase: '1',
            count: 99,
            purchase: 9,
            returnDate: '7',
            freight: '10',
            content: '感谢您的支持，在众筹开始后，您将以79元的优惠价格获得“遇见彩虹?”智能插座一件（参考价208元）。'
          }
        ]
      },
      memberInfo: {
        userName: '福建省南安厨卫',
        descriptionSimple: '',
        descriptionDetail: '酷驰是一家年轻的厨卫科技公司，我们有一支朝气蓬勃，有激情、有想法、敢实践的团队。',
        serviceNum: '0595-86218855'
      }
    }
  }
}
</script>

<style scoped>
.project-detail {
  margin-top: 100px;
}
</style>
