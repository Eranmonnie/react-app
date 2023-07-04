import {Link} from 'react-router-dom';

const BlogList = (props) => {

const blogs = props.blogs
    
    return ( 
        <div className="blogList">
            {blogs.map((blog)=>{ return(

            <Link to={`blogs/${blog.id}`}>
                <div className="blogs" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.name}</p>
                </div>

            </Link>
        ); })}

        </div>

     );
}
 
export default BlogList;