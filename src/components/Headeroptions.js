import React from 'react'
import { Avatar} from "@mui/material";
import '../styles/Header.css';
import { Height, PhotoSizeSelectActual } from '@mui/icons-material';

function Headeroptions({Icon,title,Avatar}) {
  return (
    <div className='Headeropt'>
        {
             Icon && <Icon></Icon>

            
        }

{
                Avatar && <Avatar name = {Avatar}/>
            }
    

       
          <span>{title}</span>
    </div>
  )
}

export default Headeroptions