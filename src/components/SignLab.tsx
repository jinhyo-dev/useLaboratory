import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SignForm from './SignForm';

const SignLab = () => {
  return (
    <div>
        <Header />
        <div style={{ display: 'flex' }}>
        <Sidebar />
        <SignForm />
        </div>
    </div>
  )
}

export default SignLab;