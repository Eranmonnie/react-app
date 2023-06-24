
import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([

        {name:'feranmi', title:'the first dawn', date:'10-11-23' ,id:1},
        {name:'taiwo', title:'the kush iu', date:'10-1-23' ,id:2},
        {name:'ferjganmi', title:'tpijhe filjhrst dawn', date:'10-6-23', id:3},
    ]);

    const handelDelete = (id)=>{
        const newarr = blogs.filter((blog)=> blog.id !== id );
        setBlogs(newarr);
    }

    
    return ( 
        <div className="home">
          <BlogList blogs={blogs} handelDelete={handelDelete}/>
        </div>
     );
}
 
export default Home;