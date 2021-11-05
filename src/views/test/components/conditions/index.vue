<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span>昵称</span> <el-input placeholder="昵称" /></div>
    <div class="conditions-wrapper_item"><span>所属学科</span> <el-input /></div>
    <div class="conditions-wrapper_item"><span>职位</span> <el-input placeholder="职位" /></div>
    <div class="conditions-wrapper_item"><span>工作年限</span> <el-input /></div>
    <div class="conditions-wrapper_item"><span>手机号</span> <el-input placeholder="手机号" /></div>

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
        border: 1px solid #DCDFE6;
        margin-left: 20px;
        border-radius: 5px;
        width: 200px;
        span{
            display: inline-block;
            width: 80px;
            font-size: 14px;
        }
        el-input{
          width: 100px;
        }
    }
}
</style>
