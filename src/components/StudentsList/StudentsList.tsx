import React, { useState } from 'react'
import { Student } from '../../types/Student'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import StudentItem from '../StudentItem/StudentItem';

export default function StudentsList() {
  const {list, status}: {list: Student[], status: string} = useSelector((store: RootState) => store.students);
  
  return (
    <div>
      {
        status === "loading"
        ? <p>Данные грузятся</p>
        : list.map(student => 
        <StudentItem key={student.firstName} 
        {...student}/>)
      }
    </div>
  )
}