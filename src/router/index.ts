import React from 'react'
declare interface RouterDict {
  name: string
  path?: any
  icon?: string
  auth?: boolean
  component?: React.FC
  children?: Array<RouterDict>
}
const RouterMenu: Array<RouterDict> = [
  {
    name: 'Home',
    path: '/home',
    auth: true,
    component: React.lazy(
      () => import(/* webpackChunkName: "home" */ '@/views/home/index')
    ),
  },
  {
    name: 'Options1',
    auth: true,
    children: [
      {
        name: 'Options1-1',
        path: '/1-1',
        auth: true,
        component: React.lazy(
          () =>
            import(
              /* webpackChunkName: "dashboard" */ '@/views/dashboard/index'
            )
        ),
      },
      {
        name: 'Options1-2',
        path: '/1-2',
        auth: true,
        component: React.lazy(
          () => import(/* webpackChunkName: "about" */ '@/views/about/index')
        ),
      },
      {
        name: 'Options1-3',
        path: '/1-3',
        auth: true,
        component: React.lazy(
          () => import(/* webpackChunkName: "count" */ '@/views/count/index')
        ),
      },
    ],
  },
]

export default RouterMenu

export { RouterDict }
