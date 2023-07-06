import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const submit = (e)=>{
        e.preventDefault()

        const blog = {author, title, body};
        console.log(blog)
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers :{"Content-Type": "application/json"},
            body : JSON.stringify(blog),
        })
            .then(()=>{
                console.log('blog created');
                setIsPending(false)
            })
                .catch(err=>{
                    console.log(err);
                })

    }

    return ( 
        <div className="Create">
            <h1 className="formdata">Create page</h1>
            <form
            onSubmit={submit}
            className="creatform">
                    <label>Title</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value);
                    }}
                     />

                    <label>Body</label>
                    <textarea 
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value);
                    }}
                    />

                    <label>Author</label>
                    <select
                     value={author}
                     onChange={(e)=>{setAuthor(e.target.value);
                     }}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    
                    <div className="button">
                    { !isPending &&<button> Post</button>}
                    { isPending &&<button disabled> Posting...</button>}
                    </div>

             </form>
        </div>
     );
}
 
export default Create;