import React, { FC } from 'react'
import './OneHourBox.css'

interface HourInterface{
    hour: string
    setPickedHour: (hour: string)=>void,
    pickedHour: string
    date: Date;
}

const OneHourBox:FC<HourInterface> = ({hour,setPickedHour,pickedHour,date}) => {
  const offset = date.getTimezoneOffset();
  let workhour:any = hour.split(":")
  workhour[0] = String(Number(workhour[0])-offset/60)
  workhour = workhour.join(":")
  return (
    <div className={pickedHour === hour ? `OneHourBox pickedHour` : `OneHourBox`} onClick={()=>{setPickedHour(hour)}}>
        {workhour}
        </div>
  )
}

export default OneHourBox