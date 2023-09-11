<template>
  <div class="head">
    <!-- 顶部开始 -->
    <div class="container">
      <div class="logo">
        <a href="./index.html">X-admin v2.2</a>
      </div>
      <div class="left_open">
        <a><i title="展开左侧栏" class="iconfont">&#xe699;</i></a>
      </div>
      <ul class="layui-nav left fast-add" lay-filter="">
        <li class="layui-nav-item">
          <a href="javascript:;">+新增</a>
          <dl class="layui-nav-child">
            <!-- 二级菜单 -->
            <dd>
              <a onclick="xadmin.open('最大化','http://www.baidu.com','','',true)"> <i class="iconfont">&#xe6a2;</i>弹出最大化</a>
            </dd>
            <dd>
              <a onclick="xadmin.open('弹出自动宽高','http://www.baidu.com')"> <i class="iconfont">&#xe6a8;</i>弹出自动宽高</a>
            </dd>
            <dd>
              <a onclick="xadmin.open('弹出指定宽高','http://www.baidu.com',500,300)"> <i class="iconfont">&#xe6a8;</i>弹出指定宽高</a>
            </dd>
            <dd>
              <a onclick="xadmin.add_tab('在tab打开','member-list.html')"> <i class="iconfont">&#xe6b8;</i>在tab打开</a>
            </dd>
            <dd>
              <a onclick="xadmin.add_tab('在tab打开刷新','member-del.html',true)"> <i class="iconfont">&#xe6b8;</i>在tab打开刷新</a>
            </dd>
          </dl>
        </li>
      </ul>
      <ul class="layui-nav right" lay-filter="">
        <li class="layui-nav-item">
          <a href="javascript:;">admin</a>
          <dl class="layui-nav-child">
            <!-- 二级菜单 -->
            <dd>
              <a onclick="xadmin.open('个人信息','http://www.baidu.com')">个人信息</a>
            </dd>
            <dd>
              <a onclick="xadmin.open('切换帐号','http://www.baidu.com')">切换帐号</a>
            </dd>
            <dd>
              <router-link to="/admin/login">退出</router-link>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item to-index">
          <a href="/">前台首页</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHead'
}
</script>

<style lang="less" scoped>
/*登录样式*/
/*头部*/
.container {
  width: 100%;
  height: 45px;
  background-color: #222;
}
.container a,
.layui-nav .layui-nav-item a {
  color: #fff;
}
.container .logo a {
  background-color: rgba(0, 0, 0, 0);
}
.container .logo a {
  float: left;
  font-size: 18px;
  padding-left: 20px;
  line-height: 45px;
  width: 200px;
}
.container .right {
  background-color: rgba(0, 0, 0, 0);
  float: right;
}
.container .left_open {
  height: 45px;
  float: left;
  margin-left: 10px;
}
.container .left_open i {
  display: block;
  background: rgba(255, 255, 255, 0.1);
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  text-align: center;
  margin-top: 7px;
  cursor: pointer;
}
.container .left_open i:hover {
  background: rgba(255, 255, 255, 0.3);
}

.container .left {
  background-color: rgba(0, 0, 0, 0);
  float: left;
}
.container .layui-nav-item {
  line-height: 45px;
}
.container .layui-nav-more {
  top: 20px;
}
.container .layui-nav-child {
  top: 50px;
}
.container .layui-nav-child i {
  margin-right: 10px;
}
.layui-nav .layui-nav-item a {
  cursor: pointer;
}
.layui-nav .layui-nav-child a {
  color: #333;
  cursor: pointer;
}
</style>
