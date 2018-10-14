<template>

  <div style="padding-top: 40px;padding-bottom :40px" class="margin">
    <div class="ui raised very padded container segment">
      <h2 class="ui header">
        <i class="pencil alternate icon"></i>
        <div class="content"><div class="sub header">Welcome to</div>サンプル
        </div>
      </h2>
     
      <div class="margin"></div>
      <!-- <h4 class="ui horizontal divider header">MENU </h4> -->
      <div class="ui three item menu margin">
        <a class="item" @click="signin()"><i class="sign-in icon"></i>Login</a>
        <a class="item" @click="help()"><i class="question circle outline icon"></i>Help</a>
        <!-- <a class="item" @click="info()"><i class="info icon"></i>info</a> -->
      </div>
      <div class="margin"></div>
    </div>
  
  </div>

</template>

<script>
export default {
  data() {
    return {
      item:"",
      ID:null
    };
  },
  beforeCreate(){
  },
  methods:{
    signin(){
    },
    help(){
      this.$router.push({
        name: "Help",
      })
    },
    info(){
      this.$router.push({
        name: "Info",
      })
    }
  }
  
}
</script>

