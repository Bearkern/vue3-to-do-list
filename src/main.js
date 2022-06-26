import { createApp } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router/router';
import httpMessageState from './utilities/pushMessageState';
import store from './store/store';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App);

app.config.globalProperties.$httpMessageState = httpMessageState;

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueAxios, axios);
app.use(router);
app.use(store);

app.mount('#app');
