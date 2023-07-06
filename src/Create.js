import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const submit = (e)=>{
        e.preventDefault()

        const blog = {title, body, author};
        setIsPending(true)

        fetch('http://localhost:8000', {
            method : 'POST',
            headrs :{'Content-Type': 'application/json'},
            body : Json.stringify(blog),
        })
            .then(data =>{
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
            className="creatform">
                <form onSubmit={(e)=>{
                       submit(e)     
                        }}> 
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

             </form>
        </div>
     );
}
 
export default Create;