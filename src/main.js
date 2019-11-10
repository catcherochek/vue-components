import Vue from 'vue'
import App from './App.vue'
import jsoner from './modules/jsoner'
Vue.prototype.$jsoner =  new jsoner();
Vue.prototype.$jsoner.add({
  route:"http://symf4.test/read",
  method:"GET",
},"login24");
//ddd.execute("login24", {},(okgoogle)=>console.log("ok"),()=>console.log("notok"));
console.log();


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
