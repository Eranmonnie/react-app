import {Link} from 'react-router-dom';

const BlogList = (props) => {

const blogs = props.blogs
    
    return ( 
        <div className="blogList">
            {blogs.map((blog)=>{ return(
                <div className="blogs" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}> 
                        <h2>{blog.title}</h2>
                        <p>written by {blog.name}</p>
                    </Link>
                </div>
        ); })}
        </div>

     );
}
 
export default BlogList;