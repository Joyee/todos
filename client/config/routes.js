// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // path: '/app/:id',
    // props: true,
    // props: (router) => ({ id: router.query.b }), // url: /app/123?a=1234&b=4567
    component: () => import('../views/todo/todo.vue'), // 异步加载
    name: 'app',
    meta: {
      title: 'app',
      description: 'this is a app'
    }
    // children: []
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue'),
    name: 'login'
  }
]
