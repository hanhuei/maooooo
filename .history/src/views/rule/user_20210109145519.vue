<template>
  <div class="rule">
    <h1 class="title">猫巷注册协议</h1>
    <div class="date">
      最后更新：
      <strong>2020年9月3日</strong>
    </div>
    <h4 class="guide">目录</h4>
    <p>
      <strong>1.</strong>
      <strong><router-link :to="{ name: 'maooorule' }">猫巷平台服务协议</router-link></strong>
    </p>
    <p>
      <strong>2.</strong>
      <strong><router-link :to="{ name: 'privacyrule' }">隐私权政策</router-link></strong>
    </p>
    <p>
      <strong>3.</strong>
      <strong><router-link :to="{ name: 'legalrule' }">法律声明</router-link></strong>
    </p>
    <p>
      您在申请注册流程中点击同意前，应当认真阅读以下协议。
      <strong class="underline">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</strong>
    </p>
    <ul>
      <li>与您约定免除或限制责任的条款</li>
      <li>与您约定法律适用和管辖的条款</li>
      <li>其他以粗体下划线标识的重要条款</li>
    </ul>
    <p>如您对协议有任何疑问，可向平台客服咨询。</p>
    <p>
      <strong>【特别提示】</strong>
      当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与猫巷发生争议的，适用
      <strong>《猫巷平台服务协议》</strong>
      处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
    </p>
    <p class="underline">
      阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。
    </p>
    <div class="date">感谢您使用猫巷！</div>
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
.rule {
  padding: 40px;
}

.title {
  margin: 30px 0;
  font-size: 70px;
  font-weight: normal;
}

.date {
  margin-bottom: 30px;
  font-size: 28px;
}

.guide {
  margin: 50px 0 30px 0;
  font-size: 34px;
  font-weight: normal;
}

p {
  margin-bottom: 30px;
  font-size: 28px;
  line-height: 40px;
}

strong {
  font-size: 28px;
  font-weight: blod;
}

a {
  font-size: 28px;
  color: #7eaff8;
}

p strong a {
  margin-left: 5px;
}

ul {
  padding-left: 40px;
  margin-bottom: 30px;
  font-size: 28px;
}

ul > li {
  margin-bottom: 20px;
  text-decoration: underline;
  list-style-type: disc;
}

.underline {
  text-decoration: underline;
}

ul > li:last-child {
  margin-bottom: 0;
}
</style>
