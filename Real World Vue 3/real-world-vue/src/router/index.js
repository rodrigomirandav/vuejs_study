import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import EventDetailsView from "../views/EventDetails.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },
    {
      path: "/event/:id",
      props: true,
      name: "event-details",
      component: EventDetailsView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
});

export default router;
