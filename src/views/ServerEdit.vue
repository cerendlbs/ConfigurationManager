<template>
<div>
   <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Server Edit</h2>
    </div>
    <div class="form-group">
            <label>User</label>
            <el-input
              v-model="Data.user"
              id="user"
              type="text"
              disabled="disabled"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Ip</label>
            <el-input
              v-model="Data.ıp"
              id="ıp"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Provider</label>
            <el-input
              v-model="Data.provider"
              id="provider"
              type="text"
            ></el-input>
          </div>
   <br>
   <el-row>
       <el-button type="primary" icon="el-icon-arrow-left" @click="backpage('Server')">Server sayfasına dön</el-button>
       <el-button class="btn btn-primary" type="success" plain @click="edit">Update</el-button>
     </el-row>
 </div>
</template>

<script>
import * as MODULE from '../store/constans/ServerModules'
import * as ACTION from '../store/constans/serveractions'
export default {
  data: function () {
    return {
      Data: {}
    }
  },
  methods: {
    edit () {
      this.$store.dispatch(`${MODULE.MODULE_SERVER}/${ACTION.ACTION_SERVER_UPDATE}`, this.Data)
      localStorage.removeItem('servers')
      localStorage.setItem('servers', JSON.stringify(this.$store.state.serverModule.servers))
      this.$message({
        type: 'success',
        message: 'Update completed'
      })
    },
    backpage (to) {
      this.$router.push({name: to})
    },
    inputData () {
      let user = this.$route.params.user
      let localItems = JSON.parse(localStorage.getItem(MODULE.MODULE_SERVER_TABLE))
      this.Data = localItems.filter(x => x.user === user)[0]
    }
  },
  mounted () {
    this.inputData()
  }
}
</script>
