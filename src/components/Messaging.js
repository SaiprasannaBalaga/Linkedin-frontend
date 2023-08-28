import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/messaging.css';


function Messaging() {
  return (
    <div className='message'>
      <div className='msgdivone'>
        <div className='mess'>
            <h3>Messaging</h3>
            <div><MoreHorizIcon/></div>
            <div><RateReviewIcon/></div>
        </div>

        <div className='msginput'>
            <SearchIcon /><input type='text'/>
        </div>

        <div className='msgother'>
            <div>
            <p>Focused</p>
            <span><p>Other</p></span>
            </div>
        </div>

        <div>
          <h3>New Message</h3>
          
          <input type='text' placeholder='Type a name or multiple name'/>
        </div>
        </div>

        <div className='msgdivtwo'>

        </div>
    </div>
  )
}

export default Messaging;