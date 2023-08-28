import React from 'react'
import "../styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar} from "@mui/material";


function Header({photoURL}) {
  return (
    <div className='Header'>
      <div className='HeaderLeft'>
        <div className='HeaderLogo'>
          <img src='https://s.yimg.com/fz/api/res/1.2/oPmnuoHGZwDmud64pDGAcQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/051c505f-dc29-3303-81b2-5828c6e3b2e2/t_500x300' />
        </div>

        <div className='HeaderSearch'>
          <SearchIcon />
          <input type='text ' placeholder='Search' />
        </div>

      </div>

      <div className='HeaderRight'>
      <Headeroptions Icon = {HomeIcon} title = "Home"/>
      <Headeroptions Icon = {PeopleIcon} title = "Network"/>
      <Headeroptions Icon = {BusinessCenterIcon} title = "jobs"/>
      <Headeroptions Icon = {MessageIcon} title = "messages"/>
      <Headeroptions Icon = {NotificationsIcon} title = "Notifications"/>
      <Headeroptions Avatar = {Avatar} title = "Me" />
      </div>
    </div>
  )
}

export default Header