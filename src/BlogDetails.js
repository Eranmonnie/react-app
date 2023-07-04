
import {useParams} from 'react-router-dom';
const BlogDetails = () => {

    const {id} = useParams()
    return ( 
        <div className="BolgDetails">
            <h2>blog details page {id} </h2>
        </div>
     );
}
 
export default BlogDetails;
