import Toast from './toast'
export default{
  //动态创建组件
  install(Vue,options){
    Vue.prototype.$toast = function(msg){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [msg]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}