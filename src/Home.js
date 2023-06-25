
import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [errors, setErrors] = useState(null);

    const handelDelete = (id)=>{
        const newarr = blogs.filter((blog)=> blog.id !== id );
        setBlogs(newarr);
    };

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
                if (! res.ok){
                   throw Error(`could not fetch data for this resourse`);
                }
                return res.json()
            })
                .then(data=>{
                    setIspending(false);
                    setErrors(null);
                    setBlogs(data);   
                })
                    .catch(err=>{ 
                       setIspending(false);
                       setErrors(err.message);            
                    });
    },[]);

    
    return ( 
        <div className="home">
          {errors && <div>{errors}</div>}
          {isPending && <div>Loading...</div>}
          { blogs && <BlogList blogs={blogs} handelDelete={handelDelete}/>}
        </div>
     );
}
 
export default Home;