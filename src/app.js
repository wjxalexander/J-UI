import Vue from 'vue'
import Button from './button'
import Groupbutton from './groupbutton'
import Icon from './icon'
import Input from './input'
import Tab from './tab'
import Tabnav from './tabnav'
import Tabitem from './tabitem'
import Tabpanel from './tabpanel'
import Tabbody from './tabbody'
import Plugin from './plugin'
import Popover from './popover'
import Collapse from './collapse'

Vue.component('j-button', Button)
Vue.component('j-buttongroup', Groupbutton)
Vue.component('j-icon',Icon)
Vue.component('j-input',Input)
Vue.component('j-tab',Tab)
Vue.component('j-tabnav',Tabnav)
Vue.component('j-tabitem',Tabitem)
Vue.component('j-tabpannel',Tabpanel)
Vue.component('j-tabbody',Tabbody)
Vue.component('j-popover', Popover)
Vue.component('j-collapse',Collapse)
Vue.use(Plugin)//
new Vue({
    el: '#app',
    data:{
        message: '',
        currentTab:'education',
    },
    created(){
    },
    methods:{
      showToast(position) {
        this.$toast('hi', {
          enableHtml: false,
          position: position,
          //回调
          closeButton: {
            text: 'close',
            callback() {
              console.log('用户提前点击')
            }
          },

        })
      },
        showErro(){
            console.warn('请检查用户名')
            return '用户名不符合规则'
        }
    },

    
})
