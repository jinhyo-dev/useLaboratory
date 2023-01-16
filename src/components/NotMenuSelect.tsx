import React from 'react'
import "../styles/notMenuSelect.css"
import { BsEmojiNeutral } from "react-icons/bs";

const NotMenuSelect = () => {
  return (
    <div className='notMenuSel-container'>
        <div className='notMenuSel-layout'>
        <BsEmojiNeutral className='icon' />
        <p className='chooseMenu'>Choose Menu!</p>
        </div>
    </div>
  )
}

export default NotMenuSelect