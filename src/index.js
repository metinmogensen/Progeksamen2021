import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from '/Users/carolinelangholz/Documents/ha_it/Prog/progeksamen2021/Progeksamen2021/src/app';

Vue.use(VeeValidate);

// API connectes her
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});