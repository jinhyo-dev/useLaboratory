import React from 'react';
import Header from './Header';
import ListForm from './ListForm';

const ListLab = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <ListForm/>
      </div>
    </div>
  );
}

export default ListLab;