const BlogList = (props) => {

    const blogs = props.blogs
   
    
    return ( 
        <div className="blogList">
            {blogs.map((blog)=>{ return(
            <div className="blogs" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.name}</p>
            </div>
        ); })}

        </div>

     );
}
 
export default BlogList;