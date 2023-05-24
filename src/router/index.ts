import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardList from "../views/Board/BoardList.view.vue";
import BoardView from "../views/Board/BoardView.view.vue";
import BoardWrite from "../views/Board/BoardWrite.view.vue";
import BoardEdit from "../views/Board/BoardEdit.view.vue";
import UserView from "../views/User/UserView.vue";
import HomeNavView from "../views/HomeNavView.vue";

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
		path: "/board_list",
		name: "board_list",
		component: BoardList,
	},
	{
		path: "/board_view",
		name: "board_view",
		component: BoardView,
	},
	{
		path: "/board_write",
		name: "board_write",
		component: BoardWrite,
	},
	{
		path: "/board_edit",
		name: "board_edit",
		component: BoardEdit,
	},
	{
		path: "/user_ceate",
		name: "user",
		component: UserView,
	},
	{
		path: "/nav",
		name: "nav",
		component: HomeNavView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
