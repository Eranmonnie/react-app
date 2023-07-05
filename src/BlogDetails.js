
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {

    const {id} = useParams()
    const {data :Blog, errors, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div className="BolgDetails">
             {errors && <div>{errors}</div>}
             {isPending && <div>Loading...</div>}
             {Blog && (<div className="blog" key={Blog.id}>
                        <h2>{Blog.title}</h2>
                        <p>{Blog.body}</p>
                        <p>written by {Blog.author}</p>

            </div>)}
        </div>
     );
}
 
export default BlogDetails;
