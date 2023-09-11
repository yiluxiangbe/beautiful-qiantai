<template>
  <!-- 网页头部 -->
  <div class="head">
    <!-- 顶部导航条 -->
    <!-- 顶部导航条 -->
    <div id="top_bar" class="top_bar">
      <div class="top_bar_bd cle">
        <ul class="bar_fl">
          <li class="topbar_user">
            您好，欢迎来到 <a href="/">NALA</a>！ 【 <router-link to="/login"><span v-if="!token" class="red">请登录</span></router-link
            ><s>&nbsp;</s><router-link to="/register">免费注册</router-link> 】
          </li>
        </ul>
        <ul class="bar_fr" id="topbar_nav">
          <li><router-link to="/shop">我的购物车</router-link></li>
          <li><a href="/purchase/reserveOrder/batchIndex">我的订货单</a></li>
          <li><a href="/purchase/favorite/list">我的收藏</a></li>
          <li><a href="/cms/list?mark=help" target="_blank">帮助中心</a></li>
          <li><a target="_blank" @click="tuichu">退出</a></li>
          <li class="more_menu">
            <a class="more_a" href="javascript:;"
              ><span class="red"><i class="iconfont"></i>手机逛NALA</span></a
            >
            <div class="more_bd">
              <div class="nala_app_pics cle">
                <div class="img">
                  <img src="https://img.nala.com.cn/images/b2b/2020/app-wx.png" alt="" />
                  <p>微信小程序</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 页头 -->
    <div id="header" class="header">
      <div class="hd_main cle">
        <div class="logo logo_2020">
          <a href="/" class="nala_logo"><img src="https://img.nala.com.cn/images/b2b/2020/logo-0307.gif" alt="娜拉美妆采销" /></a>
        </div>
        <div class="websearch">
          <i class="iconfont">&#xe81d;</i>
          <form action="/item/search" method="get" id="websearch" name="websearch">
            <input type="text" name="content" placeholder="请输入商品名称/条码/品牌/供应商名称" />
            <input type="hidden" name="bid" value="" />
            <button type="submit" @click="submitSearch">搜索</button>
          </form>
        </div>
        <div class="head_search_hot">
          <span>热搜榜：</span><a href="/item/search?content=润培">润培</a><a href="/item/search?content=磨砂膏">磨砂膏</a><a href="/item/search?content=防晒">防晒</a><a href="/item/search?content=面膜">面膜</a><a href="/item/search?content=洁面">洁面</a><a href="/item/search?content=卸妆">卸妆</a
          ><a href="/item/search?content=护手霜">护手霜</a><a href="/item/search?content=护肤套装">护肤套装</a><a href="/item/search?content=润唇">润唇</a><a href="/item/search?content=精华">精华</a>
        </div>
        <div class="head_right">
          <div class="head_cart" id="header_cart">
            <a class="tit" href="/pc/cart/index"
              ><b class="iconfont">&#xe817;</b>采购车<span><i class="iconfont">&#xe647;</i></span
              ><em class="cartnum">0</em></a
            >
            <div class="more_bd"></div>
          </div>
        </div>
      </div>
      <div class="hd_nav">
        <div class="hd_nav_bd cle">
          <div class="main_nav" id="main_nav">
            <div class="main_nav_link">
              <a href="/category/list"><i class="iconfont">&#xe81a;</i>所有分类</a>
            </div>
            <div class="main_cate" id="main_cate">
              <ul>
                <li class="first">
                  <h3>
                    <i class="iconImg"></i>
                    护肤
                  </h3>
                  <div class="bd">
                    <a href="/item/search.html?cid=C10000257" target="_balnk">面膜</a>
                    <a href="/item/search.html?cid=C10000266" target="_balnk">精华</a>
                    <a href="/item/search.html?cid=C10000263" target="_balnk">乳液</a>
                    <a href="/item/search.html?cid=C10000356" target="_balnk">眼霜</a>
                    <a href="/item/search.html?cid=C10000295" target="_balnk">唇膜</a>
                    <br /><a href="/item/search.html?cid=C10000270" target="_balnk">防晒</a>
                    <a href="/item/search.html?cid=C10000468" target="_balnk">套装</a>
                    <a href="/item/search.html?cid=C10000335" target="_balnk">喷雾</a>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconImg"></i>
                    彩妆
                  </h3>
                  <div class="bd">
                    <a href="/item/search.html?cid=C10000289" target="_balnk">隔离</a>
                    <a href="/item/search.html?cid=C10000387" target="_balnk">粉饼</a>
                    <a href="/item/search.html?cid=C10000402" target="_balnk">口红</a>
                    <a href="/item/search.html?cid=C10000417" target="_balnk">眼影</a>
                    <a href="/item/search.html?cid=C10000304" target="_balnk">腮红</a>
                    <br /><a href="/item/search.html?cid=C10000427" target="_balnk">遮瑕</a>
                    <a href="/item/search.html?cid=C10000382" target="_balnk">粉底</a>
                    <a href="/item/search.html?cid=C10000476" target="_balnk">高光</a>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconImg"></i>
                    个人护理
                  </h3>
                  <div class="bd">
                    <a href="/item/search.html?cid=C10000259" target="_balnk">沐浴</a>
                    <a href="/item/search.html?cid=C10000291" target="_balnk">磨砂</a>
                    <a href="/item/search.html?cid=C10000315" target="_balnk">发膜</a>
                    <a href="/item/search.html?cid=C10000306" target="_balnk">洗发</a>
                    <a href="/item/search.html?cid=C10000346" target="_balnk">漱口水</a>
                    <br /><a href="/item/search.html?cid=C10000368" target="_balnk">护手霜</a>
                    <a href="/item/search.html?cid=C10000373" target="_balnk">手膜</a>
                    <a href="/item/search.html?cid=C10000421" target="_balnk">身体乳</a>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconImg"></i>
                    应季热批
                  </h3>
                  <div class="bd">
                    <a href="/item/search.html?cid=10000259" target="_balnk">沐浴</a>
                    <a href="/item/search.html?cid=C10000291" target="_balnk">磨砂</a>
                    <a href="/item/search.html?cid=C10000270" target="_balnk">防晒</a>
                    <a href="/item/search.html?cid=C10000258" target="_balnk">洁面</a>
                    <a href="/item/search.html?cid=C10000257" target="_balnk">面膜</a>
                    <br /><a href="/item/search.html?cid=C10000421" target="_balnk">身体乳</a>
                    <a href="/item/search.html?cid=C10000422" target="_balnk">脱毛</a>
                    <a href="/item/search.html?cid=C10000503" target="_balnk">卸妆</a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="sub_cate" id="sub_cate">
              <textarea id="sub_cate_data">
                    <!-- 遍历分类开始 -->
                    <div class="bd">
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000503" target="_blank">卸妆</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000504" target="_blank">卸妆油</a><span>/</span>
                                <a href="/item/search.html?cid=C10000505" target="_blank">卸妆液</a><span>/</span>
                                <a href="/item/search.html?cid=C10000506" target="_blank">卸妆乳/卸妆啫喱</a><span>/</span>
                                <a href="/item/search.html?cid=C10000507" target="_blank">卸妆膏/卸妆霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000508" target="_blank">卸妆巾</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000260" target="_blank">化妆水</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000319" target="_blank">化妆水</a><span>/</span>
                                <a href="/item/search.html?cid=C10000335" target="_blank">喷雾</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000258" target="_blank">洁面</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000294" target="_blank">洁面乳</a><span>/</span>
                                <a href="/item/search.html?cid=C10000303" target="_blank">洁面皂</a><span>/</span>
                                <a href="/item/search.html?cid=C10000305" target="_blank">洁面啫喱/胶</a><span>/</span>
                                <a href="/item/search.html?cid=C10000310" target="_blank">洁面摩丝</a><span>/</span>
                                <a href="/item/search.html?cid=C10000298" target="_blank">面部去角质/磨砂</a><span>/</span>
                                <a href="/item/search.html?cid=C10000472" target="_blank">洁面粉</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000257" target="_blank">面膜</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000273" target="_blank">面膜贴</a><span>/</span>
                                <a href="/item/search.html?cid=C10000275" target="_blank">涂抹式面膜</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000263" target="_blank">乳液/面霜</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000279" target="_blank">乳液</a><span>/</span>
                                <a href="/item/search.html?cid=C10000280" target="_blank">面霜</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000266" target="_blank">面部精华</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000515" target="_blank">精油</a><span>/</span>
                                <a href="/item/search.html?cid=C10000534" target="_blank">冻干粉</a><span>/</span>
                                <a href="/item/search.html?cid=C10000348" target="_blank">精华</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000268" target="_blank">眼部护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000509" target="_blank">眼部精华</a><span>/</span>
                                <a href="/item/search.html?cid=C10000533" target="_blank"> 睫毛增长液 </a><span>/</span>
                                <a href="/item/search.html?cid=C10000356" target="_blank">眼霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000360" target="_blank">眼膜</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000513" target="_blank">T区护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000514" target="_blank">黑头贴</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000265" target="_blank">唇部护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000512" target="_blank">唇部磨砂</a><span>/</span>
                                <a href="/item/search.html?cid=C10000293" target="_blank">润唇膏</a><span>/</span>
                                <a href="/item/search.html?cid=C10000295" target="_blank">唇膜</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000270" target="_blank">防晒</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000316" target="_blank">防晒霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000314" target="_blank">防晒喷雾</a><span>/</span>
                                <a href="/item/search.html?cid=C10000318" target="_blank">晒后修复</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000468" target="_blank">护肤套装</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000469" target="_blank">套装</a><span>/</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="bd">
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000289" target="_blank">隔离</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000367" target="_blank">隔离</a><span>/</span>
                                <a href="/item/search.html?cid=C10000371" target="_blank">妆前</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000290" target="_blank">底妆</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000381" target="_blank">BB霜/CC霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000382" target="_blank">粉底液</a><span>/</span>
                                <a href="/item/search.html?cid=C10000384" target="_blank">粉底霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000387" target="_blank">粉饼</a><span>/</span>
                                <a href="/item/search.html?cid=C10000389" target="_blank">蜜粉/散粉</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000297" target="_blank">眉部</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000413" target="_blank">眉笔</a><span>/</span>
                                <a href="/item/search.html?cid=C10000415" target="_blank">眉粉</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000300" target="_blank">眼部</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000536" target="_blank"> 睫毛膏</a><span>/</span>
                                <a href="/item/search.html?cid=C10000417" target="_blank">眼影</a><span>/</span>
                                <a href="/item/search.html?cid=C10000418" target="_blank">眼线笔</a><span>/</span>
                                <a href="/item/search.html?cid=C10000419" target="_blank">眼线膏/胶</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000304" target="_blank">腮红</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000433" target="_blank">粉状腮红</a><span>/</span>
                                <a href="/item/search.html?cid=C10000406" target="_blank">腮红膏</a><span>/</span>
                                <a href="/item/search.html?cid=C10000516" target="_blank">液体腮红</a><span>/</span>
                                <a href="/item/search.html?cid=C10000517" target="_blank">唇颊两用</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000308" target="_blank">唇部</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000404" target="_blank">唇彩/唇蜜/唇釉</a><span>/</span>
                                <a href="/item/search.html?cid=C10000402" target="_blank">口红</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000425" target="_blank">修容</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000476" target="_blank">高光</a><span>/</span>
                                <a href="/item/search.html?cid=C10000426" target="_blank">修容</a><span>/</span>
                                <a href="/item/search.html?cid=C10000427" target="_blank">遮瑕</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000500" target="_blank">香氛/香水</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000501" target="_blank">香水</a><span>/</span>
                                <a href="/item/search.html?cid=C10000502" target="_blank">香氛</a><span>/</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="bd">
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000259" target="_blank">沐浴</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000282" target="_blank">沐浴露</a><span>/</span>
                                <a href="/item/search.html?cid=C10000291" target="_blank">身体去角质/磨砂</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000261" target="_blank">洗发/护发</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000306" target="_blank">洗发水</a><span>/</span>
                                <a href="/item/search.html?cid=C10000315" target="_blank">发膜/护发素</a><span>/</span>
                                <a href="/item/search.html?cid=C10000518" target="_blank">洗护套装</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000264" target="_blank">口腔护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000498" target="_blank">口腔喷雾</a><span>/</span>
                                <a href="/item/search.html?cid=C10000341" target="_blank">牙膏/牙粉</a><span>/</span>
                                <a href="/item/search.html?cid=C10000346" target="_blank">漱口水</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000269" target="_blank">手足护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000532" target="_blank">洗手液</a><span>/</span>
                                <a href="/item/search.html?cid=C10000368" target="_blank">护手霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000370" target="_blank">护足霜</a><span>/</span>
                                <a href="/item/search.html?cid=C10000373" target="_blank">手膜/足膜</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000271" target="_blank">身体护理</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000535" target="_blank">身体精油</a><span>/</span>
                                <a href="/item/search.html?cid=C10000486" target="_blank">磨砂膏</a><span>/</span>
                                <a href="/item/search.html?cid=C10000421" target="_blank">身体乳</a><span>/</span>
                                <a href="/item/search.html?cid=C10000422" target="_blank">脱毛</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000277" target="_blank">女性卫生</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000379" target="_blank">卫生用品</a><span>/</span>
                                <a href="/item/search.html?cid=C10000380" target="_blank">私密护理</a><span>/</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="bd">
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000441" target="_blank">美容仪器</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000528" target="_blank">美容电器</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000446" target="_blank">美容工具</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000520" target="_blank">化妆棉</a><span>/</span>
                                <a href="/item/search.html?cid=C10000530" target="_blank">洁面巾</a><span>/</span>
                                <a href="/item/search.html?cid=C10000521" target="_blank">面膜纸</a><span>/</span>
                                <a href="/item/search.html?cid=C10000522" target="_blank">痘痘贴</a><span>/</span>
                                <a href="/item/search.html?cid=C10000467" target="_blank">化妆工具清洁</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000442" target="_blank">彩妆工具</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000524" target="_blank">睫毛夹</a><span>/</span>
                                <a href="/item/search.html?cid=C10000519" target="_blank">眼睫毛胶水</a><span>/</span>
                                <a href="/item/search.html?cid=C10000523" target="_blank">粉扑/美妆蛋</a><span>/</span>
                                <a href="/item/search.html?cid=C10000529" target="_blank">棉签</a><span>/</span>
                                <a href="/item/search.html?cid=C10000454" target="_blank">化妆刷</a><span>/</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><a href="/item/search.html?cid=C10000445" target="_blank">美发工具</a>：</dt>
                            <dd>
                                <a href="/item/search.html?cid=C10000525" target="_blank">卷发棒</a><span>/</span>
                                <a href="/item/search.html?cid=C10000531" target="_blank">吹风机</a><span>/</span>
                                <a href="/item/search.html?cid=C10000465" target="_blank">束发带</a><span>/</span>
                            </dd>
                        </dl>
                    </div>
                    <!-- 遍历分类 end -->

                </textarea
              >
            </div>
          </div>
          <ul class="sub_nav cle" id="sub_nav">
            <li class="index"><a href="/">首页</a></li>
            <li class="supplier"><a href="/supplier/list">找商家</a></li>
            <li class="activity"><a href="/activity/center">活动中心</a></li>
            <li class="purchase"><a href="/item/itemFastPurchase.html">快速采购</a></li>
            <!--<li><a href="https://hz.nala.com.cn/" target="_blank">2020网络美博会</a></li>-->
            <li><a href="/support/about-us.html">关于我们</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {
      token: ''
    }
  },
  created() {
    this.token = localStorage.getItem('token')
  },
  methods: {
    submitSearch() {},
    tuichu() {
      // 删除token

      localStorage.removeItem('token')
    }
  }
}
</script>

