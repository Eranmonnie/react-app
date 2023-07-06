const Create = () => {
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
                     />

                    <label>Body</label>
                    <textarea 
                    required
                    />

                    <label>User</label>
                    <select>
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