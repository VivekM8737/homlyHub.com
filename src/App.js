
import './App.css';
import { BrowserRouter as Router, createRoutesFromElements,Route,RouterProvider, Routes} from "react-router-dom"
import Main from './Component/home/Main';
function App() {
  // const router = Router(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Main/>}></Route>
  //   )
  // )
  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      
       <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
