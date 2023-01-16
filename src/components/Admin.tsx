import React from 'react';
import Header from './Header';
import "../styles/admin.css"

const admin = () => {
  return (
    <div>
        <Header />
        <div className='admin-layout'>
            <h3 className='admin-text'>ADMIN</h3>
            <input 
                type="text" 
                name='id' 
                className='input-id' 
            />
            <br />
            <input 
                type="password" 
                name='pw' 
                className='input-pw' 
            />
            <br />
            <input
                type="submit"
                name='admin-btn'
                className='admin-btn'
            />
        </div>
    </div>
  )
}

export default admin