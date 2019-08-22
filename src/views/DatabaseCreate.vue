<template>
  <div class="conteiner">
    <div class="row">
          <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Database Insertion </h2>
    </div>
          <br />
         <el-row :gutter="20">
          <div class="form-group">
            <label>Name</label>
            <el-input
              :span="6"
              placeholder="Name giriniz..."
              v-model="data.name"
              id="name"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Ip</label>
            <el-input
              :span="6"
              placeholder="Ip giriniz..."
              v-model="data.ıp"
              id="ıp"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Provider</label>
            <el-input
              :span="6"
              placeholder="Provider giriniz..."
              v-model="data.provider"
              id="provider"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>ConnectionString</label>
            <el-input
              :span="6"
              placeholder="connectionString giriniz..."
              v-model="data.connectionString"
              id="connectionString"
              type="text"
            ></el-input>
          </div>
         </el-row>
          <br />
          <el-row>
          <el-button type="primary" icon="el-icon-arrow-left" @click="backpage('Database')" >Database sayfasına dön</el-button>
          <el-button class="btn btn-primary" type="success" :plain="true" :disabled="SaveEnabled"  @click="add">Kaydet</el-button>
          </el-row>
    </div>
  </div>
</template>

<script>
import * as MODULE from '../store/constans/DatabaseModules'
import * as ACTIONS from '../store/constans/actions'
export default {
  data: function () {
    return {
      data: {
        name: '',
        ıp: '',
        provider: '',
        connectionString: ''
      }
    }
  },
  methods: {
    add () {
      if (this.kontrol()) {
        let _data = Object.assign({}, this.data)
        this.$store.dispatch(`${MODULE.MODULE_DATABASE}/${ACTIONS.ACTION_DATABASE_ADD}`, _data)
        let localItems = JSON.parse(localStorage.getItem('databases') || '[]')
        localItems.push(this.data)
        localStorage.setItem('databases', JSON.stringify(localItems))
        this.$message({
          message: 'Registration Successful ! ',
          type: 'success'
        })
      }
    },
    backpage (value) {
      this.$router.push({name: value})
    },
    kontrol () {
      let _databases = [...this.$store.state.databaseModule.databases]
      let database = _databases.filter(x => x.name === this.data.name)[0]
      if (database) {
        this.$message({
          message: 'Warning, Başka bir isim giriniz...',
          type: 'warning'
        })
        return false
      } else {
        return true
      }
    }
  },
  computed: {
    SaveEnabled () {
      if (this.data.name.length > 0 && this.data.ıp.length > 0 && this.data.provider.length > 0 && this.data.connectionString.length > 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
