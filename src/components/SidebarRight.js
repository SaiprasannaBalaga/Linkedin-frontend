import React from 'react'
import '../styles/SidebarRight.css';
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';
function SidebarRight({name}) {
  return (
    <div className='SidebarRight'>
        <div className='SidebarRightTop'>
        <div className='SidebarRightHeader'>
                <h4>Linkedin News</h4>
                <InfoIcon/>
        </div>

        <div className='SidebarRightBody'>
            <ul className='SidebarRightBodyopt'>
            <li>
                <h4>India Inc's revenue growth slows </h4>
                <p>5h ago * 235 readers</p>
            </li>
            <li>
                <h4>Global food chains, local flavours </h4>
                <p>5hago * 255 readers</p>
            </li>

            <li>
                <h4> Taking insurance to rural India </h4>
                <p>5h ago * 295 readers</p>
            </li>

            <li>
                <h4>Top newsletters to follow</h4>
                <p>5h ago * 289 readers</p>
            </li>

            <li>
                <h4>Himachal rains claim over 70 lives</h4>
                <p>5h ago * 992 readers</p>
            </li>


            </ul>
            </div>
            </div>




            {/* ..................... right bottom ................ */}


            <div className='Sidebarbottom'>
                <div className='SidebarbottomTop'>
        <div className='SidebarbottomHeader'>
                <h4>Linkedin News</h4>
                <InfoIcon/>
        </div>

        <div className='SidebarbottomBody'>
           <p>{name} Unlock your full potential with  Linkedin <br/> Premium</p>
           <KeyIcon/>
           <p> See who's viewed ypur profile in the last <br/> 90days</p>
           <div>Try for Free</div>
            </div>
            </div>

    </div>
    </div>
  )
}

export default SidebarRight