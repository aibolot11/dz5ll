
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'


export function Navbar() {

  const counter = useSelector(state => state.counter.date)
    console.log(counter)

  return (
    <div>
      <Link to="/card">Card</Link>
      <div>{counter.length}</div>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}
