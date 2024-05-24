import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
     <button onClick={()=>navigate('/article/200/zs')}>登陆</button>
    </div>
  )
}

export default Login