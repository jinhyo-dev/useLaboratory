import React from 'react';
import Header from './Header';
import ListForm from './ListForm';
import Sidebar from './Sidebar';

const ListLab = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ListForm/>
      </div>
    </div>
  );
}

export default ListLab;