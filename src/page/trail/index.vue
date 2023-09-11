<template>
  <!-- 网页尾部 -->
  <div class="trail">
    <!--底部 开始-->
    <!-- 页尾 -->
    <div id="footer">
      <div class="service">
        <ul class="cle">
          <li>
            <img src="https://img.nala.com.cn/images/b2b/2019/index/zphy.png" />
            <h5>正品货源</h5>
            <p>可申请品牌授权、原装进口、中文标签</p>
          </li>
          <li>
            <img src="https://img.nala.com.cn/images/b2b/2019/index/zsfw.png" />
            <h5>专属服务</h5>
            <p>一对一分配服务、运营指导</p>
          </li>
          <li>
            <img src="https://img.nala.com.cn/images/b2b/2019/index/djys.png" />
            <h5>低价优势</h5>
            <p>基于10年供应链的深耕和建设</p>
          </li>
          <li>
            <a href="/cms/view/help.html?cmstypeid=b7b2c4d5-dd6d-4eca-b686-ceb67268a9a9&cmspageid=a1af937e-d85a-4403-b537-da8b0f31bb77" target="_blank" title="点击查看退货换货/退款须知">
              <img src="https://img.nala.com.cn/images/b2b/2019/index/shwy.png" />
              <h5>售后无忧</h5>
              <p>退货退款、退差价、开发票、产品资质等</p>
            </a>
          </li>
          <li>
            <img src="https://img.nala.com.cn/images/b2b/2019/index/jswl.png" />
            <h5>极速物流</h5>
            <p>仓库直发，闪电配送</p>
          </li>
        </ul>
      </div>
      <div class="ft_main tc">
        <div class="ft_nav">
          <a href="/support/about-us.html" target="_blank">关于我们</a><cite>/</cite> <a href="/support/about-us.html?#contact" target="_blank">联系我们</a><cite>/</cite> <a href="/support/job.html" target="_blank">人才招聘</a><cite>/</cite>
          <a href="/support/about-network.html" target="_blank">红人合作</a><cite>/</cite> <a href="/support/about-brand.html" target="_blank">品牌研发</a><cite>/</cite> <a href="/support/about-channels.html" target="_blank">多元渠道</a><cite>/</cite>
          <a href="/cms/view/help.html?cmstypeid=6230410f-0d2c-46a5-b22e-8c8e0b62d002&cmspageid=4968f7a4-562a-4c25-9fc7-8bb897592edd" target="_blank">用户协议</a>
        </div>
        <div class="ft_txt">
          <p class="gray">&copy;2023 娜拉 nala.com.cn 浙江娜拉化妆品有限责任公司 备案/许可证号 <a href="https://beian.miit.gov.cn" class="gray" target="_blank">浙ICP备19008037号-2</a> 增值电信业务许可证：浙B2-20191107</p>
        </div>
      </div>
    </div>
    <!--底部 结束-->
  </div>
</template>

<script>
export default {
  name: 'Trail'
}
</script>

<style lang="less" scoped>
/* 尾部 */

#footer {
  border-top: 1px solid #eee;
}
#footer .ft_main {
  background-color: #000;
  padding: 24px 0;
  text-align: center;
  color: #fff;
  position: relative;
}
#footer .ft_nav a {
  color: #fff;
}
#footer .ft_nav a:hover {
  text-decoration: underline;
}
#footer .ft_nav cite {
  margin: 0 5px;
}
#footer .ft_txt {
  padding: 12px 0 0;
  color: #999;
}
#footer .service {
  background-color: #fff;
  padding: 32px 0;
}
#footer .service ul {
  width: 1180px;
  margin: 0 auto;
}
#footer .service li {
  float: left;
  width: 224px;
  overflow: hidden;
}
#footer .service li img {
  width: 44px;
  height: 44px;
  float: left;
}
#footer .service li h5,
#footer .service li p {
  margin-left: 50px;
}
#footer .service li h5 {
  font-weight: 700;
  font-size: 14px;
}
#footer .service li p {
  color: #999;
}
#footer .service li:nth-child(1) {
  width: 280px;
}
#footer .service li:nth-child(4) {
  width: 290px;
}
#footer .service li:nth-child(5) {
  width: 162px;
}
</style>
