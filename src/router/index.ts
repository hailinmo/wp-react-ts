import Home from '../views/home/index'
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
    component: Home,
  },
  {
    name: 'Options1',
    auth: true,
    children: [
      {
        name: 'Options1-1',
        path: '/1-1',
        auth: true,
        component: Home,
      },
      {
        name: 'Options1-2',
        path: '/1-2',
        auth: true,
        component: Home,
      },
    ],
  },
]

export default RouterMenu

export { RouterDict }
