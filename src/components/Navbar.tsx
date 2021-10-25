import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const Navbar: FC = () => {
      const router = useHistory()
      const {isAuth} = useTypedSelector(state => state.auth);
      
      return (
            <Layout.Header>
                  <Row justify="end">
                        {isAuth
                              ?
                              <Menu theme="dark" mode="horizontal" selectable={false}>
                                    <Menu.Item>Nikita</Menu.Item>
                                    <Menu.Item onClick={() =>console.log(1)} key={1}>Выйти</Menu.Item>
                              </Menu>
                              :
                              <Menu theme="dark" mode="horizontal" selectable={false}>
                                    <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                              </Menu>
                        }
                  </Row>
            </Layout.Header>
      )
}

export default Navbar
