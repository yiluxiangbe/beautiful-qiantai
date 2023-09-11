<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header">
      <!-- 介绍 -->
      <p>爱吃草莓的派大星</p>
      <!-- 导航 -->
    </div>
    <!-- 登陆界面 -->
    <div class="tab">
      <form action="" @submit="submitLogin()">
        <!-- 账号登陆 -->
        <h1>账号登录</h1>
        <!-- 用户名 -->
        <input v-model="userLogin.username" type="username" class="username" id="username" placeholder="用户名" />
        <div v-if="$v.userLogin.username.$error">
          <span v-if="!$v.userLogin.username.required">username is required</span>
        </div>
        <!-- 密码 -->
        <input v-model="userLogin.password" type="password" class="password" id="password" placeholder="输入密码" />
        <!-- 多选框 -->
        <input type="checkbox" class="checkbox" /><span class="box1">三十天内免登录</span>
        <!-- 按钮 -->
        <input type="submit" class="button" id="login" value="登录" />
        <!-- 注册新账号 -->
        <a href="#">忘记密码</a>
        <router-link to="/register">注册新账号</router-link>
        <router-link to="/home">返回</router-link>
      </form>
    </div>

    <Trail></Trail>
  </div>
</template>

<script>
// 表单验证的包
import { required, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

import { reqLogin } from '@/api/index.js'
export default {
  name: 'Login',
  mixins: [validationMixin],
  data() {
    return {
      // 用户登录
      userLogin: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  validations: {
    userLogin: {
      username: { required },
      password: { required }
    }
  },
  mounted() {
    // this.reqLogin(this.userLogin)
  },
  methods: {
    // 点击按钮登录
    async submitLogin() {
      console.log(111)
      if (!this.$v.$invalid) {
        // 表单通过验证，执行提交逻辑
        // ...
        const result = await reqLogin(JSON.stringify(this.userLogin))
        console.log(result)
        if (result.data.code === 1) {
          // 如果登录成功，存储token
          localStorage.setItem('token', result.data.data.id)
          this.$router.push('/home')
        }
        if (result.data.code === 0) {
          alert('登录名或则密码输入错误')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
/* 图片img对齐行内块或则行内元素(中间对齐) */
img {
  vertical-align: middle;
}
/* 去除input默认样式 */
input {
  border: none;
  outline: none;
  color: #333;
}

.login {
  background-image: url(../../assets/login_banner.jpg);
  background-size: cover;
}
/* 头部 */
.header {
  height: 70px;
  width: 1220px;
  margin: 0 auto;
}
.header img {
  float: left;
}
.header p {
  float: left;
  height: 17px;
  margin: 28px;
  padding-left: 22px;
  border-left: 1px solid #b8bdcf;
  color: #888;
  font-size: 16px;
}
.header .nav1 li {
  float: right;
  line-height: 70px;
  padding: 7px;
}
.header .nav2 li {
  float: right;
  line-height: 70px;
  padding: 7px;
}
.header ul li a {
  font-size: 12px;
}
.header .border {
  display: inline-block;
  height: 12px;
  border-right: #b8bdcf 1px solid;
}

/* 登陆界面 */
.tab {
  height: 480px;
  width: 400px;
  /* background-color: pink; */
  background-color: #fff;
  opacity: 0.7;
  border-radius: 20px;
  margin: 0 auto;
}

.tab h1 {
  text-align: center;
  font-size: 24px;
  padding-top: 48px;
}
.tab .username {
  display: block;
  height: 51px;
  width: 294px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 28px;
  padding-left: 14px;
}
.tab .username:hover {
  border: #299e59 1px solid;
}
.tab .username::placeholder {
  font-size: 14px;
  color: #b8bdcf;
}
.tab .password {
  display: block;
  height: 51px;
  width: 294px;
  border-radius: 8px;
  margin: 0 auto;
  padding-left: 14px;
  margin-top: 28px;
}
.tab .password:hover {
  border: #299e59 solid 1px;
}
.tab .password::placeholder {
  font-size: 14px;
  color: #b8bdcf;
}
.tab .checkbox {
  display: inline-block;
  margin-left: 52px;
  margin-top: 24px;
  height: 18px;
  width: 18px;
  vertical-align: bottom;
}

.tab .box1 {
  font-size: 14px;
  color: #585e6d;
  margin-left: 8px;
}
.tab .button {
  display: block;
  height: 51px;
  width: 294px;
  border-radius: 8px;
  margin: 0 auto;
  padding-left: 14px;
  margin-top: 28px;
  background-color: #299e59;
  color: #fff;
  font-size: 20px;
}
.tab a {
  display: inline-block;
  margin-top: 22px;
  margin-left: 51px;
  font-size: 14px;
}
</style>
