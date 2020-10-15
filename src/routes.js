import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
    },
    {
		path: "/register",
		name: "register",
		component: Register,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;