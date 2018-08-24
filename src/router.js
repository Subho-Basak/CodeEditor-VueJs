import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account',
      name: 'layout',
      component: ()=> import('./layout/CommonLayout.vue'),
      children:[
          {
            path: '/account/my-editor',
            name: 'editor',
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/Editor.vue'),
          },
          {
            path: '/account/about',
            name: 'about',
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          },
          {
            path: '/account/trash',
            name: 'trash',
            component: () => import('./views/Trash.vue')
          },
          {
            path: '/account/code/:id',
            name: 'view',
            component: () => import('./views/CodeViewer.vue')
          },
          {
            path:'/account/shared-with-me',
            name:'sharedWithMe',
            component: ()=> import('./views/SharedCode.vue')
          },
          {
            path:'/account/add-new-code',
            name:'addNew',
            component:()=>import('./views/AddNew.vue')
          }
        ]
    },
    {
      path:'/signup',
      name:'signup',
      component: ()=> import('./views/Signup.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path:'/',
      name:'home',
      component:()=> import('./views/Home.vue')
    }
  ]
})
