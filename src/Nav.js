import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <>
    <div>
      <ul className="nav">
        <Link className="link" to="/"><li>People</li></Link>
        <Link className="link" to="/planets"><li>Planets</li></Link>
        <Link className="link" to="/starships"><li>Starships</li></Link>
      </ul>
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="search" placeholder="search table..."
          value={search} onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
    </>
  )
}

export default Nav
