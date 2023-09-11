<template>
  <div class="nav">
    <div class="navbar_con">
      <div class="navbar clearfix">
        <div class="subnav_con fl">
          <h1>全部商品分类</h1>
          <span></span>
          <ul class="subnav">
            <li><a href="#" class="fruit">新鲜水果</a></li>
            <li><a href="#" class="seafood">海鲜水产</a></li>
            <li><a href="#" class="meet">猪牛羊肉</a></li>
            <li><a href="#" class="egg">禽类蛋品</a></li>
            <li><a href="#" class="vegetables">新鲜蔬菜</a></li>
            <li><a href="#" class="ice">速冻食品</a></li>
          </ul>
        </div>
        <ul class="navlist fl">
          <li><a href="index.html">首页</a></li>
          <li class="interval">|</li>
          <li><a href="#">手机生鲜</a></li>
          <li class="interval">|</li>
          <li><a href="#">抽奖</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="less" scoped>
/* 菜单样式 */
.navbar_con {
  height: 40px;
  border-bottom: 2px solid #39a93e;
}

.navbar {
  width: 1200px;
  margin: 0 auto;
}
.navbar h1 {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #39a93e;
}

.navbar .subnav_con {
  width: 200px;
  height: 40px;
  background-color: #39a93e;
  position: relative;
  cursor: pointer;
}

.navbar .subnav_con h1 {
  position: absolute;
  left: 0;
  top: 0;
  text-align: left;
  text-indent: 40px;
}

.navbar .subnav_con span {
  display: block;
  width: 16px;
  height: 9px;
  /* background: url(./images/down.png) no-repeat; */
  position: absolute;
  right: 27px;
  top: 16px;
  transition: all 300ms ease-in;
}

.navbar .subnav_con:hover span {
  transform: rotateZ(180deg);
}

.navbar .subnav_con .subnav {
  position: absolute;
  left: 0;
  top: 40px;
  display: none;
  border-top: 2px solid #39a93e;
}

.navbar .subnav_con:hover .subnav {
  display: block;
}

.navlist {
  margin-left: 34px;
}

.navlist li {
  height: 40px;
  float: left;
  line-height: 40px;
}

.navlist li a {
  color: #666;
  font-size: 14px;
}

.navlist li a:hover {
  color: #ff8800;
}
.navlist .interval {
  margin: 0 15px;
}

/* 商品信息样式 */
.breadcrumb {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
}
.breadcrumb a {
  line-height: 40px;
  color: #37ab40;
}
.breadcrumb a:hover {
  color: #ff8800;
}
.breadcrumb span {
  line-height: 40px;
  color: #666;
  padding: 0 5px;
}
</style>
