import { Link, Outlet } from "react-router-dom"
const Article = () => {

  return (
    <div>我是一级路由
      <Link to='/board'>二级路由Board</Link>
      <Link to='/'>二级路由About</Link>
      <Outlet/>
    </div>
  )
}
export default Article