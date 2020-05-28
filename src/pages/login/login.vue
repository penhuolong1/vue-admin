<template>
  <div class="login-wrapper">
    <el-form
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
      class="login-form"
    >
      <h4>系统登录</h4>
      <el-form-item label="" prop="name">
        <el-input  v-model="loginForm.name" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="" prop="pwd">
        <el-input v-model="loginForm.pwd" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-button class="login-button" type="primary" :loading="loading" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        name: 'admin',
        pwd: '123456'
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  props: {

  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    login () {
      console.log(this.$refs.loginForm)
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          this.$store.dispatch('login', {name: this.loginForm.name}).then(code => {
            if (code === 200) {
              this.$router.push('/')
            }
          })
        } else {
          console.log('验证失败')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/styles/variables.scss';
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: $loginBc;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 300px;
    h4 {
      font-size: 26px;
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
    }
    .login-button {
      width: 100%;
    }
  }
}
</style>
