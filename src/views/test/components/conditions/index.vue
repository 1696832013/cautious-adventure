<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span>昵称</span><input type="text" placeholder="昵称" style="width:150px"></div>
    <div class="conditions-wrapper_item"><span style="width:120px">所属学科</span>  <el-select placeholder="请选择" /></div>
    <div class="conditions-wrapper_item"><span>职位</span> <input placeholder="职位" style="width:150px"></div>
    <div class="conditions-wrapper_item"><span style="width:100px">工作年限</span>  <input type="text" style="width:50px" placeholder="起"> <input type="text" style="width:50px" placeholder="止"></div>
    <div class="conditions-wrapper_item"><span>手机号</span> <input placeholder="手机号"></div>
    <div class="conditions-wrapper_item"><el-button type="primary">搜索</el-button><el-button type="info">重置</el-button></div>
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
      margin-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 200px;
        span{
        border: 1px solid #DCDFE6;
            display: inline-block;
            width: 50px;
            font-size: 14px;
            height: 40px;
           line-height: 40px;
           text-align: center;
        }
        input{
          padding-left:10px ;
          display: inline-block;
          width: 100px;
          height: 40px;
          border: 1px solid #DCDFE6;
        }
    }
}
</style>
