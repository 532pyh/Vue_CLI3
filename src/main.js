import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins';
import 'css/base/base.less';

Vue.mixin(mixins);
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
//注册element-ui组件
import {
    Button,
} from 'element-ui';

const components = [
    Button,
];
for (let k of components) {
    Vue.use(k);
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
