import { Outlet, Link } from "react-router-dom";

const index = () => {
    return ( 
        <nav>
          <p><Link to="/account">Create an Account</Link></p>  
        </nav>
     );
}
 
export default index;