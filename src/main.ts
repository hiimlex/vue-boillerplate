import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./class-components-hooks";
import "firebase/firestore";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const configOptions = {
	apiKey: "AIzaSyC6L7hTs0yPZ-jUjBHNRvBviVuQ3D5xkD4",
	authDomain: "vue-auth-9f849.firebaseapp.com",
	projectId: "vue-auth-9f849",
	storageBucket: "vue-auth-9f849.appspot.com",
	messagingSenderId: "1004701979789",
	appId: "1:1004701979789:web:9252079d6ab2db9723fec4",
};

firebase.initializeApp(configOptions);

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
