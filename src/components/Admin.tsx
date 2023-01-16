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
                placeholder="ID"
            />
            <br />
            <input 
                type="password" 
                name='pw' 
                className='input-pw' 
                placeholder="PASSWORD"
            />
            <br />
            <input
                type="submit"
                name='admin-btn'
                className='admin-btn'
                placeholder="접속"
            />
        </div>
    </div>
  )
}

export default admin