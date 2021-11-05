<template>
  <div>
    <switch-roles @change="handleRolesChange" />
    <list-test />
  </div>
</template>

<script>
import ListTest from '@/views/test/index.vue'
import SwitchRoles from './components/SwitchRoles'
export default {
  name: 'PagePermission',
  components: {
    ListTest,
    SwitchRoles
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/permission/index?' + +new Date() })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
