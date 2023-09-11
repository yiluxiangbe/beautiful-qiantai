<template>
  <div class="index">
    <!-- 头部 -->
    <!-- 导入全局组件 -->
    <Head></Head>
    <!--Banner切换-->
    <div class="index-banner">
      <div class="index-slide" id="index-slide">
        <ul>
          <li>
            <!-- <a target="_blank" href="https://www.nala.com.cn/product-I30090121.html?actionType=BANNER&actionContent=41431d9d19084ba3660a73353628c0f3" title="润培 新品重磅上市"></a> -->
            <!-- 轮播图 -->
            <div class="floorBanner">
              <div class="swiper-container" id="floor1Swiper" ref="mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="carousel in bannerList" :key="carousel.id">
                    <img :src="carousel.imgUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </li>
        </ul>
        <div class="trigger-box">&nbsp;</div>
      </div>

      <!--更改begin-->

      <div class="right_part">
        <div class="box">
          <!-- 已登录 -->
          <div class="user normal_user">
            <div class="bd">
              <div class="photo"><img src="//img.nala.com.cn/images/b2b/2019/index/photo.png" alt="" /></div>
              <div class="name">Hi~欢迎来到NALA</div>
              <div class="btns">
                <router-link class="btn1" to="/login">登录</router-link>
                <router-link class="btn2" to="/register">注册</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="box cle scroll_quanzi" id="scroll_quanzi">
          <div class="fl hd">
            <img src="https://img.nala.com.cn/images/b2b/2019/quanzi-index.png" alt="" />
          </div>
          <div class="fr bd">
            <div class="scroll_bd">
              <div class="scroll_ul">
                <ul>
                  <li>
                    <a href="https://www.nala.com.cn/purchase/quanzi/artical/detail?materialId=dc97807c-205a-4a72-8992-14820f6d7052" target="_blank">
                      <b>【文章】</b>
                      2019年全国化妆品零售额将超2700亿 男性彩妆市场进入上升期
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/purchase/quanzi/artical/detail?materialId=48d012e4-d8f9-48ad-a8ac-7428e40ceefb" target="_blank">
                      <b>【文章】</b>
                      能在一个月内成为“刷屏级”网红单品的利器是什么？
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/purchase/quanzi/artical/detail?materialId=1bc816f2-bd03-4730-b6bf-6cd201fb0236" target="_blank">
                      <b>【文章】</b>
                      圣诞限定彩妆 各品牌花式秀技争噱头
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="box scroll_trade" id="scroll_trade">
          <div class="hd">近期交易</div>
          <div class="bd">
            <div class="scroll_bd">
              <div class="scroll_ul">
                <ul>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                  <li>
                    <a href="https://www.nala.com.cn/product-I30086140.html" target="_blank">178****9803 测试商品2</a>
                    <span>1个</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- NALA圈子 -->
        <!-- NALA圈子 END-->

        <div class="box service">
          <ul class="cle">
            <li>
              <img src="https://img.nala.com.cn/images/b2b/2019/index/zphh.png" />
              <h5>全行货<br />正品</h5>
            </li>
            <li>
              <img src="https://img.nala.com.cn/images/b2b/2019/index/ppsq.png" />
              <h5>品牌<br />授权</h5>
            </li>
            <li>
              <img src="https://img.nala.com.cn/images/b2b/2019/index/ydyzd.png" />
              <h5>一对一<br />服务</h5>
            </li>
            <li>
              <img src="https://img.nala.com.cn/images/b2b/2019/index/shwy2.png" />
              <h5>售后<br />无忧</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--导航和轮播部分 结束-->
    <div id="main">
      <!-- 运营位1 -->

      <!-- 活动运营位的商品组合 -->

      <!-- 品牌列表 -->

      <!-- 品牌和导购区 -->
      <div class="wrap guide">
        <!-- 左侧品牌 -->
        <div class="brand_wrap">
          <div class="title cle">
            <div class="fl">
              <strong>品牌大全</strong>
              <span>/ BRANDS COLLECTION</span>
            </div>
            <div class="fr brand_tab" id="brand_tab">
              <a href="javascript:;" class="current">可授权品牌<img src="https://img.nala.com.cn/images/b2b/2019/index/ksq2x.png" alt="可授权品牌" /></a>
              <a href="javascript:;">热门品牌</a>
            </div>
          </div>
          <div class="body">
            <div class="brand_list" id="brand_list">
              <!--可授权品牌-->
              <ul class="cle" style="display: block">
                <li>
                  <a href="https://www.nala.com.cn/brand/search.html?bid=B10000741" target="_blank">
                    <img src="http://img.nala.com.cn/os/prod/261ecc71-abc2-4118-8b2f-cea8c7ff4bfe.jpg!wh150" data-src="http://img.nala.com.cn/os/prod/261ecc71-abc2-4118-8b2f-cea8c7ff4bfe.jpg!wh150" alt="润培" />
                    <p class="name">润培/roopy</p>
                    <div class="cover">
                      <div class="bd">
                        <p>国产香氛洗护品牌</p>
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/local/b2b/public/file/200X80_1602750601012711.png!wh150" data-src="https://img.nala.com.cn/local/b2b/public/file/200X80_1602750601012711.png!wh150" alt="吾样" />
                    <p class="name">吾样/5R</p>
                    <div class="cover">
                      <div class="bd">
                        <p>新生护肤国货</p>
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/os/prod/278dd433-6738-41b6-bf65-c67a175d4b28.png!wh150" data-src="https://img.nala.com.cn/os/prod/278dd433-6738-41b6-bf65-c67a175d4b28.png!wh150" alt="本恩" />
                    <p class="name">本恩</p>
                    <div class="cover">
                      <div class="bd">
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <div class="more">
                      <strong>共3个品牌</strong>
                      <p>查看全部&gt;</p>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- 热门品牌（全部品牌） -->
              <ul class="cle" style="display: none">
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="http://img.nala.com.cn/os/prod/261ecc71-abc2-4118-8b2f-cea8c7ff4bfe.jpg!wh150" alt="润培" />
                    <p class="name">润培/roopy</p>
                    <div class="cover">
                      <div class="bd">
                        <p>国产香氛洗护品牌</p>
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="https://img.nala.com.cn/local/b2b/public/file/200X80_1602750601012711.png!wh150" alt="吾样" />
                    <p class="name">吾样/5R</p>
                    <div class="cover">
                      <div class="bd">
                        <p>新生护肤国货</p>
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="https://img.nala.com.cn//b2b/user/f3c8aa7a-55a1-435c-8a3d-6d8f3f06cd5d/200X80_1584079588375730.jpg!wh150" alt="香蒲丽" />
                    <p class="name">香蒲丽/SHANGPREE</p>
                    <div class="cover">
                      <div class="bd">
                        <p>专业SPA护理品牌</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="http://img.nala.com.cn/b2b/user/65e6133b-42ac-46cf-acce-a2894e17250e/14649450683501208.jpg!wh150" alt="依泉" />
                    <p class="name">依泉/URIAGE</p>
                    <div class="cover">
                      <div class="bd">
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="http://img.nala.com.cn//b2b/user/08b51949-37f1-40ec-bdd3-8df52784448a/400X160_15635272573311059.jpg!wh150" alt="老虎范特" />
                    <p class="name">老虎范特/VT</p>
                    <div class="cover">
                      <div class="bd">
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="https://img.nala.com.cn/os/prod/c4fa1fe0-9dad-4a73-b41e-074fa5ba1694.png!wh150" alt="修丽可" />
                    <p class="name">修丽可/SKIN CEUTICALS</p>
                    <div class="cover">
                      <div class="bd">
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <img src="https://img.nala.com.cn/static/b2b/logo_default.jpg!wh200" data-src="https://img.nala.com.cn/os/prod/278dd433-6738-41b6-bf65-c67a175d4b28.png!wh150" alt="本恩" />
                    <p class="name">本恩</p>
                    <div class="cover">
                      <div class="bd">
                        <p>可申请授权证书</p>
                        <span class="btn2">点击进入</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <div class="more">
                      <strong>共7个品牌</strong>
                      <p>查看全部&gt;</p>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- 此段代码先注释掉，不要删！不要删！不要删！日后可能还会用！ start -->
              <!-- 此段代码先注释掉，不要删！不要删！不要删！end -->
            </div>
          </div>
        </div>

        <!-- 特惠直降 -->
        <a class="guide_wrap guide_special" href="https://www.nala.com.cn/itemGroup?itemGroupId=02876c24-38bd-449e-946c-12sd2er2fg2d" target="_blank">
          <h3 class="guide_title">特惠直降</h3>
          <p class="guide_desc">超低价选集</p>
          <div class="guide_skus">
            <div class="guide_sku">
              <img class="img_sku" src="https://img.nala.com.cn/os/prod/778018a2-9b6f-4879-a805-e9d80040cee1.jpg" />
              <p class="sku_title">5R维他命原B5保湿修护精华液30ml</p>
              <p class="nologin">登录后查看价格</p>
            </div>
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/94679567-887a-40fd-9352-7443babaecce.jpg" />
              <p class="sku_title">润培馥奇香氛柔嫩臻养手膜</p>
              <p class="nologin">登录后查看价格</p>
            </div>
          </div>
        </a>

        <!-- 有买有送 -->
      </div>

      <!-- 活动中心图片 -->
      <!-- 活动中心图片 -->

      <!-- 导购区 -->
      <div class="wrap guide">
        <!-- 新品首发 -->
        <a class="guide_wrap guide_new" href="https://www.nala.com.cn/itemGroup?itemGroupId=02876c24-38bd-449e-946c-12sd2easrfgt" target="_blank">
          <h3 class="guide_title">新品首发</h3>
          <p class="guide_desc">每月尖货上新</p>
          <div class="guide_skus">
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/0b18fc80-8072-4f29-8f48-6d72f69499ee.jpg!wh200" />
              <div class="sku_info">
                <p class="sku_title">润培馥奇香氛护发精油喷雾95ml（晨露原野）</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/e120a2e7-f212-4f9a-83ad-db7e2c00fc71.jpg!wh200" />
              <div class="sku_info">
                <p class="sku_title">润培roopy馥奇香氛植物精粹护手霜</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
            <div class="guide_sku">
              <img class="img_sku" src="https://img.nala.com.cn/os/prod/e39f5241-11ba-4de0-941f-092316f28f6c.png!wh200" />
              <div class="sku_info">
                <p class="sku_title">本恩 纯棉夜用卫生巾10片</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
          </div>
        </a>

        <!-- 线上线下精选 -->
        <div class="line_wrap">
          <a class="guide_wrap guide_line" href="https://www.nala.com.cn/itemGroup?itemGroupId=02876c24-38bd-449e-946c-12sdwsdfdsxc" target="_blank">
            <h3 class="guide_title">线上精选</h3>
            <p class="guide_desc">线上店主口碑推荐</p>
            <div class="guide_skus">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/e120a2e7-f212-4f9a-83ad-db7e2c00fc71.jpg!wh200" />
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/a0215004-223c-4d4c-b1ec-8b68d2615131.jpg!wh200" />
              <img class="img_sku" src="https://img.nala.com.cn/os/prod/b98e8bba-335d-4388-844e-e980c94e29ca.png!wh200" />
            </div>
          </a>
          <a class="guide_wrap guide_line" href="https://www.nala.com.cn/itemGroup?itemGroupId=02876c24-38bd-449e-946c-12ssdrt5fghg" target="_blank">
            <h3 class="guide_title">线下精选</h3>
            <p class="guide_desc">实体门店上架必选</p>
            <div class="guide_skus">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/aac940c8-9c5e-4e02-8b05-80480b8534aa.jpg!wh200" />
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/f960fa2c-503c-4af9-8fb2-f3702644f8c0.png!wh200" />
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/8c69fcdf-43c9-46fb-837a-367859157de0.jpg!wh200" />
            </div>
          </a>
        </div>

        <!-- 高利爆品 -->
        <a class="guide_wrap guide_new guide_money" href="https://www.nala.com.cn/itemList/highProfit" target="_blank">
          <h3 class="guide_title">高利爆品</h3>
          <p class="guide_desc"></p>
          <div class="guide_skus">
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/8c69fcdf-43c9-46fb-837a-367859157de0.jpg!wh200" />
              <div class="sku_info">
                <p class="sku_title">润培roopy馥奇香氛氨基酸洗发水380ml</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/cf4f9297-1150-4b8a-96a2-46a0900da3a4.jpg!wh200" />
              <div class="sku_info">
                <p class="sku_title">5R吾样 依克多因舒缓修护精华水120ml</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
            <div class="guide_sku">
              <img class="img_sku" src="http://img.nala.com.cn/os/prod/97ee26ad-ca01-4b7b-a9c3-fe74e3bff71e.jpg!wh200" />
              <div class="sku_info">
                <p class="sku_title">5R吾样 视黄酸酯焕颜菁采眼膜</p>
                <p class="nologin">登录后查看价格</p>
              </div>
            </div>
          </div>
        </a>

        <!-- 排行榜 -->
      </div>

      <!-- 品牌专场入口 -->

      <!-- 品牌专场列表 -->

      <!-- 商品组合 -->

      <!-- 运营位2 -->

      <!-- 新品首发 -->

      <!-- 线上最受欢迎单品榜 -->

      <!-- 线下最受欢迎单品榜 -->

      <!-- 楼层开始 -->
      <!-- 循环楼层 -->
      <!-- 楼层 end -->

      <!-- 为您推荐 -->
      <div class="wrap recommend">
        <div class="hd tc"><strong>为您推荐</strong></div>
        <div class="itemlist">
          <span class="titlenav">{{ shopList1[0].categoryName }}</span>
          <ul class="cle">
            <li v-for="item in shopList1" :key="item.id">
              <div class="pic">
                <router-link :to="{ name: 'readmoreshop', params: { item } }"><img :src="`/api/image/download/?name=${item.image}`" style="display: inline" /></router-link>
              </div>
              <div class="info">
                <p class="name">{{ item.description }}</p>
                <p class="sale">已售：6504276件<span class="minnum">起批量：1</span></p>
                <p class="lingshou">建议零售价：￥{{ item.price }}</p>
                <div class="item_supplier_info">
                  <i class="iconfont item_supplier_info_icon red"></i>
                  <div class="item_supplier_info_name hidden">{{ item.name }}</div>
                </div>
              </div>
              <div class="special"></div>
            </li>
          </ul>

          <span class="titlenav">{{ shopList2[0].categoryName }}</span>
          <ul class="cle">
            <li v-for="item in shopList2" :key="item.id">
              <a href="https://www.nala.com.cn/product-I30085632.html" target="_blank">
                <div class="pic">
                  <router-link :to="{ name: 'readmoreshop', params: { item } }"><img :src="`/api/image/download/?name=${item.image}`" style="display: inline" /></router-link>
                </div>
                <div class="info">
                  <p class="name">{{ item.description }}</p>
                  <p class="sale">已售：6504276件<span class="minnum">起批量：1</span></p>
                  <p class="lingshou">建议零售价：￥{{ item.price }}</p>
                  <div class="item_supplier_info">
                    <i class="iconfont item_supplier_info_icon red"></i>
                    <div class="item_supplier_info_name hidden">{{ item.name }}</div>
                  </div>
                </div>
                <div class="special"></div>
              </a>
            </li>
          </ul>

          <span class="titlenav">{{ shopList3[0].categoryName }}</span>
          <ul class="cle">
            <li v-for="item in shopList3" :key="item.id">
              <a href="https://www.nala.com.cn/product-I30085632.html" target="_blank">
                <div class="pic">
                  <router-link :to="{ name: 'readmoreshop', params: { item } }"><img :src="`/api/image/download/?name=${item.image}`" style="display: inline" /></router-link>
                </div>
                <div class="info">
                  <p class="name">{{ item.description }}</p>
                  <p class="sale">已售：6504276件<span class="minnum">起批量：1</span></p>
                  <p class="lingshou">建议零售价：￥{{ item.price }}</p>
                  <div class="item_supplier_info">
                    <i class="iconfont item_supplier_info_icon red"></i>
                    <div class="item_supplier_info_name hidden">{{ item.name }}</div>
                  </div>
                </div>
                <div class="special"></div>
              </a>
            </li>
          </ul>
          <span class="titlenav">{{ shopList4[0].categoryName }}</span>

          <ul class="cle">
            <li v-for="item in shopList4" :key="item.id">
              <a href="https://www.nala.com.cn/product-I30085632.html" target="_blank">
                <div class="pic">
                  <router-link :to="{ name: 'readmoreshop', params: { item } }"><img :src="`/api/image/download/?name=${item.image}`" style="display: inline" /></router-link>
                </div>
                <div class="info">
                  <p class="name">{{ item.description }}</p>
                  <p class="sale">已售：6504276件<span class="minnum">起批量：1</span></p>
                  <p class="lingshou">建议零售价：￥{{ item.price }}</p>
                  <div class="item_supplier_info">
                    <i class="iconfont item_supplier_info_icon red"></i>
                    <div class="item_supplier_info_name hidden">{{ item.name }}</div>
                  </div>
                </div>
                <div class="special"></div>
              </a>
            </li>
          </ul>
        </div>

        <div class="all tc">
          <a href="https://www.nala.com.cn/item/search.html" target="_blank">查看更多&gt;</a>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <!-- 导入全局组件 -->
    <Trail></Trail>
  </div>
