import { RightOutlined } from '@ant-design/icons';
import React from 'react';

export default function Notification() {
  return (
    <div className='notification_container'>
      <div className='notification_updates'>
        <p>Updates</p> 
        <p style={{textAlign: 'left', marginLeft: 20, marginTop: '-18px'}}>05</p>
      </div>
      <div className='notification_message1'>
        <p>All classes are cancelled for 24th July 2020, due to mandatory curfew. No classes will resume till further notice.</p>
      </div>
      <div className='notification_border' />
      <div className='notification_message2'>
        <p>Semester 6 results will be declared on 31st July 2020.</p>
        <div className="date_area">
          <p className='rotate_date'>02/05</p>
          <RightOutlined style={{display: 'inline-block', marginTop: 15}} />
        </div>
      </div>
    </div>
  )
}
