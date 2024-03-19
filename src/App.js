
import './App.css';
import { BrowserRouter as Router,createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Main from './Component/home/Main';
import PropertyList from './Component/home/PropertyList';
import PropertyDetails from './Component/home/PropertyDetails/PropertyDetails';
import {Flip, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { currentUser } from './Store/User/user-action';
import { userAction } from './Store/User/user-slice';
import Login from './Component/User/Login';
import Signup from './Component/User/Signup';
import Profile from './Component/User/Profile';
import EditProfile from './Component/User/EditProfile';
function App() {
  const dispatch=useDispatch();
  const {errors} =useSelector((state)=>
    state.user
  )
  useEffect(()=>{
    if(errors){
      dispatch(userAction.clearError)
    }
    dispatch(currentUser());
  },[errors,dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} id='main' exact>
        <Route id='home' index element={<PropertyList />} exact />
        <Route element={<PropertyDetails />} id='PropertyDetails' path='propertylist/:id' exact />
        <Route id='login' path='login'  element={<Login/>}/>
        <Route id='signup' path='Signup' element={<Signup/>}/>
        <Route id='profile' path="profile" element={<Profile/>} />
        <Route id='editprofile' path='editprofile' element={<EditProfile/>}/>
      </Route>

    )
  );
  return (<>
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer
      position='bottom-center'
      autoClose={3000}
      draggable={true}
      transition={Flip}
      />
      {/* <Router>
        <Main id="main"/> */}
        {/* <Routes>
          <Route path="/" element={<Main />} id="main" exact />
        </Routes> */}
      {/* </Router>
      <Router>

        <Routes>
          <Route id='home' index element={<PropertyList />} exact />
        </Routes>
        <Routes>
          <Route element={<PropertyDetails />} id='PropertyDetails' path='propertylist/:id' exact />
        </Routes>
      </Router> */}
    </div>
  </>
  );
}

export default App;
