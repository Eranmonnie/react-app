import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
const{data, isPending, errors} = useFetch("http://localhost:8000/blogs");
 
    return ( 
        <div className="home">
          {errors && <div>{errors}</div>}
          {isPending && <div>Loading...</div>}
          { data && <BlogList blogs={data} />}
        </div>
     );
}
 
export default Home;