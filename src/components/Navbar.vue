<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">{{msg}}</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li v-for="item in menublocks">
            <a :href="item.href">{{item.name}}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar',

    props: {
      menublocks: Array,
      msg:String,
    },

    mounted: function () {
      //console.log(menublocks);
    }

  }
</script>

<style scoped>

</style>
