import 'bootstrap';
import Vue from 'vue'
import App from './components/App'

var vm = new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<app />'
});
