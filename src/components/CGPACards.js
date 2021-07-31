import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import React, { useState } from 'react';

const CGPACards = ({ semesterData }) => {
  const [semCount, setSemCount] = useState(1)
  const selectedSemester = semesterData[semCount - 1]
  console.log(selectedSemester, "selectedSemester")
  const prevHandler = () => {
    if (semCount > 1) {
      setSemCount(prevCount => prevCount - 1)
    }
  }

  const nextHandler = () => {
    if (semCount < semesterData.length) {
      setSemCount(prevCount => prevCount + 1)
    }
  }

  const contentStyle = {
    height: '140px',
  };
  return (
    <div data-testid="cgpa-cards">
      <div className="cgpa_top">
        <div>
          <p className='cgpa_top_title'>Performance (CGPA)</p>
        </div>
        <div>
          <Button style={{ outline: 0, border: 0 }} onClick={prevHandler}>
            <LeftOutlined />
          </Button>
          <span>Sem {semCount}</span>
          <Button style={{ outline: 0, border: 0 }} onClick={nextHandler}>
            <RightOutlined />
          </Button>
        </div>
      </div>

      {
        selectedSemester &&
        <div className='cgpa_marks_container'>
          <Carousel style={{ width: '100%' }} autoplay>
            <div>
              <div style={contentStyle}>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.accounts}</p>
                  <p className='cgpa_nuber_title'>Accounts</p>
                </div>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.bus_study}</p>
                  <p className='cgpa_nuber_title'>Bus. Study</p>
                </div>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.economics}</p>
                  <p className='cgpa_nuber_title'>Economics</p>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.com_skill}</p>
                  <p className='cgpa_nuber_title'>Com. skill</p>
                </div>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.french}</p>
                  <p className='cgpa_nuber_title'>French</p>
                </div>
                <div className='cgpa_number'>
                  <p className='cgpa_number_n'>{selectedSemester.inc_tax}</p>
                  <p className='cgpa_nuber_title'>Inc. tax</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      }
      {/* include your code for cgpa cards here */}
    </div>
  )
}

export default CGPACards