<style lang="less" scoped>
/* 顶部logo，nav */
.top_bar {
  height: 30px;
  background-color: #f2f2f2;
  position: relative;
  z-index: 2002;
}
.top_bar .top_bar_bd {
  width: 1180px;
  margin: 0 auto;
  padding-top: 2px;
}
.top_bar .bar_fl {
  float: left;
}
.top_bar .bar_fr {
  float: right;
}
.top_bar li {
  float: left;
  position: relative;
  z-index: 2000;
  padding: 3px 0;
}
.top_bar li s {
  border-right: 1px solid #d4d4d4;
  margin: 0 8px 0 6px;
  text-decoration: none;
}
.top_bar li .gold {
  color: #b6976b;
}
.top_bar .bar_fr .iconfont {
  margin-right: 3px;
  vertical-align: 0;
}
.top_bar .bar_fr li {
  margin-left: 15px;
}
.top_bar li.more_menu {
  padding: 0;
  margin-top: -2px;
}
.top_bar li.more_menu .more_a {
  display: block;
  position: relative;
  z-index: 2001;
  border: 1px solid #f0f0f0;
  height: 20px;
  padding: 5px 8px 3px;
}
.top_bar li.more_menu a:hover {
  text-decoration: none;
}
.top_bar li.more_menu:hover .more_a {
  background-color: #fff;
  border-color: #eee;
  border-bottom-color: #fff;
  padding-bottom: 5px;
}
.top_bar li.more_menu .more_bd {
  position: absolute;
  top: 23px;
  right: 0;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  border: 1px solid #eee;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  transition: all 0.4s;
}
.top_bar li.more_menu:hover .more_bd {
  top: 30px;
  opacity: 1;
  visibility: visible;
}
.nala_app_pics {
  width: 120px;
  height: 102px;
  padding: 12px 0 2px;
  overflow: hidden;
  background: #fff;
}
.nala_app_pics .img {
  float: left;
  width: 80px;
  margin: 0 20px;
  text-align: center;
}
.nala_app_pics .img img {
  width: 80px;
  height: 80px;
  vertical-align: top;
}
/* 顶部样式 */
.header {
  background-color: #fff;
  position: relative;
}
.header .hd_main {
  width: 1180px;
  margin: 0 auto;
  height: 65px;
  padding: 26px 0 29px;
  position: relative;
  z-index: 10;
}
.header .logo {
  position: absolute;
  top: 25px;
  left: 50%;
  z-index: 100;
  margin-left: -590px;
}
.header .logo img {
  width: 328px;
  height: 70px;
  vertical-align: top;
}
.header .logo_2020 {
  top: 0;
}
.header .logo_2020 img {
  width: 320px;
  height: 120px;
}
.header .page_title {
  float: left;
  padding: 45px 0 0 350px;
}
.header .page_title h2 {
  font-size: 22px;
  font-weight: 700;
  color: #d4af22;
  line-height: 1;
}
.websearch {
  position: absolute;
  left: 390px;
  top: 30px;
  width: 510px;
  height: 36px;
  border: 2px solid #ef2635;
  background: #fff;
  overflow: hidden;
  border-radius: 5px;
  padding-left: 36px;
}
.websearch i {
  position: absolute;
  top: 6px;
  left: 14px;
  z-index: 2;
  color: #ccc;
  font-size: 16px;
}
.websearch form {
  height: 36px;
}
.websearch input {
  float: left;
  margin: 8px 0 0;
  width: 364px;
  height: 20px;
  line-height: 20px;
  color: #ccc;
  outline: 0;
  border: none;
  background: 0 0;
  font-size: 14px;
}
.websearch button {
  float: right;
  border: none;
  width: 104px;
  height: 100%;
  font-size: 18px;
  background: #ef2635;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
}
.websearch button:hover {
  background-color: #f8404d;
}
/* ------- */
.search_result {
  display: none;
  position: absolute;
  border: 1px solid #ef2635;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  margin: 30px 0 0 -10px;
  width: 415px;
  background-color: #fff;
  z-index: 2001;
  overflow-x: hidden;
}
.search_result li {
  padding: 5px 8px;
  cursor: pointer;
  background-color: #fff;
  color: #666;
}
.search_result li.on {
  background-color: #f4f4f4;
}
.head_search_hot {
  position: absolute;
  top: 78px;
  left: 390px;
  width: 480px;
  overflow: hidden;
}
.head_search_hot span {
  color: #999;
}
.head_search_hot a {
  margin: 0 8px 0 5px;
  color: #666;
}
.head_search_hot a.red,
.head_search_hot a:hover {
  color: #ef2635;
}
.header .head_right {
  position: absolute;
  right: 0;
  top: 30px;
}
.head_cart .tit {
  display: block;
  width: 116px;
  height: 34px;
  padding-top: 2px;
  position: relative;
  z-index: 10;
  background: #fff;
  border: 2px solid #ef2635;
  border-radius: 5px;
  font-size: 14px;
  line-height: 30px;
}
.head_cart .tit:hover {
  text-decoration: none;
}
.head_cart .tit b {
  color: #ef2635;
  margin: 0 7px 0 23px;
  font-size: 20px;
  cursor: pointer;
}
.head_cart .tit span {
  display: none;
}
.head_cart .tit span i {
  display: inline-block;
  width: 20px;
  height: 20px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.head_cart .tit em {
  position: absolute;
  right: 6px;
  top: -12px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-family: Arial;
  background-color: #ef2635;
  min-width: 18px;
  height: 24px;
  line-height: 24px;
  padding: 0 3px;
  border-radius: 50px;
  visibility: hidden;
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition: -webkit-transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
.head_cart .tit em.show {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  visibility: visible;
}
.head_cart .more_bd {
  display: none;
}
.hd_nav {
  background-color: #000;
  height: 40px;
}
.hd_nav .hd_nav_bd {
  width: 1180px;
  position: relative;
  z-index: 1990;
  margin: 0 auto;
}
.hd_nav .main_nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1991;
}
.main_nav_link {
  width: 220px;
  height: 40px;
  color: #fff;
  background-color: #ef2635;
  overflow: hidden;
}
.main_nav_link a {
  display: block;
  padding: 10px 10px;
  height: 22px;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
}
.main_nav_link a:hover {
  color: #fff;
  text-decoration: none;
}
.main_nav_link a i {
  margin-right: 15px;
  font-size: 14px;
}
.hd_nav .sub_nav {
  padding-left: 220px;
}
.hd_nav .sub_nav li {
  float: left;
  height: 40px;
  overflow: hidden;
  font-size: 15px;
  font-weight: 700;
  margin-left: 28px;
}
.hd_nav .sub_nav li.fr {
  float: right;
}
.hd_nav .sub_nav li a {
  display: inline-block;
  height: 20px;
  overflow: hidden;
  padding: 9px 10px 11px;
  color: #fff;
  position: relative;
}
.hd_nav .sub_nav li a:hover {
  text-decoration: none;
}
.hd_nav .sub_nav li a:after {
  display: block;
  font-size: 0;
  content: '\20';
  position: absolute;
  bottom: -5px;
  left: 50%;
  border: 7px solid #000;
  border-bottom: 7px solid #fff;
  margin-left: -7px;
  visibility: hidden;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.hd_nav .sub_nav li a.red:after,
.hd_nav .sub_nav li:hover a:after {
  visibility: visible;
  bottom: -2px;
}
.hd_nav .sub_nav li a i {
  position: absolute;
  top: 7px;
  right: 0;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ef2635;
  font-size: 0;
}

.main_cate {
  width: 220px;
  visibility: visible;
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 1999;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.main_cate ul {
  width: 220px;
  height: 410px;
  background: #fafafa;
  overflow: hidden;
  border-radius: 0 0 4px 4px;
}
.main_cate li {
  padding: 12px 0 12px 24px;
}
.main_cate li h3 {
  padding-top: 4px;
  font-weight: 700;
  font-size: 14px;
}
.main_cate li.current h3 {
  color: #ef2635;
}
.main_cate li .bd {
  margin-right: -10px;
  font-size: 0;
}
.main_cate li .bd a {
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  margin-right: 12px;
  margin-top: 5px;
}
.main_nav:hover .main_cate {
  opacity: 1;
  visibility: visible;
  height: 410px;
}
.main_cate li.current {
  background-color: #f2f2f2;
}
#sub_cate_data {
  display: none;
}
.sub_cate {
  position: absolute;
  top: 40px;
  left: 100px;
  opacity: 0;
  filter: Alpha(opacity=0);
  z-index: 1998;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 3px rgba(100, 100, 100, 0.2);
}
.sub_cate .bd {
  position: relative;
  width: 560px;
  height: 395px;
  overflow: hidden;
  background-color: #f2f2f2;
  display: none;
  line-height: 24px;
  padding-top: 15px;
}
.sub_cate .bd dl {
  padding: 5px;
}
.sub_cate .bd dt {
  float: left;
  width: 90px;
  text-align: right;
  font-weight: 700;
}
.sub_cate .bd dd {
  margin-left: 100px;
}
.sub_cate .bd dd a {
  display: inline-block;
}
.sub_cate .bd dd span {
  margin: 0 5px;
  color: #bbb;
}
</style>
