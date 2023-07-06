import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry, Page not found click here to go  <Link to='/'>Home</Link>
            </h2>

        </div>
     );
}
 
export default NotFound;