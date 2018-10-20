//作为插件使用，需要时弹出，this.$toast 在prototype里面引入$toast插件 toast组件单独写在组件中
import Toast from './toast'
function createToast({Vue,message,propsData, onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})//用户传入propsdata
  toast.$slots.default = [message]
  //传值方法注意
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast;
}
let currentToast;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {//j见appvue
      if(currentToast){
        currentToast.close()
      }
      //
      currentToast = createToast({Vue,message,propsData:toastOptions,onClose:()=>{currentToast = null}});
    }
  }
}