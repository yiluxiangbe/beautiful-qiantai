<template>
  <div class="shopmessage">
    <Head></Head>

    <Nav></Nav>
    <div class="breadcrumb">
      <a href="index.html">全部分类</a>
      <span>&gt;</span>
      <a href="#">新鲜水果</a>
      <span>&gt;</span>
      <span>商品详情</span>
    </div>

    <div class="goods_detail_con clearfix">
      <div class="goods_detail_pic fl"><img id="imgpath" /></div>

      <div class="goods_detail_list fr">
        <input id="id" type="hidden" />
        <h3 id="name"></h3>
        <p id="detail"></p>
        <div class="prize_bar">
          <span class="show_pirze">¥<em id="danjia"></em></span>
          <span class="show_unit">单 位：1.94kg</span>
        </div>
        <div class="goods_num clearfix">
          <div class="num_name fl">数 量：</div>
          <div class="num_add fl">
            <input type="text" class="num_show fl" id="shuliang" value="1" />
            <a href="javascript:;" class="add fr" id="jiahao">+</a>
            <a href="javascript:;" class="minus fr" id="jianhao">-</a>
          </div>
        </div>
        <div class="total">总价：<em id="zongjia">33.90</em>元</div>
        <div class="operate_btn" style="margin-top: 15px">
          <a href="javascript:;" class="buy_btn" id="buy_btn">立即购买</a>
          <a href="javascript:;" class="add_cart" id="add_cart">加入购物车</a>
        </div>
      </div>
    </div>

    <div class="main_wrap clearfix">
      <div class="l_wrap fl clearfix">
        <div class="new_goods">
          <h3>新品推荐</h3>
          <ul>
            <li>
              <a href=""><img src="images/所有商品/57ab290aN34f76b37.jpg" /></a>
              <h4><a href="shop_message.html"> 越南进口红心火龙果 3个装 大果 单果约450~500g </a></h4>
              <div class="prize">￥33.90</div>
            </li>

            <li>
              <a href=""><img src="images/所有商品/5b4871e6N072f0d74.jpg" /></a>
              <h4><a href="shop_message.html">寻天果蔬 泰国山竹水果 京东生鲜 5A级 热带水果 2.5k</a></h4>
              <div class="prize">￥98.00</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="r_wrap fr clearfix">
        <ul class="detail_tab clearfix">
          <li class="active">商品介绍</li>
          <li>评论</li>
        </ul>

        <div class="tab_content">
          <dl>
            <dt>商品详情：</dt>
            <dd>
              <ul id="parameter-brand" class="p-parameter-list">
                <li title="京东生鲜">品牌：&nbsp;<span style="color: #5e69ad">京东生鲜</span></li>
              </ul>
              <ul class="parameter2 p-parameter-list">
                <li>商品名称：京东生鲜越南进口 红心火龙果3个装 单果约500g</li>
                <li title="3048509">商品编号：3048509</li>
                <li title="1.94kg">商品毛重：1.94kg</li>
                <li title="越南">商品产地：越南</li>
                <li title="1kg-2kg">重量：1kg-2kg</li>
                <li title="进口">国产/进口：进口</li>
                <li title="红心火龙果">分类：红心火龙果</li>
                <li title="简装">包装：简装</li>
                <li title="越南">原产地：越南</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <Trail></Trail>
  </div>
</template>

<script>
export default {
  name: 'ShopMessage'
}
</script>

<style lang="less" scoped></style>
