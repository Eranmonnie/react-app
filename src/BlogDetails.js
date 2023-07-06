
import {useNavigate, useParams} from 'react-router-dom';
import useFetch from './useFetch';
import { useState } from 'react';

const BlogDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams()
    const {data :Blog, errors, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
    const [ispending,setIsPending] = useState(false);

    const remove = ()=>{

        setIsPending(true);

        fetch(`http://localhost:8000/blogs/${id}`, {
            method : 'DELETE'
        })
            .then(()=>{
                console.log('blog created');
                setIsPending(false)
                navigate('/');//redirect for after post request
            })
                .catch(err=>{
                    console.log(err);
                })
               
    }

    return ( 
        <div className="BolgDetails">
             {errors && <div>{errors}</div>}
             {isPending && <div>Loading...</div>}
             {Blog && (<div className="blog" key={Blog.id}>
                            <h2 className='blogtitle'>{Blog.title}</h2>
                            <p>{Blog.body}</p>
                            <p>written by {Blog.author}</p>
                            <div className="button">
                                { !ispending &&<button onClick={()=>{remove(Blog.id)}}> Delete</button>}
                                { ispending &&<button disabled> Deleting...</button>}
                            </div>

            </div>)}
        </div>
     );
}
 
export default BlogDetails;
