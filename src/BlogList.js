const BlogList = (props) => {

    const blogs = props.blogs
    //emits in vue 
    const handelDelete = props.handelDelete

    return ( 
        <div className="blogList">

            {blogs.map((blog)=>{ return(
            <div className="blogs" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.name}</p>
                <button onClick={()=>handelDelete(blog.id)}>Delete</button>
            </div>
        ); })}

        </div>

     );
}
 
export default BlogList;