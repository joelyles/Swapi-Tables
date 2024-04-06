import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div>
      <ul className="nav">
        <Link className="link" to="/"><li>People</li></Link>
        <Link className="link" to="/planets"><li>Planets</li></Link>
        <Link className="link" to="/starships"><li>Starships</li></Link>
        <Link className="link" to="/vehicles"><li>Vehicles</li></Link>
      </ul>
    </div>
    </>
  )
}

export default Nav
