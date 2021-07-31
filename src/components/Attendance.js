import React from 'react';

const Attendance = ({selectedSemester}) => {
  const {accounts,bus_study,com_skill,economics, french, inc_tax} = selectedSemester
  return (
    <div data-testid="attendance-card">
      <div className='card_item'>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>Accounts</p>
          <p className='card_number'>{accounts}/100</p>
        </div>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>Inc.Tax</p>
          <p className='card_number'>{inc_tax}/100</p>
        </div>
      </div>

      <div className='card_item'>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>Bus. Study</p>
          <p className='card_number'>{bus_study}/100</p>
        </div>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>French</p>
          <p className='card_number'>{french}/100</p>
        </div>
      </div>

      <div className='card_item'>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>Economics</p>
          <p className='card_number'>{economics}/100</p>
        </div>
        <div style={{width: '50%', textAlign: 'center'}}>
          <p className='card_title'>Com. Skill</p>
          <p className='card_number'>{com_skill}/100</p>
        </div>
      </div>
    </div>
  )
}

export default Attendance