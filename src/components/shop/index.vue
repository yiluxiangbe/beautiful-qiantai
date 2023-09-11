<template>
  <!-- 购物车界面 -->
  <div class="shop">
    <div class="shop_head">
      <Head></Head>
      <div class="total_count">
        全部商品<em id="all_count">{{ cartList.length }}</em
        >种
      </div>
      <ul class="cart_list_th clearfix">
        <li class="col01">商品名称</li>
        <li class="col03">商品单价</li>
        <li class="col04">数量</li>
        <li class="col05">小计</li>
        <li class="col06">操作</li>
      </ul>
      <div id="cartList">
        <ul v-for="item in cartList" :key="item.id" class="cart_list_td clearfix" id="232">
          <li class="col01"></li>
          <li class="col02"><img :src="`/api/image/download/?name=${item.imgPath}`" /></li>
          <li class="col05">98.00元</li>
          <li class="col06">
            <div class="num_add">
              <input type="text" class="num_show fl" :value="item.quantity" />
            </div>
          </li>
          <li class="col07">{{ item.price }}</li>
          <li class="col08"><a href="#" @click="deleteById(item.id)">删除</a></li>
        </ul>
      </div>

      <ul class="settlements">
        <li class="col01"><input type="checkbox" id="check_all" name="" /></li>
        <li class="col02">全选</li>
        <li class="col03">合计(不含运费)：<span>¥</span><em id="zong">0</em><br />共计<b id="zongshu">0</b>件商品</li>
        <li class="col04"><a href="javascript:;" id="jiesuan" style="background-color: rgb(255, 61, 61)">去结算</a></li>
      </ul>
    </div>
    <Trail :class="bottomStyle"></Trail>
  </div>
</template>

<script>
import '@/assets/css/global.css'
export default {
  name: 'Shop',
  data() {
    return {}
  },
  computed: {
    // 底部元素的定位样式
    bottomStyle() {
      // 获取浏览器窗口的高度
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

      // 判断页面内容的高度与浏览器窗口的高度
      if (this.contentHeight < windowHeight) {
        // 页面内容较少，将元素放在浏览器窗口底部
        return {
          position: 'fixed',
          bottom: 0
        }
      } else {
        // 页面内容较多，将元素放在页面底部
        return {
          position: 'absolute',
          bottom: 0
        }
      }
    },
    // 计算属性，获取购物车列表
    cartList() {
      return this.$store.state.shopCart.shopCartList
    }
  },
  mounted() {
    let id = localStorage.getItem('token')
    this.$store.dispatch('shopCart/getShopCart', id)
  },
  methods: {
    deleteById(id) {
      this.$store.dispatch('shopCart/deleteShopCart', id)
    }
  }
}
</script>

<style lang="less" scoped>
.cart_list_td {
  height: 140px;
}
.shop {
  min-height: 100%;
}
.shop_head {
  min-height: 100vh;
}
.foot,
.push {
  height: 204px;
}
.cart_list_td .col03,
.col04,
.col05 {
  margin-top: 0px;
}
.cart_list_td .col03 {
  margin-top: 10px;
}
/* ======== */
.total_count {
  width: 1200px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.total_count em {
  font-size: 16px;
  color: #ff4200;
  margin: 0 5px;
}
.cart_list_th {
  width: 1198px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  margin: 0 auto;
}
.cart_list_th li {
  height: 40px;
  line-height: 40px;
  float: left;
  text-align: center;
}
.cart_list_th .col01 {
  width: 26%;
}
.cart_list_th .col02 {
  width: 16%;
}
.cart_list_th .col03 {
  width: 13%;
}
.cart_list_th .col04 {
  width: 12%;
}
.cart_list_th .col05 {
  width: 15%;
}
.cart_list_th .col06 {
  width: 18%;
}

.cart_list_td {
  width: 1198px;
  border: 1px solid #ddd;
  background-color: #edfff9;
  margin: 0 auto;
  margin-top: -1px;
}
.cart_list_td li {
  height: 120px;
  line-height: 120px;
  float: left;
  text-align: center;
}

.cart_list_td .col01 {
  width: 4%;
}
.cart_list_td .col02 {
  width: 12%;
}
.cart_list_td .col03 {
  width: 10%;
}
.cart_list_td .col04 {
  width: 16%;
}
.cart_list_td .col05 {
  width: 13%;
}
.cart_list_td .col06 {
  width: 12%;
}
.cart_list_td .col07 {
  width: 15%;
}
.cart_list_td .col08 {
  width: 18%;
}

.cart_list_td .col02 img {
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  display: block;
  margin: 10px auto 0;
}
.cart_list_td .col03 {
  height: 48px;
  text-align: left;
  line-height: 24px;
  margin-top: 38px;
}
.cart_list_td .col03 em {
  color: #999;
}
.cart_list_td .col08 a {
  color: #666;
}

.cart_list_td .col06 .num_add {
  width: 98px;
  height: 28px;
  border: 1px solid #ddd;
  margin: 40px auto 0;
}
.cart_list_td .col06 .num_add a {
  width: 29px;
  height: 28px;
  line-height: 28px;
  background-color: #f3f3f3;
  font-size: 14px;
  color: #666;
}
.cart_list_td .col06 .num_add input {
  width: 38px;
  height: 28px;
  text-align: center;
  line-height: 30px;
  border: 0px;
  display: block;
  float: left;
  outline: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.settlements {
  width: 1198px;
  height: 100px;
  border: 1px solid #ddd;
  background-color: #fff4e8;
  margin: -1px auto 0;
}
.settlements li {
  line-height: 78px;
  float: left;
}
.settlements .col01 {
  width: 4%;
  text-align: center;
}
.settlements .col02 {
  width: 12%;
}
.settlements .col03 {
  width: 69%;
  height: 48px;
  line-height: 28px;
  text-align: right;
  margin-top: 10px;
}
.settlements .col03 span {
  color: #ff0000;
  padding-right: 5px;
}
.settlements .col03 em {
  color: #ff3d3d;
  font-size: 22px;
  font-weight: bold;
}
.settlements .col03 span {
  color: #ff0000;
}
.settlements .col03 b {
  color: #ff0000;
  font-size: 14px;
  padding: 0 5px;
}

.settlements .col04 {
  width: 14%;
  text-align: center;
  float: right;
}
.settlements .col04 a {
  display: block;
  height: 78px;
  background-color: #ff3d3d;
  text-align: center;
  line-height: 78px;
  color: #fff;
  font-size: 24px;
}
</style>
