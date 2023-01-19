import React from 'react';
import Header from './Header';
import SignForm from './SignForm';

const SignLab = () => {
  return (
    <div>
        <Header />
        <div style={{ display: 'flex' }}>
        <SignForm />
        </div>
    </div>
  )
}

export default SignLab;