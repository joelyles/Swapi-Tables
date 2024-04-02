import { Link } from "react-router-dom";
import Button from './Button';

const Nav = ({ reqType, setReqType }) => {
  return (
    <>
{/*     <form onSubmit={(e) => e.preventDefault()}>
      <Button 
        buttonText="people"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="planets"
        reqType={reqType}
        setReqType={setReqType}
      />
      <Button 
        buttonText="starships"
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
 */}
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
