import React from 'react'
import "../styles/listForm.css";

const ListForm = (props: any) => {
  return (
    <div className='listForm-container'>
      <div className='list-title'>
        <span>랩실 </span>
        <span>대표이름 </span>
        <span>학년 반 번호 </span>
        <span>신청날짜</span>
        <span>확인</span>
      </div>
      <div className='list-item'>
        <span>{props.lab}LAB 1</span>
        <span>{props.name}박민규</span>
        <span>{props.schoolNum}2209</span>
        <span>{props.date}2023-01-26</span>
        <input type="submit" name="accept" className='accept-btn' value="승인" />
        <input type="submit" name="reject" className='reject-btn' value="취소" />
      </div>
    </div>
  )
}

export default ListForm