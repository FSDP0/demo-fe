import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@viewRoot/HomeView.vue";
import BoardView from "@board/BoardView.vue";
import BoardWrite from "@board/BoardWirte.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/board",
		name: "board",
		component: BoardView,
	},
	{
		path: "/board_write",
		name: "board_write",
		component: BoardWrite,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
