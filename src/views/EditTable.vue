<template>
<div>
    <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Data Edit</h2>
    </div>
      <div class="form-group">
            <label>Name</label>
            <el-input
              v-model="data.name"
              id="name"
              type="text"
              disabled="disabled"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Ip</label>
            <el-input
              v-model="data.ıp"
              id="ıp"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Provider</label>
            <el-input
              v-model="data.provider"
              id="provider"
              type="text"
            ></el-input>
          </div>
          <br>
          <div class="form-group">
            <label>ConnectionString</label>
            <el-input
              v-model="data.connectionString"
              id="connectionString"
              type="text"
            ></el-input>
          </div>
        <br>
  <el-row>
    <el-button type="primary" icon="el-icon-arrow-left" @click="backpage('Database')">Database sayfasına dön</el-button>
    <el-button class="btn btn-primary" type="success" plain @click="Edit">Update</el-button>
   </el-row>
 </div>
</template>

<script>
import * as MODULE from '../store/constans/DatabaseModules'
import * as ACTION from '../store/constans/actions'
export default {
  data: function () {
    return {
      data: {}
    }
  },
  methods: {
    Edit () {
      this.$store.dispatch(`${MODULE.MODULE_DATABASE}/${ACTION.ACTION_DATABASE_UPDATE}`, this.data)
      localStorage.removeItem('databases')
      localStorage.setItem('databases', JSON.stringify(this.$store.state.databaseModule.databases))
      this.$message({
        type: 'success',
        message: 'Update completed'
      })
    },
    backpage (to) {
      this.$router.push({name: to})
    },
    inputdata () {
      let id = this.$route.params.id
      let localItem = JSON.parse(localStorage.getItem(MODULE.MODULE_DATABASE_TABLE))
      this.data = localItem.filter(x => x.name === id)[0]
    }
  },
  mounted () {
    this.inputdata()
  }
}
</script>
