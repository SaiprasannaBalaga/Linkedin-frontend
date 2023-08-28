import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Post from './components/Post';
import SidebarRight from './components/SidebarRight';
import { RouterProvider,createBrowserRouter,Route,Routes, BrowserRouter,Router,Link } from 'react-router-dom';
import Login from '../src/components/Login';
// import Mynetwork from '../components/Mynetwork';
import Signup from '../src/components/Signup';
import { Home } from '@mui/icons-material';
import Headeroptions from './components/Headeroptions';
import Homes from './components/Homes';
import Homepage from './components/Homepage';
import Messaging from '../src/components/Messaging';

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/home",
      element: <Homepage/>
    },
   
  ])

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );

  
  }
export default App;






















//     function App() {
//       <div>
// <Header/>
// <div className='Homebody'>
// <Sidebar/>
// <Timeline/>
// <SidebarRight/>
// </div>
//     </div>
//       return (
//         <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Singup/>}/>
//           <Route path='/Login' element={<Login/>}/>
//           <Route path='/Header' element={<Header/>} />
//           <div>
// <Header/>
// <div className='Homebody'>
// <Sidebar/>
// <Timeline/>
// <SidebarRight/>
// <Mynetwork/>
// </div>
//     </div>
//         </Routes>
//         </BrowserRouter>

        
//       );
//     }
   


