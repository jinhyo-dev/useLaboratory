import React from 'react'
import "../styles/listForm.css";

const ListForm = (props: any) => {
  return (
    <div className='listForm-container'>
        <div className='list-title'>
            <span>랩실 </span>
            <span>대표이름 </span>
            <span>학년 반 번호 </span>
            <span>사유 </span>
            <span>확인</span>
        </div>
        <div>
            <span>{props.lab}</span>
            <span>{props.name}</span>
            <span>{props.schoolNum}</span>
            <span>{props.reason}</span>
            <input type="submit" name="accept" className='accept-btn' value="확인" />
            <input type="submit" name="reject" className='reject-btn' value="취소" />
        </div>
    </div>
  )
}

export default ListForm