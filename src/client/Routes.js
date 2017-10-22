import React from 'react'

import App from './App'
import AdminsListPage from './pages/AdminsListPage'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'

export default [{
  ...App,
  routes: [{
    ...AdminsListPage,
    path: '/admins'
  }, {
    ...HomePage,
    path: '/',
    exact: true
  }, {
    ...UsersListPage,
    path: '/users',
  }, {
    ...NotFoundPage,
  }]
}]