</template>
<script>
// 引入swiper
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

// 导入请求轮播图的请求
import { reqBanner } from '@/api/index'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      bannerList: '',
      // 请求商品信息所携带的参数
      shop: {
        name: '',
        currentPage: 1,
        pageSize: 5
      }
    }
  },
  mounted() {
    // 下面这种写法:存在问题,定时器事件,没有办法去预估
    // Swiper在使用的时候注意:new Swiper类的实例之前,轮播图结构DOM,必须要完整!!!
    setTimeout(() => {
      // 初始化Swiper类的实例
      let mySwiper = new Swiper(this.$refs.mySwiper, {
        // 设置轮播图防线
        direction: 'horizontal',
        // 开启循环模式
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          // 分页器类型
          type: 'bullets',
          // 点击分页器，切换轮播
          clickable: true
        },
        // 自动轮播
        autoplay: {
          delay: 2000,
          // 新版本的写法：目前是5版本
          // pauseOnMouseEnter: true,
          // 如果设置为true，当切换到最后一个slide时停止自动切换
          stopOnLastSlide: true,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // 切换效果
        // effect: "cube",
      })
    }, 2000)
    // 请求商品信息
    this.fetchData()
  },
  computed: {
    // 计算属性获取各商品分类的信息
    shopList1() {
      return this.$store.state.shopList.shopList1
    },
    shopList2() {
      return this.$store.state.shopList.shopList2
    },
    shopList3() {
      return this.$store.state.shopList.shopList3
    },
    shopList4() {
      return this.$store.state.shopList.shopList4
    }
  },
  created() {
    // 请求轮播图数据
    this.getBannerList()
  },
  methods: {
    async getBannerList() {
      const result = await reqBanner()
      console.log('banner' + result.data)
      this.bannerList = result.data.data
      console.log(this.bannerList)
    },
    async fetchData() {
      for (let i = 1; i <= 4; i++) {
        this.shop.currentPage = i
        await this.$store.dispatch('shopList/getShopList', this.shop)
      }
    }
  }
}
</script>
<style lang="less" scoped>
html {
  background-color: #f2f2f2;
}
.main_cate {
  opacity: 1;
  visibility: visible;
  height: 410px;
}
.topbanner {
  background-position: center 0;
  background-repeat: no-repeat;
  height: 80px;
}
.topbanner a {
  display: block;
  width: 100%;
  height: 100%;
}

