<template>
  <div>
    <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Servers</h2>
    </div>
    <el-table :data="servers" >
        <el-table-column prop="user" label="User" width="180"></el-table-column>
        <el-table-column prop="ıp" label="Ip" width="180"></el-table-column>
        <el-table-column prop="provider" label="Provider" ></el-table-column>
        <el-table-column label="Operations" width="130">
          <template slot-scope="scope">
            <el-button type="warning" icon="el-icon-edit" size="small" round @click="edit('ServerEdit', scope.$index, scope.row)" />
            <el-button type="danger"  icon="el-icon-delete" size="small" round @click="Delete(scope.$index, scope.row)" />
          </template>
        </el-table-column>
    </el-table>
    <br>
    <el-button @click="views('ServerCreate')" type="primary" >Yeni Kayıt Ekle</el-button>
  </div>
</template>

<script>
import * as MODULE from '../store/constans/ServerModules'
import * as ACTION from '../store/constans/serveractions'
export default {
  data () {
    return {
      Data: []
    }
  },
  computed: {
    servers () {
      return this.$store.state.serverModule.servers
    }
  },
  methods: {
    views (to) {
      this.$router.push({ name: to })
    },
    get () {
      var servers = JSON.parse(localStorage.getItem(MODULE.MODULE_SERVER_TABLE) || '[]')
      this.$store.dispatch(`${MODULE.MODULE_SERVER}/${ACTION.ACTION_SERVER_SET}`, servers)
    },
    edit (to, index, row) {
      this.$router.push({ name: to, params: {user: row.user} })
    },
    Delete (index, row) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch(`${MODULE.MODULE_SERVER}/${ACTION.ACTION_SERVER_DELETE}`, row.user)
        localStorage.removeItem('servers')
        localStorage.setItem('servers', JSON.stringify(this.$store.state.serverModule.servers))
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        //
      })
    }
  },
  mounted () {
    if (this.$store.state.serverModule.servers.length === 0) {
      this.get()
    }
  }
}
</script>
