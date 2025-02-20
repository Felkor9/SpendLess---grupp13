import {createRouter, createWebHashHistory} from "vue-router"

import HomeView from "./views/HomeView.vue"

import AboutView from "./views/AboutView.vue"

import MyAccountView from "./views/MyAccountView.vue"

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			component: AboutView,
			path: "/about",
		},
		{
			component: HomeView,
			path: "/",
		},
		{
			component: MyAccountView,
			path: "/myaccount",
		},
	],
})
