import { Link } from "react-router-dom";

function Nav(){
    return (
        <div>
            <Link to = {`/`}>Home</Link>
            <Link to = {`/animation`}>Animation</Link>
            <Link to = {`/sci-fi`}>Sci-fi</Link>
            <Link to = {`/action`}>Action</Link>
            <Link to = {`/sports`}>Sports</Link>
            <Link to = {`/drama`}>Drama</Link>
        </div>
    )
}

export default Nav;