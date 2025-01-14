import React, { FC } from 'react'
import './OneHourBox.css'

interface HourInterface{
    hour: string
    setPickedHour: (hour: string)=>void,
    pickedHour: string
    date: Date;
    taken: boolean
}

const OneHourBox:FC<HourInterface> = ({hour,setPickedHour,pickedHour,date,taken}) => {
  const offset = date.getTimezoneOffset();
  let workhour:any = hour.split(":")
  workhour[0] = String(Number(workhour[0])-offset/60)
  workhour = workhour.join(":")
  return (
    taken ? <div className={pickedHour === hour ? `OneHourBox pickedHour disabled` : `OneHourBox disabled`} onClick={()=>{setPickedHour(hour)}}>
        {workhour}
        </div>
        :  <div className={pickedHour === hour ? `OneHourBox pickedHour` : `OneHourBox`} onClick={()=>{setPickedHour(hour)}}>
        {workhour}
        </div>
  )
}

export default OneHourBox