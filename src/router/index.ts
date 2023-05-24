import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardList from "../views/Board/BoardList.vue";
import BoardWrite from "../views/Board/BoardWrite.vue";
import BoardView from "../views/Board/BoardView.vue";
import BoardEdit from "../views/Board/BoardEdit.vue";
// import UserView from "../views/User/UserView.vue";

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
		path: "/board_write",
		name: "board_write",
		component: BoardWrite,
	},
	{
		path: "/board_edit/:id",
		name: "board_edit",
		component: BoardEdit,
		props: true,
	},
	{
		path: "/board_view/:id",
		name: "board_view",
		component: BoardView,
		props: true,
	},
	// {
	// 	path: "/user_ceate",
	// 	name: "user",
	// 	component: UserView,
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
