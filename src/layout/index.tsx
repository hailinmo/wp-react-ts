import React, { Suspense } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouterMenu, { RouterDict } from '../router/index'
import SideMenu from './side-menu'

const { Header, Content, Sider } = Layout

const Frame: React.FC = () => {
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

  return (
    <Router>
      <Layout className="h-full overflow-hidden">
        <Header className="flex items-center">
          <div className="h-10 w-32 leading-10 text-center text-white">
            LOGO
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="overflow-y-auto overflow-x-hidden">
            <SideMenu />
          </Sider>
          <Layout className="p-4">
            <Content>
              <Suspense fallback={<div>Loading...</div>}>
                {myRouter.map((route) => (
                  <Route
                    exact
                    key={route.name}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

export default Frame
