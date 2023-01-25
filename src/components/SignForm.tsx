import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/signForm.css";
import { AiOutlineCalendar } from "react-icons/ai"

const SignForm = () => {

  const datePickerCustom = ({ value, onClick }: { value: string; onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => (
    <button className="date-picker-custom" onClick={onClick}>
      <AiOutlineCalendar className={'calendar-icon'}/>
      {value}
    </button>
  )

  const date = new Date()
  const month = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()

  const [calendarDate, setCalendarDate] = useState<Date>(date)

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
        <input type="text" name="name" className="name-input" placeholder='예)김진효' />
      </div>
      <div className="lab-div">
        <p className="school-lab">학년 반 번호</p>
        <input type="text" name="schoolNum" className="schoolNum-input" placeholder='예)2206' />
      </div>
      <div className="lab-div">
        <p className="date-lab">랩실 사용 날짜</p>
          <ReactDatePicker
            dateFormat={'yyyy-MM-dd'}
            selected={calendarDate}
            onChange={(date: Date) => setCalendarDate(date)}
            startDate={calendarDate}
            customInput={React.createElement(datePickerCustom)}
          />
      </div>
      <div className="lab-div">
        <p className="pw-lab">비밀번호</p>
        <input type="text" name="pw-input" className="pw-input" placeholder='비밀번호를 입력해주세요.' />
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