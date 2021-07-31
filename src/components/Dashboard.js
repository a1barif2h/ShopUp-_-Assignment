import React from 'react'
import AttendanceBlock from './AttendanceBlock'
import Notification from './Notification'
import PerformanceBlock from './PerformanceBlock'

export default function Dashboard() {
  return (
    <div>
      <Notification />
      <h1 className='dashboard_title'>Dashboard</h1>
      <div className="dashboard_container">
        <div className="attendance_block">
          <AttendanceBlock />
        </div>
        <div className="performance_block">
          <PerformanceBlock />
        </div>
      </div>
    </div>
  )
}
