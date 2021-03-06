import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
// import SignUp from "../components/SignUp.vue";
// import Confirmation from "../components/Confirmation.vue";
// import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;