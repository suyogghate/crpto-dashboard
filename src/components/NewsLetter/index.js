import React from 'react';
import OutlinedButton from '../OutlinedButton/Button';
import "./styles.css";

function NewsLetter() {
  return (
    <div className='news-letter'>
        <p className='first-line'>Be the first to know about<p className='blue-heading'>crypto news every day</p></p>
        <p className="para2">
        Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.
        </p>
        <OutlinedButton className="subs-btn" text={"Subscribe"} />
    </div>
  )
}

export default NewsLetter;