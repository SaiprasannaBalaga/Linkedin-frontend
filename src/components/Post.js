import React from 'react'
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description,message,photoURL}) {
    
    return (
        <div className='Post'>
            <div className='PostHeader'>
                <div className='PostHeaderLeft'>
                    <Avatar src = {photoURL} />
                    <div className='PostprofileData'>
                        <h3>{name}</h3>
                        <p>{description}</p>

                    </div>

                </div>

                <MoreVertIcon />

            </div>

            <div className='PostBody'>
                <p>{message}</p>
            </div>

            <div className='postfooter'>
                <div className='postfooteroption'>
                <ThumbUpIcon/>
                <span>Like</span>
                </div>

                <div className='postfooteroption'>
                <CommentIcon/>
                <span>Comment</span>
                </div>

                <div className='postfooteroption'>
                <ShareIcon/>
                <span>Share</span>
                </div>

                <div className='postfooteroption'>
                <SendIcon/>
                <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Post