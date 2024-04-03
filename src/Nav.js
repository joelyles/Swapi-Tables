import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div>
      <ul className="nav">
        <li><Link className="link" to="/">People</Link></li>
        <li><Link className="link" to="/planets">Planets</Link></li>
        <li><Link className="link" to="/starships">Starships</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Nav
