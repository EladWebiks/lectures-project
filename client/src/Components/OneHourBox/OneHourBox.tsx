import React, { FC } from 'react'
import './OneHourBox.css'

interface HourInterface{
    hour: string
    setPickedHour: (hour: string)=>void,
    pickedHour: string
}

const OneHourBox:FC<HourInterface> = ({hour,setPickedHour,pickedHour}) => {
  return (
    <div className='OneHourBox' style={{backgroundColor: pickedHour === hour? '#BFA25F' : 'white' }} onClick={()=>{setPickedHour(hour)}}>
        {hour}
        </div>
  )
}

export default OneHourBox