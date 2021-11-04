<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span>昵称</span> <el-input /></div>
    <div class="conditions-wrapper_item"><span>昵称</span> <el-input /></div>
    <div class="conditions-wrapper_item"><span>昵称</span> <el-input /></div>
    <div class="conditions-wrapper_item"><span>昵称</span> <el-input /></div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conditions-wrapper{
    display: flex;
    align-items: center;
    &_item{
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            display: inline-block;
            margin-right: 20px;
        }
    }
}
</style>
