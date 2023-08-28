import React from 'react'
import '../styles/Sidebar.css';
import { Avatar } from '@mui/material';
function Sidebar({photoURL}) {
  return (
    <div className='SideBar'>
     <div className='sideprofile'  >
        <img src='https://tse4.mm.bing.net/th?id=OIP.inscWGjCwcgEzVGJaAqMsgHaCJ&pid=Api&P=0&h=180'/>

        <div className='profiledata'>
            <Avatar  src='https://tse3.mm.bing.net/th?id=OIP.sJDPt4KfdFcg4sjk0BUPkQHaKM&pid=Api&P=0&h=180' /> 
          <h4>SAIJOSH</h4>
          <p>Full stack Developer</p>
        </div>

        <div className='Profilepara'>
            <span>Who viewed your profile </span>
            <span className='profilenumber'>25</span>
        </div>

        <div className='Profilepara'>
            <span>Connection <br/><b>Grow ur network</b></span>
            <span className='profilenumber'>25</span>
        </div>
     </div>

     <div className='sidebarsecond'>
         <p>SecondSideBar</p>
         <p className='hash'>#<span>Branding</span></p>
         <p className='hash'>#<span>Marketing</span></p>
         <p className='hash'>#<span>Webdevelopement</span></p>
         <p className='hash'>#<span>programming</span></p>
         <p className='hash'>#<span>reactjs</span></p>
         <p className='hash'>#<span>reactredux</span></p>
     </div>
    </div>
  )
}

export default Sidebar;