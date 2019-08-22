<template>
  <div>
    <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Databases</h2>
    </div>
    <el-table :data="databases" >
        <el-table-column prop='name' label="Name" width="100" />
        <el-table-column prop='ıp' label="Ip" width="100" />
        <el-table-column prop='provider' label="Provider" width="120" />
        <el-table-column prop='connectionString' label="ConnectionStrig" />
        <el-table-column label="Operations" width="130">
          <template slot-scope="scope">
            <el-button type="warning" icon="el-icon-edit" size="small" round @click="Edit('EditTable', scope.$index, scope.row)" />
            <el-button type="danger"  icon="el-icon-delete" size="small" round @click="Delete(scope.$index, scope.row)" />
          </template>
        </el-table-column>
    </el-table>
    <br />
    <el-button @click="views('DatabaseCreate')" type="primary" >Yeni Kayıt Ekle</el-button>
  </div>
</template>

<script>
import * as MODULE from '../store/constans/DatabaseModules'
import * as ACTION from '../store/constans/actions'

export default {
  data: function () {
    return {
      data: []
    }
  },
  computed: {
    databases () {
      return this.$store.state.databaseModule.databases
    }
  },
  methods: {
    views (to) {
      this.$router.push({ name: to })
    },
    get () {
      var databases = JSON.parse(localStorage.getItem(MODULE.MODULE_DATABASE_TABLE) || '[]')
      this.$store.dispatch(`${MODULE.MODULE_DATABASE}/${ACTION.ACTION_DATABASE_SET}`, databases)
    },
    Edit (to, index, row) {
      this.$router.push({name: to, params: { id: row.name }})
    },
    Delete (index, row) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch(`${MODULE.MODULE_DATABASE}/${ACTION.ACTION_DATABASE_DELETE}`, row.name)
        localStorage.removeItem('databases')
        localStorage.setItem('databases', JSON.stringify(this.$store.state.databaseModule.databases))
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
    if (this.$store.state.databaseModule.databases.length === 0) {
      this.get()
    }
  }
}
</script>
