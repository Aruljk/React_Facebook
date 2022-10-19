import React from 'react'
import "./Middle.css";
function Middle() {
  return (
    <div className='center'>
      <div className='page1'>
      <img src='https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg'></img>
            <img src='https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg'></img>
            <img src='https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg'></img>
            <img src='https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg'></img>
          </div>
          <div className='page2'>
            <div className='image'>
            <img src='https://i.pinimg.com/474x/32/9f/e1/329fe1788c0ad306705372fee5e494db.jpg'></img>
              <input type='text' placeholder='Whats on your mind!'></input>
            </div>
            <hr></hr>
            <div className='text'>
              <h2><i class="bi bi-camera-video-fill"></i>Live Video</h2>
              <h3><i class="bi bi-file-image"></i>Photo/Video</h3>
              <h4><i class="bi bi-emoji-smile-fill"></i>Feeling/Activity</h4>
            </div>
          </div>
          <div className='page'>
            <div className='top'>
              <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/15/full/1647365891-7103.jpg'></img>
              <div className='time'>
              <h4>RoHit</h4>
              <p>1 min ago.</p>
              
              </div>
              <i class="bi bi-three-dots"></i>
            </div>
            <div className='center1'>
              <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/15/full/1647365891-7103.jpg'></img>
            </div>
            <h5>Likes 25 million</h5>
            <hr></hr>
            <div className='bottom'>
              <h2><i class="bi bi-hand-thumbs-up-fill"></i>Like</h2>
              <h3><i class="bi bi-chat-dots-fill"></i>Comment</h3>
              <h4><i class="bi bi-share-fill"></i>Share</h4>
            </div>
          </div>
        </div>
  
  )
}

export default Middle