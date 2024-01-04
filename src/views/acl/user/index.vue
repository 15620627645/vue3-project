<template>
  <TemplateMain>
    <template #button>
      <el-button type="primary">{{ $t('button.add') }}</el-button>
      <el-button type="primary">{{ $t('button.delete') }}</el-button>
    </template>
    <template #main>
      <el-form :inline="true">
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="请输入用户信息"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-permission="'cuser.detail'" type="primary">
            {{ $t('button.search') }}
          </el-button>
          <el-button v-permission="'cuser.update'" type="primary">
            重置
          </el-button>
        </el-form-item>
      </el-form>
      <el-table border :data="tableData" style="margin-bottom: 10px">
        <el-table-column
          label="#"
          type="selection"
          align="center"
          width="50px"
        />
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="用户名字" />
        <el-table-column prop="username" label="用户名称" />
        <el-table-column prop="roleName" label="角色名称">
          <template #default="{ row }">
            <div v-if="row.roleName != ''">
              <el-tag
                style="margin: 2px"
                v-for="(item, index) in row.roleName.split(',')"
                :key="index"
              >
                {{ item }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" />
        <el-table-column label="操作">
          <template #default>
            <el-button link type="primary">{{ $t('button.edit') }}</el-button>
            <el-button link type="primary">分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        v-model:current-page="page"
        v-model:page-size="limit"
        layout=" prev, pager, next, jumper,->,total, sizes,"
        :total="total"
        :page-sizes="[3, 5, 10]"
        @size-change="getTableData"
        @current-change="getTableData"
      />
    </template>
  </TemplateMain>
</template>

<script setup lang="ts">
defineOptions({
  name: 'User',
})
import { ref, onMounted } from 'vue'
import { getUserTable } from '@/api/user/index.ts'
let tableData = ref<string[]>([])
let page = ref<number>(1)
let limit = ref<number>(3)
let total = ref<number>(0)
let username = ref('')
const getTableData = () => {
  getUserTable({ page: page.value, limit: limit.value }).then((res) => {
    tableData.value = res.data.records
    total.value = res.data.total
  })
}
onMounted(() => {
  getTableData()
})
</script>

<style scoped lang=""></style>
