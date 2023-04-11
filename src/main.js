import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/common.css";
import "./styles/page.css";
import "./styles/icon/iconfont.css";
import store from './store';
import globalConfig from "./globalConfig";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    router,
    store,
    provide: {
        globalConfig,
    },
    render: (h) => h(App),
}).$mount("#app");

