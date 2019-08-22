<template>
  <div class="conteiner">
    <div class="row">
          <div slot="header" class="clearfix">
      <h2 style="margin-block-start:0;margin-block-end:5px;">Server Insertion</h2>
    </div>
          <br />
          <div class="form-group">
            <label>User</label>
            <el-input
              placeholder="User giriniz..."
              v-model="Data.user"
              id="user"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Ip</label>
            <el-input
              placeholder="Ip giriniz..."
              v-model="Data.ıp"
              id="ıp"
              type="text"
            ></el-input>
          </div>
          <br />
          <div class="form-group">
            <label>Provider</label>
            <el-input
              placeholder="Provider giriniz..."
              v-model="Data.provider"
              id="provider"
              type="text"
            ></el-input>
          </div>
          <br>
          <el-row>
          <el-button type="primary" icon="el-icon-arrow-left" @click="backpage('Server')" >Server sayfasına dön</el-button>
          <el-button class="btn btn-primary" type="success" :plain="true" :disabled="SaveEnabled"  @click="Add" >Kaydet</el-button>
          </el-row>
    </div>
  </div>
</template>

<script>
import * as MODULE from '../store/constans/ServerModules'
import * as ACTIONS from '../store/constans/serveractions'
export default {
  data: function () {
    return {
      Data: {
        user: '',
        ıp: '',
        provider: ''
      }
    }
  },
  methods: {
    Add () {
      if (this.kontrol()) {
        let _Data = Object.assign({}, this.Data)
        this.$store.dispatch(`${MODULE.MODULE_SERVER}/${ACTIONS.ACTION_SERVER_ADD}`, _Data)
        let localItem = JSON.parse(localStorage.getItem('servers') || '[]')
        localItem.push(this.Data)
        localStorage.setItem('servers', JSON.stringify(localItem))
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
      let _servers = [...this.$store.state.serverModule.servers]
      let server = _servers.filter(x => x.user === this.Data.user)[0]
      if (server) {
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
      if (this.Data.user.length > 0 && this.Data.ıp.length > 0 && this.Data.provider.length > 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
