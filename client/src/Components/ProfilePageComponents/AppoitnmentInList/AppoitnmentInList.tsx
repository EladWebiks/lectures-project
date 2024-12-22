import { FC } from 'react'
import './AppoitnmentInList.css'

interface AppoitnmentInListInterface{
    date: Date,
    description: string | undefined
}
const AppoitnmentInList: FC<AppoitnmentInListInterface> = ({date,description}) => {
  date = new Date(date)
  return (
    <div className='AppoitnmentInList'>
        <p>{`${date?.toLocaleDateString()}: ${date.toLocaleTimeString()} - ${description}`}</p>
    </div>
  )
}

export default AppoitnmentInList