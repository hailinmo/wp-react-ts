import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { SubMenu } = Menu
import RouterMenu, { RouterDict } from '../router/index'

const SideMenu: React.FC = () => {
  const renderMenu = (menu: Array<RouterDict>) => {
    return menu.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.name}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        )
      }
    })
  }

  const myRouter: Array<RouterDict> = []
  const getRouterList = (menu: Array<RouterDict>) => {
    menu.map((item) => {
      if (item.children) {
        getRouterList(item.children)
      } else {
        myRouter.push(item)
      }
    })
  }
  getRouterList(RouterMenu)
  const myMenu = renderMenu(RouterMenu)

  const { pathname } = useLocation()
  const openKeys: string[] = []
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={openKeys}
      style={{ height: '100%', borderRight: 0 }}
    >
      {myMenu}
    </Menu>
  )
}

export default SideMenu
