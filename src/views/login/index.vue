<template>
  <div class="login_bg">
    <el-row>
      <!-- 屏幕宽度<768px的时候,占位为0 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col class="login_form" :span="12">
        <el-form
          ref="ruleFormRef"
          class="login_form_bg"
          :model="fomrData"
          :rules="rules"
        >
          <el-form-item prop="username">
            <el-input
              v-model="fomrData.username"
              placeholder="username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="fomrData.password"
              placeholder="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            class="login_bt"
            type="primary"
            @click="submit(ruleFormRef)"
          >
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="login111">
import { reactive, ref } from 'vue'
import userStore from '@/store/moduls/user.ts'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import type { FormInstance, FormRules } from 'element-plus'

let fomrData = reactive({
  username: 'admin',
  password: 'atguigu123',
})
// 获取store实例
let userstore = userStore()
// 获取router实例
let router = useRouter()
let route = useRoute()
// 获取ref实例 名称要与html中的ref一致
const ruleFormRef = ref<FormInstance>()
// 自定义表单验证
const validatePass = (rule: any, value: any, callback: any) => {
  // rule：校验规则对象
  // value：表单元素文本内容
  // callback：符合条件放行callback()
  // 不符合条件也放行但是要注入错误信息callback("不能为空")
  if (value.length >= 5) {
    callback()
  } else {
    callback('账号长度至少5位')
  }
}
// 表单验证
let rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'change' }],
})
// 提交并校验是否输入  不用传参，直接用ruleFormRef.validate()也可以
const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 返回一个promise可以用.then或者async/await
      try {
        await userstore.loginAPI(fomrData)
        ElNotification({
          type: 'success',
          message: '欢迎回来',
          title: `Hi,${getTime()}好`,
        })
        let redirect: string = route.query.redirect as string
        router.push(redirect || '/')
      } catch (error) {
        ElNotification({
          type: 'error',
          message: error as any,
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped lang="scss">
.login_bg {
  height: 100vh;
  width: 100%;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    height: 100vh;
    .login_form_bg {
      width: 60vh;
      position: relative;
      top: 40vh;
      left: 50px;
      padding: 20px;
      background: url('@/assets/images/login_form.png') no-repeat;
      background-size: cover;
      .login_bt {
        width: 100%;
      }
    }
  }
}
</style>
