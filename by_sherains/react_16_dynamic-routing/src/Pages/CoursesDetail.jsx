import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

  const params = useParams()
  console.log(params.id);
  
  return (
    <div><h2 className='underline capitalize '>{params.id} CoursesDetail----</h2></div>
  )
}

export default CoursesDetail
