import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    return ( 
        <div className="Create">
            <h1 className="formdata">Create page</h1>
            <form
            className="creatform">
                <form> 
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
                     value={user}
                     onChange={(e)=>{setAuthor(e.target.value);
                     }}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    
                    <div className="button">
                        <button>
                            Post
                        </button>
                    </div>
                    
                </form>

             </form>
        </div>
     );
}
 
export default Create;