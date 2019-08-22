<template>
  <div class="line">
    <el-row>
      <appNavbar></appNavbar>
      <el-row :gutter="20" style="margin-top:15px;">
        <el-col :span="20" :offset="2">
          <el-card class="box-card">
            <router-view></router-view>
          </el-card>
        </el-col>
      </el-row>
      <br />
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style >
@import "./styles/index.css";
</style>
