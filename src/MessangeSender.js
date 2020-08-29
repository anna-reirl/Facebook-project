import React from 'react'
import './MessangeSender.css';
import {  Avatar } from '@material-ui/core';

function MessangeSender() {
    return (
        <div className="MessangeSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                    className="messageSender__input"
                    placeholder={`What's on your mind` } />
                </form>
            </div>

            <div className="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessangeSender
