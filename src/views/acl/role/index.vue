<template>
  <TemplateMain>
    <template #main>
      <permission></permission>
    </template>
  </TemplateMain>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
defineOptions({
  name: 'Role',
})
</script>

<style scoped lang="scss"></style>
