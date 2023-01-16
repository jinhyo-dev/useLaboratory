import React from 'react'

const SignForm = () => {
  return (
    <div className='signForm-container'>
        <h3>랩실신청</h3>
        <p>랩실 선택</p>
        <select name='lab-select'>
            <option selected>랩실 선택</option>
            <option value="lab1">Lab 1</option>
            <option value="lab2">Lab 2</option>
            <option value="lab3">Lab 3</option>
            <option value="lab4">Lab 4</option>
            <option value="lab5">Lab 5</option>
            <option value="lab6">Lab 6</option>
            <option value="lab7">Lab 7</option>
        </select>
        <p>대표 이름</p>
        <input type="text" name="name" className="" />
        <p>학년 반 번호</p>
        <input type="text" name="schoolNum" className="" />
        <p>사유</p>
        <input type="text" name="reason" className="" />
    </div>
  )
}

export default SignForm