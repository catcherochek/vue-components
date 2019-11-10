<template>
  <div id="app">
    <TableView :msgg = "myval" />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import TableView from './components/TableView'


export default {
  name: 'app',
  data:function(){
    return{
      myval:[{"day":"Sat280412","team1":"WiganAthletic","count":"4-0","team2":"NewcastleUnited"},
        {"day":"Sat280412","team1":"Sunderland","count":"2-2","team2":"BoltonWanderers"}],
    }
  },

  methods: {
    sayhi:function (event) {

    },
    binderr:function (res) {
      //console.log(res);
      res.forEach(element => {
        console.log(element);
        this.myval.push(element);
      });

     // console.log(this.myval);
    }
  },
  mounted: function () {

      this.$jsoner.execute("login24",{},this.binderr,()=>console.log("error"));
    //this.$jsoner.test();
    },

  components: {
    TableView,
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
