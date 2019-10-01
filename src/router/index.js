import Vue      from 'vue'
import Router   from 'vue-router'
import Index        from '@/components/Index'
import Login        from '@/components/Login'
import Logout       from '@/components/Logout'
import Register     from '@/components/Register'
import Topic        from '@/components/Topic'
import Category     from '@/components/Category'
import Categories   from '@/components/Categories'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/logout',
      name: 'Logout',
      component: Logout
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/topics/:id',
      name: 'Detail',
      component: Topic
    },{
      path: '/categories',
      name: 'Categories',
      component: Categories
    },{
      path: '/categories/:id',
      name: 'Category',
      component: Category
    }]
})
