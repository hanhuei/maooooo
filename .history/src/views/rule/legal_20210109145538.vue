<template>
  <div class="rule">
    <h1 class="title">法律声明</h1>
    <div class="date">
      最后更新：
      <strong>2020年9月3日</strong>
    </div>
    <h4 class="guide">目录</h4>
    <p>
      <strong>1.</strong>
      <strong><a href="#GO-1">权利归属</a></strong>
    </p>
    <p>
      <strong>2.</strong>
      <strong><a href="#GO-2">信息限制</a></strong>
    </p>
    <p>
      <strong>3.</strong>
      <strong><a href="#GO-3">责任限制</a></strong>
    </p>
    <p>
      <strong>4.</strong>
      <strong><a href="#GO-3">知识产权保护</a></strong>
    </p>
    <h4 id="GO-1">
      1
      <strong>权利归属</strong>
    </h4>
    <p>
      除非猫巷平台另行声明，猫巷平台推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视频、图表、色彩组合、版面设计等）的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归北京喵星人占领地球科技有限公司所有。未经该公司事先许可，任何人擅自使用上述内容和信息，可能会侵犯其权利，我们将会追究侵权者的法律责任。如有宣传、展示等任何使用需要，请您务必取得北京喵星人占领地球科技有限公司的事先许可。
    </p>
    <h4 id="GO-2">
      2
      <strong>信息限制</strong>
    </h4>
    <p>
      为维护猫巷平台的正常运行秩序及效率，未经北京喵星人占领地球科技有限公司许可，任何人不得自行、授权或协助第三方对猫巷平台及其系统进行地址扫描、网络端口扫描、操作系统探测等扫描及/或探测，或以包括通过机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像、上载、下载等方式擅自获取、使用猫巷平台内的任何内容。
    </p>
    <h4 id="GO-3">
      3
      <strong>信息限制</strong>
    </h4>
    <ul>
      <li>
        鉴于猫巷平台提供的信息发布服务属于电子公告牌（BBS）性质，猫巷平台上的店铺、商品信息（包括但不限于店铺名称、公司名称、联系人及联络信息、产品的描述和说明、相关图片、视频等）由用户自行提供并上传，由用户对其提供并上传的信息承担相应法律责任。猫巷平台服务提供者对此另有约定的，将在相关的协议或其他法律文本中与您进行明确。
      </li>
      <li>
        猫巷平台转载的作品出于传递更多信息之目的，并不意味我们赞同其观点或已经证实其内容的真实性。
      </li>
    </ul>
    <h4 id="GO-3">
      4
      <strong>知识产权保护</strong>
    </h4>
    <p>
      我们尊重知识产权，反对并打击侵犯知识产权的行为。知识产权权利人若认为猫巷平台内容（包括但不限于猫巷平台用户发布的商品信息）侵犯其合法权益的，可以通过客服进行投诉，我们将在收到知识产权权利人合格通知后依据相应的法律法规以及平台规则及时处理。
    </p>
    <div class="footer">
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
        京ICP备20002069号
      </a>
      <img src="../../assets/images/icp.png" />
      北京喵星人占领地球科技有限公司
      <div class="icp">
        <i>&copy;</i>
        2020 Maooo, Inc. All rights reserved.
      </div>
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
.footer {
  padding: 0 40px;
  margin-top: 100px;
  font-size: 28px;
}

.footer a {
  color: #4a383a;
}

.footer i {
  margin-right: 5px;
  font-size: 44px;
}

.footer .icp {
  display: flex;
  align-items: center;
}

.footer img {
  vertical-align: middle;
}

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

h6 {
  margin: 0 0 30px;
  font-size: 28px;
  font-weight: bold;
}

h6 strong {
  margin-left: 5px;
}

h4 {
  margin: 50px 0 30x;
  font-size: 34px;
}

h4 strong {
  margin-left: 5px;
  font-size: 34px;
}

ul {
  padding-left: 40px;
  margin-bottom: 30px;
  font-size: 28px;
}

ul > li {
  margin-bottom: 20px;
  font-weight: 500;
  list-style-type: disc;
}

.underline {
  text-decoration: underline;
}

ul > li:last-child {
  margin-bottom: 0;
}
</style>
