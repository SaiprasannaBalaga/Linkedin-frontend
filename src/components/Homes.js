import React from 'react'
import Header from './Header'
import Headeroptions from './Headeroptions'
import Sidebar from './Sidebar'
import Post from './Post'
import Timeline from './Timeline'
// import { Timeline } from '@mui/icons-material'
import SidebarRight from './SidebarRight'
import { Margin } from '@mui/icons-material'
import '../styles/Homes.css'

function Homes() {
  return (
    <div className='homes'>
     
        <div><Sidebar/></div>
        <div><Timeline/></div>
        <div><SidebarRight/></div>
    </div>
   
  )
}

export default Homes