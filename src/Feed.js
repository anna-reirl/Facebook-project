import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessangeSender';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed
