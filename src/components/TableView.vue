<!--

  Simple TableView  component for view from json arrays
  use json array like [{key:val,key2:val2,...},{key:val,key2:val2,...},.....]
  component will bootstrap table like:
  key   key2
  val  val2

 -->
<template>

  <table class="striped col l9 center-align" >
    <thead>
    <tr>
      <th v-for="item in items">{{item}}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="val in valss">
      <td v-for="va in val">{{va}}</td>
    </tr>

    </tbody>
  </table>
</template>

<script>

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons/iconfont/material-icons.css'

var arr = 1;

//var keyNames = Object.keys(arr[1]);

console.log(arr[1]);
export default {
  name: 'TableView',
  data: function() {
    return {
      items:[],
      valss:[],
    }
  },
  props: {
    msgg: Array
  },
  mounted: function () {
    if (Array.isArray(this.msgg)){
      this.items = Object.keys(this.msgg[1]);
      this.valss = this.msgg;
    }


    console.log(this.msgg);
    this.valss = this.msgg;

  }
}
</script>

<style scoped>

</style>
