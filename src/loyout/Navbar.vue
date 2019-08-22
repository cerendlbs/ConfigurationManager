<template>
  <div class="line">
    <el-menu :default-active= "currentRoute" class="el-menu-demo" mode="horizontal">
      <el-menu-item index= "Database" @click="_navigate('Database')">Database</el-menu-item>
      <el-menu-item index= "Server" @click="_navigate('Server')">Server</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      currentRoute: null
    }
  },
  methods: {
    _navigate (to) {
      console.log(to)
      this.$router.push({ name: to })
    },
    getCurrentRoute () {
      this.currentRoute = this.$router.currentRoute.name
    }
  },
  mounted () {
    this.getCurrentRoute()
  }
}
</script>
