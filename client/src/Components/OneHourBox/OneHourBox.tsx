import React, { FC } from 'react'
import './OneHourBox.css'

interface HourInterface{
    hour: string
    setPickedHour: (hour: string)=>void,
    pickedHour: string
}

const OneHourBox:FC<HourInterface> = ({hour,setPickedHour,pickedHour}) => {
  return (
    <div className={pickedHour === hour ? `OneHourBox pickedHour` : `OneHourBox`} onClick={()=>{setPickedHour(hour)}}>
        {hour}
        </div>
  )
}

export default OneHourBox