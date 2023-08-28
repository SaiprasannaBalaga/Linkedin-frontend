import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Headeroptions from './Headeroptions';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';
import Timeline from './Timeline';
import Post from './Post';
import Signup from './Signup';
import Login from './Login';
import '../styles/Homepage.css'

function Homepage() {
  return (
<div className='Homepage'>
<div className='headerandoptions'>
<Header/>
<Headeroptions/>
</div>


{/* <Post/> */}

<div className='barstimeline'>

<div className='sidebarr'>
<Sidebar/>
</div>
<div className='timelineee'>
<Timeline/>
</div>
<div className='sidebarrRight'>
<SidebarRight/>
</div>

</div>
  <Outlet/>     
        </div>
  )
}

export default Homepage