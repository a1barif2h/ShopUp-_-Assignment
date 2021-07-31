import React, { useEffect, useState } from 'react';
import { MARKS } from '../__mocks__/data';
import CGPACards from './CGPACards';

/**
 * Kindly use the mock data provided for rendering the performance block component
 * use CGPACards component to design CGPA cards
 */

const PerformanceBlock = () => {
  const [semesterData, setSemesterData] = useState([])
  const [selectedSemester, setSelectedSemester] = useState(null)

  
  useEffect(() => {
    const tempData = []
    for (let i = 0; i < MARKS.length; i++) {
      const marksElement = MARKS[i]
      const {
        semester,
        cgpa: {
          accounts,
          bus_study,
          com_skill,
          economics,
          french,
          inc_tax,
        }
        
      } = marksElement
      tempData.push({
        semester: `0${semester}`,
        accounts,
        bus_study,
        com_skill,
        economics,
        french,
        inc_tax
      })
    }
    setSemesterData(tempData)
  },[])
  return (
    <CGPACards semesterData={semesterData} />
  )
}

export default PerformanceBlock