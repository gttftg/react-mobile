import  Article  from '../page/Article/index'
import NotFound from '../notFound'

// 使用createBrowsweRouter创建浏览器路由对象router
import { createBrowserRouter } from 'react-router-dom'
import Login from '../login'
import Layout from '../page/Layout'
import About from "../page/About"
import Board from '../page/Board'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Article />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'Board',
        element: <Board />
      }
    ]
  },
  {
    path: '/article/:id/:name',
    element: <Article/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router

