<template>
  <div class="register">
    <!-- 头部 -->
    <div class="header">
      <!-- 介绍 -->
      <p>爱吃草莓的派大星</p>
      <!-- 导航 -->
    </div>
    <!-- 登陆界面 -->
    <div class="tab">
      <form action="" @submit="submitRegister()">
        <!-- 账号登陆 -->
        <h1>账户注册</h1>
        <!-- 用户名 -->
        <input v-model="userRegister.username" type="username" class="username" id="username" placeholder="用户名" />
        <span v-if="$v.userRegister.username.$error">username must be required</span>
        <!-- 密码 -->
        <input v-model="userRegister.password" type="password" class="password" id="password" placeholder="输入密码" />
        <!-- 密码 -->
        <input v-model="userRegister.confirmPassword" type="password" class="confirmPassword" id="confirmPassword" placeholder="再次输入密码" />
        <!-- 密码 -->
        <input v-model="userRegister.email" type="email" class="email" id="email" placeholder="输入邮箱" />
        <!-- 按钮 -->
        <input type="submit" class="button" id="register" value="注册" />

        <router-link to="/login">返回登录</router-link>
      </form>
    </div>

    <Trail></Trail>
  </div>
</template>

<script>
// 表单验证的包
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

import { reqRegister } from '@/api/index.js'
export default {
  name: 'Register',
  mixins: [validationMixin],
  data() {
    return {
      // 用户登录
      userRegister: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      }
    }
  },
  validations: {
    userRegister: {
      username: { required },
      password: { required },
      confirmPassword: {
        required,
        sameAs: sameAs('password') // 使用sameAs校验器
      },
      email: {
        required,
        email
      }
    }
  },
  mounted() {
    // this.reqLogin(this.userRegister)
  },
  methods: {
    // 点击按钮注册
    async submitRegister() {
      if (!this.$v.$invalid) {
        // 表单通过验证，执行提交逻辑
        // ...
        console.log(111)
        const result = await reqRegister(JSON.stringify(this.userRegister))
        console.log(result)
        if (result.data.code === 1) {
          this.$router.push('/login')
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

.register {
  background-image: url(../../assets/register_banner.jpg);
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
  height: 520px;
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
.tab .confirmPassword {
  display: block;
  height: 51px;
  width: 294px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 28px;
  padding-left: 14px;
}
.tab .confirmPassword:hover {
  border: #299e59 1px solid;
}
.tab .confirmPassword::placeholder {
  font-size: 14px;
  color: #b8bdcf;
}
.tab .email {
  display: block;
  height: 51px;
  width: 294px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 28px;
  padding-left: 14px;
}
.tab .email:hover {
  border: #299e59 1px solid;
}
.tab .email::placeholder {
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
  margin-left: -4px;
  font-size: 14px;
}
</style>
