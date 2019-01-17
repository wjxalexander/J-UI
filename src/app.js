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
import Carousel from './carousel'
import Carouselitem from './carouselitem'
import Carouselcontrol from './carouselcontrol'
import Col from './col'
import Row from './row'
import Switch from './switch'
import Pagination from './Pagination'

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
Vue.component('j-carousel',Carousel)
Vue.component('j-carouselitem',Carouselitem)
Vue.component('j-carouselcontrol',Carouselcontrol)
Vue.component('j-col',Col)
Vue.component('j-row',Row)
Vue.component('j-switch',Switch)
Vue.component('j-pagination',Pagination)
Vue.use(Plugin)//
new Vue({
    el: '#app',
    data:{
        message: '',
        currentTab:'education',
        selectdot: 1,
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
