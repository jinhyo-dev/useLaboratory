import React from 'react'
import "../styles/signForm.css"

const SignForm = () => {
  return (
    <div className='signForm-container'>
      <h2 className="sign-text-h2">랩실 신청</h2>
      <div className="lab-div">
        <p className="select-lab">랩실 선택</p>
        <select name='lab-select' className="lab-select">
          <option selected>랩실 선택</option>
          <option value="lab1">LAB 1</option>
          <option value="lab2">LAB 2</option>
          <option value="lab3">LAB 3</option>
          <option value="lab4">LAB 4</option>
          <option value="lab5">LAB 5</option>
          <option value="lab6">LAB 6</option>
          <option value="lab7">LAB 7</option>
        </select>
      </div>
      <div className="lab-div">
        <p className="name-lab">대표 이름</p>
        <input type="text" name="name" className="name-input" placeholder='예)김진효'/>
      </div>
      <div className="lab-div">
        <p className="school-lab">학년 반 번호</p>
        <input type="text" name="schoolNum" className="schoolNum-input" placeholder='예)2206' />
      </div>
      <input
        type="submit"
        name='check-btn'
        className='admin-btn'
        placeholder="신청"
      />
    </div>
  )
}

export default SignForm