/* -------------------- */
.index-banner {
  width: 100%;
  margin: 0 auto 32px;
  position: relative;
}
.index-slide {
  width: 100%;
  height: 420px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: url(https://img.nala.com.cn/images/b2b/loading.gif) center center no-repeat;
}
.index-slide a:hover {
  text-decoration: none;
}
.index-slide ul {
  height: 420px;
  overflow: hidden;
}
.index-slide li {
  float: left;
  width: 100%;
  height: 420px;
  overflow: hidden;
  background-position: center 0;
  background-repeat: no-repeat;
}
.index-slide li:first-child {
  z-index: 2;
}
.index-slide li a {
  display: block;
  height: 420px;
  width: 1180px;
  margin: 0 auto;
}
.index-slide .trigger-box {
  width: 400px;
  margin: 0 auto;
  position: absolute;
  bottom: 8px;
  left: 50%;
  z-index: 10;
  margin-left: -200px;
}
.index-slide .triggers {
  text-align: center;
  font-size: 0;
}
.trigger-box .triggers a {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  margin-right: 12px;
}
.trigger-box .triggers a::after {
  content: '';
  display: inline-block;
  width: 32px;
  padding: 6px 0 0 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  background-color: #fff;
  background: rgba(255, 255, 255, 0.6);
  filter: Alpha(opacity=60);
  border-radius: 3px;
  vertical-align: middle;
}
.trigger-box .triggers a.current::after {
  background: #ef2635;
  filter: Alpha(opacity=100);
}
.index-slide .slide_btn {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  display: block;
  width: 32px;
  padding: 14px 0;
  border-radius: 3px;
  text-align: center;
  background: #000;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  color: #fff;
  font-size: 24px;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  visibility: hidden;
}
#slide_prev {
  margin-left: -634px;
}
#slide_next {
  margin-left: 602px;
}
.index-slide:hover .slide_btn {
  visibility: visible;
  opacity: 0.5;
}
.index-slide:hover .slide_btn:hover {
  opacity: 1;
}
.right_part {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 10px;
  width: 240px;
  height: 400px;
  margin-left: 350px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #fafafa;
}
.right_part .box {
  padding: 10px 0 0;
  margin: 0 12px;
  overflow: hidden;
}
.user {
  width: 200px;
  height: 112px;
  padding: 8px 8px 0;
  overflow: hidden;
  margin: 0 auto;
  background: url(https://img.nala.com.cn/images/b2b/2019/index/userbg.png) 0 0 no-repeat;
  color: #422e2e;
}
.user .hd {
  position: relative;
  text-align: left;
}
.user .hd img {
  width: 17px;
}
.user .hd strong {
  font-size: 14px;
  vertical-align: 2px;
  margin-left: 5px;
}
.user .bd {
  text-align: center;
}
.user .bd .photo img {
  width: 56px;
  height: 56px;
  border-radius: 30px;
  border: 2px solid #fff;
}
.user .bd .name {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
}
.normal_user {
  background: 0 0;
  padding-top: 0;
  height: 120px;
}
.normal_user .bd .name {
  font-weight: 400;
}
.normal_user img.kt {
  width: 180px;
}
.normal_user .btns {
  margin-top: 8px;
}
.normal_user .btns a {
  height: 23px;
  line-height: 22px;
  padding: 0 30px;
  margin: 0 3px;
}
.right_part .scroll_quanzi {
  display: none;
  border-bottom: 1px dashed #eee;
  padding-top: 14px;
  padding-bottom: 12px;
  margin-bottom: 2px;
}
.scroll_quanzi .hd {
  width: 60px;
  padding-top: 3px;
}
.scroll_quanzi .hd img {
  width: 60px;
  height: 15px;
}
.scroll_quanzi .scroll_ul {
  position: relative;
  width: 148px;
  height: 22px;
  overflow: hidden;
}
.scroll_quanzi li {
  position: relative;
  height: 22px;
  line-height: 22px;
  overflow: hidden;
}
.scroll_quanzi li a {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.scroll_trade .hd {
  font-size: 14px;
  font-weight: 700;
}
.scroll_trade .bd {
  width: 216px;
  height: 136px;
  margin-top: 2px;
  overflow: hidden;
  position: relative;
}
.scroll_trade .scroll_ul {
  position: relative;
  width: 216px;
  height: 136px;
  overflow: hidden;
}
.scroll_trade ul {
  width: 100%;
}
.scroll_trade li {
  position: relative;
  height: 22px;
  line-height: 22px;
  overflow: hidden;
}
.scroll_trade li a {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.scroll_trade li em {
  margin-right: 3px;
}
.scroll_trade li span {
  position: absolute;
  right: 0;
  top: 0;
}
.right_part .service {
  padding-top: 14px;
}
.right_part .service li {
  width: 54px;
  float: left;
  text-align: center;
}
.right_part .service li img {
  width: 24px;
  height: 24px;
}
.wrap {
  width: 1180px;
  margin: 0 auto 32px;
  border-radius: 4px;
  overflow: hidden;
}
.wrap img {
  margin: 2px;
  height: 250px;
  width: 226px;
  vertical-align: top;
}
.wrap a:hover {
  text-decoration: none;
}
.wrap .title {
  padding: 0 20px;
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.wrap .title .fl strong {
  font-size: 20px;
  color: #ef2635;
}
.wrap .title .fl span {
  font-size: 12px;
  margin-left: 4px;
  color: #999;
}
.wrap .title .more {
  color: #666;
}
.wrap .title .more:hover {
  color: #ef2635;
}
.wrap .body {
  background-color: #fff;
  padding: 24px 20px;
}

// -------
.wrap .cle {
  display: flex;
  margin-bottom: 60px;
}
.wrap .titlenav {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
}
.yunying ul {
  margin-right: -20px;
}
.yunying li {
  float: left;
  width: 283px;
  margin-right: 16px;
}
.yunying img {
  width: 283px;
  height: 107px;
  vertical-align: top;
  border-radius: 4px;
}
.yunying2 img {
  height: 80px;
}
.sample {
  background: #e0ecf6 url(https://img.nala.com.cn/images/b2b/2019/sample-index-hd.png) 0 0 no-repeat;
}
.sample .hd {
  height: 80px;
  position: relative;
}
.sample .hd .more {
  position: absolute;
  top: 26px;
  right: 20px;
  display: inline-block;
  background-color: #fff;
  color: #4b9bfc;
  padding: 4px 14px;
  font-weight: 700;
  border-radius: 15px;
}
.sample .itemlist {
  padding-left: 22px;
  padding-bottom: 15px;
}
.sample .itemlist li {
  width: 160px;
  height: 230px;
  margin-right: 6px;
}
.sample .itemlist li .pic img {
  width: 160px;
  height: 160px;
}
.sample .itemlist li .timedown {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  padding: 2px 0;
  background: rgba(255, 255, 255, 0.6);
  line-height: 20px;
  color: #fff;
}
.sample .itemlist li .timedown .secs {
  display: none;
}
.sample .itemlist li .timedown em {
  display: inline-block;
  width: 20px;
  font-family: Arial;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
}
.sample .itemlist li .timedown i {
  color: #666;
  margin: 0 7px;
}
.sample .itemlist li .endtime {
  background: rgba(0, 0, 0, 0.2);
}
.brand_wrap {
  margin-right: 12px;
  display: inline-block;
  width: 584px;
  height: 260px;
  font-size: 12px;
}
.brand_wrap .body {
  padding: 18px 20px;
}
.brand_tab a {
  position: relative;
  display: inline-block;
  height: 54px;
  font-size: 14px;
  padding: 0 5px;
  border-bottom: 2px solid #fff;
  margin-left: 32px;
  position: relative;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.brand_tab a:after {
  display: block;
  font-size: 0;
  content: '\20';
  position: absolute;
  bottom: 0;
  left: 50%;
  border: 4px solid #fff;
  margin-left: -4px;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.brand_tab a.current {
  border-color: #ef2635;
  font-weight: 700;
  color: #ef2635;
}
.brand_tab a.current:after {
  border-bottom-color: #ef2635;
}
.brand_tab a img {
  width: 40px;
  position: absolute;
  left: -40px;
  top: 18px;
}
.brand_list ul {
  display: none;
  margin-right: -20px;
}
.brand_list li {
  float: left;
  width: 110px;
  height: 82px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  text-align: center;
  margin: 0 -1px -1px 0;
}
.brand_list li a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.brand_list li img {
  width: 110px;
  height: 44px;
  margin: 6px 0;
}
.brand_list li .name {
  height: 20px;
  overflow: hidden;
}
.brand_list li .cover {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #ef2635;
  background: rgba(239, 38, 53, 0.9);
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.brand_list li .cover .bd {
  display: table-cell;
  vertical-align: middle;
}
.brand_list li .cover p {
  color: #fff;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}
.brand_list li .cover .btn2 {
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  margin-top: 4px;
}
.brand_list li a:hover .cover {
  visibility: visible;
  opacity: 1;
}
.brand_list li .more {
  padding-top: 24px;
}
.brand_list li .more strong {
  font-size: 14px;
}
.brand_list li .more p {
  color: #999;
}
.guide {
  font-size: 0;
}
.guide_wrap {
  display: inline-block;
  vertical-align: top;
  width: 286px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  padding: 14px 16px 0;
}
.guide_wrap .nologin {
  font-size: 12px;
  color: #999;
}
.guide_money .nologin,
.guide_special .nologin {
  margin-top: 8px;
}
.guide_gift .nologin {
  margin-top: 2px;
}
.guide_new .nologin {
  margin-top: 12px;
}
.guide_line .img_sku:hover,
.guide_wrap .guide_sku:hover .img_sku {
  opacity: 0.8;
}
.guide_wrap .guide_sku:hover .sku_title {
  color: #ef2635;
}
.guide_wrap + .guide_wrap {
  margin-left: 12px;
}
.guide_wrap .guide_title {
  display: inline-block;
  padding-right: 28px;
  font-size: 20px;
  color: #333;
  font-weight: 600;
  background: url(https://img.nala.com.cn/images/b2b/2019/index/icon_more.png) right center no-repeat;
  background-size: 17px;
}
.guide_wrap .guide_desc {
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #999;
}
.guide_gift,
.guide_special {
  height: 260px;
}
.guide_gift .guide_skus,
.guide_special .guide_skus {
  margin-top: 8px;
  font-size: 0;
}
.guide_gift .guide_sku,
.guide_special .guide_sku {
  display: inline-block;
  width: 120px;
}
.guide_gift .guide_sku + .guide_sku,
.guide_special .guide_sku + .guide_sku {
  margin-left: 14px;
}
.guide_gift .sku_title,
.guide_special .sku_title {
  margin-top: 4px;
  font-size: 12px;
  color: #333;
}
.guide_special .sku_title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.guide_gift .sku_title {
  line-height: 17px;
  height: 34px;
  overflow: hidden;
}
.guide_gift .img_sku,
.guide_special .img_sku {
  width: 120px;
  height: 120px;
}
.guide_special .price_box {
  margin-top: 8px;
  font-size: 0;
  background: url(https://img.nala.com.cn/images/b2b/2019/index/bg_price.png) center no-repeat;
  background-size: contain;
  letter-spacing: -1px;
}
.guide_special .price_box span {
  display: inline-block;
  line-height: 24px;
}
.guide_special .price_box .price_now {
  width: 70px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding-right: 8px;
  box-sizing: border-box;
}
.guide_special .price_box .price_now i {
  font-size: 12px;
  font-weight: 400;
}
.guide_special .price_box .price_old {
  width: 50px;
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}
.guide_wrap .sku_price {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.guide_wrap .sku_price i {
  font-size: 12px;
  font-weight: 400;
}
.guide_gift .sku_price {
  margin-top: 2px;
  color: #ef2635;
}
.guide_new {
  height: 360px;
}
.guide_new .guide_skus {
  margin-top: 12px;
  font-size: 0;
}
.guide_new .guide_sku + .guide_sku {
  margin-top: 16px;
}
.guide_line .img_sku,
.guide_new .img_sku {
  width: 80px;
  height: 80px;
}
.guide_new .sku_info {
  display: inline-block;
  margin-left: 8px;
}
.guide_new .sku_title {
  margin-top: 4px;
  width: 166px;
  height: 40px;
  overflow: hidden;
  font-size: 14px;
  color: #333;
}
.guide_new .sku_price {
  margin-top: 12px;
  color: #ef2635;
}
.guide_wrap + .line_wrap,
.line_wrap + .guide_wrap {
  margin-left: 12px;
}
.line_wrap {
  display: inline-block;
  vertical-align: top;
  font-size: 0;
}
.line_wrap .guide_line {
  display: block;
  height: 174px;
}
.line_wrap .guide_line .guide_skus {
  margin-top: 15px;
}
.guide_line + .guide_line {
  margin-left: 0;
  margin-top: 12px;
}
.guide_line .img_sku + .img_sku {
  margin-left: 6px;
}
.guide_money .sku_price {
  color: #333;
}
.guide_money .guide_sku {
  white-space: nowrap;
}
.guide_money .guide_sku .sku_title {
  white-space: normal;
}
.guide_money .sku_price .money {
  margin-left: 6px;
  display: inline-block;
  padding: 0 4px;
  border: 1px solid #ef2635;
  color: #ef2635;
  font-size: 10px;
  border-radius: 2px;
}
.guide_top .icon_top {
  width: 28px;
  height: 40px;
  margin: 20px 8px 0 0;
}
.guide_top .sku_title {
  margin-top: 20px;
  width: 130px;
  height: 40px;
  overflow: hidden;
}
.enter_wrap {
  margin-bottom: 21px;
}
.brand_ul {
  font-size: 0;
}
.brand_ul li {
  display: inline-block;
}
.brand_ul li:nth-child(2n) {
  margin-left: 20px;
}
.brand_ul li:nth-child(2n + 3) {
  margin-top: 20px;
}
.brand_item {
  padding: 24px 215px 24px 20px;
  display: inline-block;
  background: url('') center no-repeat;
  background-size: cover;
  border-radius: 12px;
}
.brand_item .brand_content {
  border-radius: 52px 6px 52px 6px;
  background: #fff;
  padding: 20px 20px 24px 10px;
}
.brand_item .brand_content .brand_info {
  display: inline-block;
  text-align: center;
}
.brand_item .brand_content .img_brand {
  height: 56px;
}
.brand_item .brand_content .brand_desc {
  margin-top: 22px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  width: 208px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brand_item .brand_content .img_sku {
  margin: 6px 0 0 10px;
  width: 96px;
  height: 96px;
}
.item_new {
  background-color: #54399c;
  padding: 24px 0;
}
.item_new .hd {
  margin-bottom: 32px;
}
.item_new .hd img {
  width: 216px;
}
.item_new .hd p {
  color: #fff;
  margin-top: 6px;
  opacity: 0.7;
}
.item_new .all {
  text-align: center;
  padding-top: 19px;
}
.item_new .all a {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 14px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 13px;
}
.itemlist2 {
  padding: 0 20px;
}
.itemlist2 li {
  width: 200px;
  height: 314px;
  margin: 0 5px 5px 0;
}
.itemlist2 li .pic img {
  width: 200px;
  height: 200px;
}
.itemlist2 li .other .liangdian p:last-child {
  padding-bottom: 8px;
}
.item_active_operator {
  padding: 101px 0 0;
  height: 435px;
  overflow: hidden;
  background-color: #c32942;
  background-repeat: no-repeat;
  background-position: center 0;
}
.item_active_operator .hd {
  height: 100px;
  margin-bottom: 5px;
}
.item_active_operator .hd img {
  width: auto;
  max-width: 1180px;
  max-height: 100px;
  border-radius: 4px;
}
.item_active_operator .itemlist2 li {
  height: 338px;
}
.item_rank {
  padding-top: 162px;
}
.item_rank .itemlist {
  padding-bottom: 19px;
}
.item_rank .itemlist li .special {
  top: 6px;
  left: 4px;
}
.item_rank .itemlist li:nth-child(1) .special,
.item_rank .itemlist li:nth-child(2) .special,
.item_rank .itemlist li:nth-child(3) .special {
  top: 0;
  left: 0;
}
.item_rank .itemlist li .special img {
  width: 24px;
}
.item_rank .itemlist li:nth-child(1) .special img,
.item_rank .itemlist li:nth-child(2) .special img,
.item_rank .itemlist li:nth-child(3) .special img {
  width: 38px;
}
.item_rank_online {
  background: #f6e9e1 url(https://img.nala.com.cn/images/b2b/2019/index/rank-online.png) center 0 no-repeat;
}
.item_rank_offline {
  background: #f6e1f1 url(https://img.nala.com.cn/images/b2b/2019/index/rank-offline.png) center 0 no-repeat;
}
.item_rank .itemlist li p.name em {
  background-color: #ff6f3e;
  color: #fff;
  font-size: 12px;
  padding: 0 2px 0 3px;
  margin-right: 5px;
  border-radius: 2px;
  line-height: 13px;
  height: 15px;
  box-sizing: border-box;
}
.floor_hd {
  float: left;
  width: 264px;
  overflow: hidden;
  position: relative;
}
.floor_hd .tags {
  position: absolute;
  z-index: 2;
  bottom: 48px;
  left: 0;
  width: 100%;
  font-size: 0;
}
.floor_hd .tags a {
  display: inline-block;
  margin: 12px 0 0 10px;
  background-color: #fff;
  border-radius: 20px;
  width: 76px;
  height: 28px;
  line-height: 28px;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.floor_hd .pic img {
  width: 100%;
  height: 707px;
  vertical-align: top;
  -ms-transition: all 0.6s;
  transition: all 0.6s;
}
.floor_hd .pic img:hover {
  -ms-transform: scale3d(1.02, 1.02, 1);
  transform: scale3d(1.02, 1.02, 1);
}
.floor_bd {
  float: right;
  width: 856px;
}
.floor_bd .itemlist ul {
  margin-right: 0;
}
.floor_bd .itemlist li {
  width: 190px;
  height: 360px;
  border-radius: 0;
  border-left-color: #e5e5e5;
  border-bottom-color: #e5e5e5;
  margin: 0;
}
.floor_bd .itemlist li .other {
  padding-bottom: 5px;
}
.floor_bd .itemlist li:nth-child(1),
.floor_bd .itemlist li:nth-child(5) {
  border-left-color: #fff;
}
.floor_bd .itemlist li:nth-child(5),
.floor_bd .itemlist li:nth-child(6),
.floor_bd .itemlist li:nth-child(7),
.floor_bd .itemlist li:nth-child(8) {
  border-bottom-color: #fff;
}
.floor_bd .itemlist li .pic img {
  width: 190px;
  height: 190px;
}
.floor_bd .itemlist li:hover {
  position: relative;
  z-index: 10;
  border-color: #fff;
}
.floor_bd .itemlist li:after {
  display: block;
  font-size: 0;
  content: '\20';
  position: absolute;
  top: 0;
  right: -2px;
  background-color: #fff;
  width: 1px;
  height: 100%;
  z-index: 10;
  visibility: hidden;
}
.floor_bd .itemlist li:before {
  display: block;
  font-size: 0;
  content: '\20';
  position: absolute;
  top: -2px;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 1px;
  z-index: 10;
  visibility: hidden;
}
.floor_bd .itemlist li:hover:after,
.floor_bd .itemlist li:hover:before {
  visibility: visible;
}
.item_group {
  background-color: #dce5ef;
  padding: 24px 0 32px;
  margin-bottom: 32px;
}
.item_group .hd {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
}
.item_group .bd {
  width: 1180px;
  margin: 0 auto;
  overflow: hidden;
}
.item_group .grouplist {
  margin-right: -20px;
}
.item_group .banner img {
  width: 386px;
  height: 120px;
  vertical-align: top;
}
.item_group .group {
  float: left;
  width: 386px;
  margin-right: 11px;
  padding-bottom: 20px;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
}
.item_group .itemlist {
  width: 100%;
  overflow: hidden;
}

.item_group .itemlist li {
  width: 108px;
  height: 190px;
  padding-right: 6px;
  margin: 0;
}
.item_group .itemlist li .pic img {
  width: 108px;
  height: 108px;
  -ms-transition: all 0.4s;
  transition: all 0.4s;
}
.item_group .itemlist li .now strong {
  font-size: 14px;
}
.item_group .itemlist li:hover {
  box-shadow: none;
}
.item_group .itemlist li:hover .pic img {
  height: 250px;
  widows: 250px;
  -ms-transform: scale3d(1.1, 1.1, 1);
  transform: scale3d(1.1, 1.1, 1);
}
.item_group .all {
  color: #999;
  padding-top: 12px;
}
.item_group .all b {
  margin: 0 3px;
}
.item_group .all .btn2 {
  font-size: 12px;
  padding: 0 13px;
  border-radius: 13px;
  height: 23px;
  line-height: 23px;
  margin-left: 12px;
}
.recommend {
  padding: 0 10px;
}
.recommend .hd {
  margin-bottom: 32px;
}
.recommend .hd strong {
  display: inline-block;
  font-size: 18px;
  position: relative;
}
.recommend .hd strong:after,
.recommend .hd strong:before {
  display: block;
  font-size: 0;
  content: '\20';
  position: absolute;
  top: 50%;
  right: -58px;
  border-top: 1px solid #333;
  width: 36px;
}
.recommend .hd strong:after {
  left: -58px;
}
.recommend .all {
  font-size: 14px;
  padding: 19px 0 0;
  color: #666;
}
.recommend .all a {
  color: #666;
}
.recommend .all a:hover {
  color: #ef2635;
}
.floor_nav {
  position: fixed;
  z-index: 100;
  _display: none;
  left: 50%;
  margin-left: -690px;
  top: 200px;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.4s;
  -ms-transition: all 0.4s;
  transition: all 0.4s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 4px;
}
.floor_nav li {
  width: 44px;
  padding: 0 8px;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
}
.floor_nav li.current,
.floor_nav li:hover {
  background-color: #ef2635;
  color: #fff;
}
.floor_nav li:first-child {
  border-radius: 4px 4px 0 0;
}
.floor_nav li:last-child {
  border-radius: 0 0 4px 4px;
  border: none;
}
.floor_nav li p {
  display: table-cell;
  vertical-align: middle;
  width: 30px;
  padding: 0 7px;
  height: 59px;
  border-bottom: 1px dashed #e5e5e5;
  text-align: center;
}
.floor_nav li:last-child p {
  border: none;
}
.floor_nav li.current p,
.floor_nav li:hover p {
  border-color: #ef2635;
}
.w1350 .floor_nav {
  margin-left: -655px;
}
.w1200 .floor_nav {
  display: none;
}
.floor_nav_show {
  visibility: visible;
  opacity: 1;
}
.ui-popup-modal .popup_dialog {
  margin-top: -60px;
  background: 0 0;
  box-shadow: none !important;
}
.popup_dialog .ui-dialog-header {
  display: none;
}
.popup_dialog .bd {
  width: 400px;
  min-height: 450px;
}
.popup_dialog .bd img {
  width: 400px;
  vertical-align: top;
}
.popup_dialog .bd .close {
  text-align: center;
  line-height: 1;
  padding-top: 10px;
}
.popup_dialog .bd .close a {
  color: #fff;
  line-height: 1;
  vertical-align: top;
  font-size: 50px;
  text-decoration: none;
}
.trialUser_dialog {
  width: 455px;
  height: 400px;
  background: url(https://img.nala.com.cn/images/b2b/2019/index_trial_user_pic.png) 0 0 no-repeat;
  text-align: center;
  font-size: 14px;
}
.trialUser_dialog .days {
  font-size: 48px;
  font-weight: 700;
  padding-top: 50px;
  margin-bottom: 16px;
}
.trialUser_dialog .money {
  padding-top: 10px;
}
.trialUser_dialog .money b {
  font-size: 18px;
  font-weight: 700;
}
.trialUser_dialog .fd {
  padding-top: 78px;
}
.trialUser_dialog .fd .close_btn {
  display: inline-block;
  width: 245px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  background-color: #794209;
  background: linear-gradient(180deg, #b27a36 0, #794209 100%);
  border-radius: 24px;
  color: #fff;
}
.trialUser_dialog .fd p {
  color: #8c572d;
  font-size: 12px;
  padding-top: 16px;
}
.trialUser_dialog .fd .ud {
  text-decoration: underline;
  font-size: 18px;
  color: #8c572d;
}
.trial_end {
  background: #fff;
  padding: 32px 70px 24px;
  border-radius: 12px;
  box-sizing: border-box;
}
.trial_end .bd {
  width: auto;
  min-height: 0;
}
.account_error_tip {
  text-align: center;
  font-size: 14px;
}
.account_error_tip h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
.account_error_tip p {
  width: 260px;
}
.account_error_tip .fd {
  padding-top: 24px;
}
.account_error_tip .btn {
  margin-left: 20px;
}
</style>
