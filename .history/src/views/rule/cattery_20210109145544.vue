<template>
  <div class="rule">
    <div class="box">
      <div class="title">一、认证优势</div>
      <ul class="group dot">
        <li>与阿里云计算合作，加密保护猫舍信息，保证正规猫舍的权益</li>
        <li>全面筛查猫舍证书套牌、盗用图片等行为，对不良猫舍零容忍</li>
        <li>信息覆盖多种用户使用场景（微信小程序、支付宝小程序、APP、网站等）</li>
        <li>平台自主研发的推荐机制，可助优质猫舍获得搜索排名优势和精准流量扶持</li>
        <li>享有猫舍定制功能，包括排队预定、记录孕期、疫苗日历等功能</li>
        <li>宠物食品、用品、摄影等知名品牌的深度合作机会，节省猫舍日常开支</li>
      </ul>
    </div>
    <div class="box">
      <div class="title">二、认证标准</div>
      <ul class="group check">
        <li>
          接受
          <router-link :to="{ name: 'maooorule' }">猫巷平台服务协议</router-link>
        </li>
        <li>繁育人完成实名认证</li>
        <li>提交猫协会颁发的猫舍证书</li>
        <li>提交真实猫舍环境照片</li>
      </ul>
    </div>
    <div class="box">
      <div class="title">三、认证流程</div>
      <ul class="group number">
        <li>
          <img src="../../assets/images/rule/1.png" />
          繁育人提交申请信息
        </li>
        <li>
          <img src="../../assets/images/rule/2.png" />
          猫巷平台初审（1-3个工作日）
        </li>
        <li>
          <img src="../../assets/images/rule/3.png" />
          视频审核或线下考察
        </li>
        <li>
          <img src="../../assets/images/rule/4.png" />
          认证通过
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  created() {},

  mounted() {},

  methods: {},
}
</script>

<style scoped>
@import './css/rule.css';
</style>
