import React from 'react'
import { Student } from '../../types/Student'
import s from "./style.module.css"
import { useDispatch } from 'react-redux';
import { addMark } from '../../store/slices/studentsSlice';

export default function StudentItem({id, firstName, lastName, marks}: Student) {

    const dispatch = useDispatch();

    const avgMark = marks.reduce((acc, item) => acc + item, 0) / marks.length;
    const countMark = marks.length;


  return (
    <div className={s.student}>
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>avgMark:{avgMark.toFixed(2)} {countMark}</p>
        <button onClick={() => dispatch(addMark({id, mark: 5}))}>5</button>
    </div>
  )
}
