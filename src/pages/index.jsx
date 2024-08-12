import { Outlet,Link } from "react-router-dom";

const index = () => {
    return (
        <nav>
           <p>
            <Link to='/login'>Login</Link>
            </p> 
        </nav>
    )
}

export default index;