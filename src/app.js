import Vue from 'vue';
import router from './router.js';
import store from './store/store.js';

export default new Vue({
    router,
    store,
    render: (h) => {
        return h('div', {
            style: {
                backgroundColor: 'aquamarine'
            }
        }, [
            h('router-view')
        ]);
    }
}).$mount();
