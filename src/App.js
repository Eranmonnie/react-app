import NotFound from './NotFound';
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  
  return (
    <Router>
        <div className="App">
            <Nav />
            <div className="content">
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/create' element={<Create/>} />
                  <Route exact path='/blogs/:id' element={<BlogDetails/>} />
                  <Route exact path='*' element={<NotFound/>} />
              </Routes>
            </div>
        </div>
      
    </Router>
   
  );
}

export default App;
