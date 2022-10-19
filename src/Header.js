import React from 'react'
import "./css/header.css"

function Header() {
  return (
    <div class="header-left">
        <div class="left">
<h1>FACEBOOK</h1>
</div>
        <div class="h-search">
<input type="text" placeholder='search facebook'></input>
        </div>
        
        <div class="right">
        <li><i class="bi bi-chat-fill"></i></li>
             <li><i class="bi bi-bell-fill"></i></li>
             <li><i class="bi bi-person-fill"></i></li>
        
        </div>
    </div>
  )
}

export default Header