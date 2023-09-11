<template>
  <div class="search wrap">
    <Head></Head>
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
    <Trail></Trail>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style></style>
