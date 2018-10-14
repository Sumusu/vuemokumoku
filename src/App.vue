<template>
  <div>
    <div class="ui fixed inverted menu">
      <div class="ui container"> 
        <router-link class="header item"
          :to="{name:'EventList'}">
          調整さんもどき
        </router-link>
        <router-link class="item"
          :to="{name:'NewEvent'}">
          アンケート新規作成
        </router-link>
        <a 
        class="item"
        v-if="0 !== 0"
        @click.stop="logOut()">ログアウト</a>
      </div>
    </div>
    <div class="ui main container marginup" style="min-height:322px">
      <router-view/>  
    </div>  
    <div class="ui inverted vertical footer segment">
      <div class="ui container"> 
        <div class="header">サンプルフッター </div>
        <p>サンプル宛先</p>
      </div>
    </div>
  </div>
</template>
 
<script>


export default {
  name: 'App',
  data() {
    return {
     login:"",
    };
  },
  
  methods: {
    logOut() {
      alert('ログアウト')
    },
  },
}
 
</script>

<style>

 .marginup{
    margin : 80px 0px 0px 0px;
  }
  .margin2{
    margin : 0px 0px 80px 0px;
  }
  .margin{
    margin : 0px 0px 40px 0px;
  }
  .headermargin{
     margin : 0px 0px 100px 0px; 
  }
  .outer {

    width: 100%;
    overflow-x:scroll;
  }
  .allmargin{
    margin : 20px 20px 20px 20px;
  }
  table {
    border-collapse: collapse;
    
  }
  .ui.menu .header.item, .ui.vertical.menu .header.item {
    font-weight: normal;
}
  
</style>
