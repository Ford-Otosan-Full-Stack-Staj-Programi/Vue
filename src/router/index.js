import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import ListingView from "@/views/ListingView.vue"
import InboxView from "@/views/InboxView.vue"
import InboxSubView from "@/views/InboxSubView.vue"
import CommentsView from "@/views/Comments/CommentsListView.vue"
import CommentsDeleteView from "@/views/Comments/CommentsDeleteView.vue"
import CommentsAddView from "@/views/Comments/CommentsAddView.vue"

import PersonView from "@/views/PersonView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/listing',
      component: ListingView
    },
    {
      path: '/inbox',
      component: InboxView,
      children: [
        {
          path: 'sub',
          component: InboxSubView
        }
      ]
    },
    {
      path: '/person',
      component: PersonView,
      children: [
        {
          path: ':personId',
          component: PersonView,
        }
      ]
    },
    {
      path: '/comments',
      component: CommentsView
    },
    {
      path: '/comments-delete',
      component: CommentsDeleteView
    },
    {
      path: '/comments-add',
      component: CommentsAddView
    }
  ]
})

export default router