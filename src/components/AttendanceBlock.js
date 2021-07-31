import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { MARKS } from '../__mocks__/data';
import Attendance from './Attendance';

const { Option } = Select;

const AttendanceBlock = () => {
  const [semesterData, setSemesterData] = useState([])
  const [selectedSemester, setSelectedSemester] = useState(null)

  useEffect(() => {
    if (semesterData.length > 0) {
      setSelectedSemester(semesterData[0])
    }
  }, [semesterData])

  useEffect(() => {
    const tempData = []
    for (let i = 0; i < MARKS.length; i++) {
      const marksElement = MARKS[i]
      const {
        attendance,
        semester,
        total: {
          accounts,
          bus_study,
          com_skill,
          economics,
          french,
          inc_tax
        }
      } = marksElement
      tempData.push({
        semester: `0${semester}`,
        attendance,
        accounts,
        bus_study,
        com_skill,
        economics,
        french,
        inc_tax

      })
    }

    setSemesterData(tempData)

  }, [])

  function onChange(value) {
    const selectSemester = semesterData.find(se => se.semester === value)
    setSelectedSemester(selectSemester)
  }

  return (
    <>
      <div className='attendance_left'>
        {
          selectedSemester &&
          <div style={{marginTop: 25}}>
            <p className='left_title'>Attendance</p>
            <p className='left_number'>{selectedSemester.attendance}%</p>
          </div>
        }
        <p className='select_title'>Semester</p>
        <Select
          showSearch
          style={{ width: 60 }}
          optionFilterProp="children"
          onChange={onChange}
          data-testid="select-sem"
          defaultValue='01'
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {
            semesterData && semesterData.map(semester => {
              return (<Option key={semester.semester} value={semester.semester}>{semester.semester}</Option>)
            })
          }
        </Select>
      </div>
      <div className="attendance_right">
        {selectedSemester && <Attendance
          selectedSemester={selectedSemester}
        />}
      </div>

      {/* <select data-testid="select-sem">
      </select>
      <Attendance
        semesterData={semesterData}
      /> */}
    </>
  )
}

export default AttendanceBlock;