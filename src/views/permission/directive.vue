<template>
  <div>
    <switch-roles @change="handleRolesChange" />
    <form-test />
  </div>
</template>

<script>
import FormTest from '@/views/rendless/index'
import SwitchRoles from './components/SwitchRoles.vue'
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
export default {
  name: 'DirectivePermission',
  components: {
    FormTest,
    SwitchRoles
  },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令: value
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
