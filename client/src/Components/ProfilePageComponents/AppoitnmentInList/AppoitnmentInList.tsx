import React, { FC } from 'react'

interface AppoitnmentInListInterface{
    date: string,
    description: string
}
const AppoitnmentInList: FC<AppoitnmentInListInterface> = ({date,description}) => {
  return (
    <div>
        <p>{date} - {description}</p>
    </div>
  )
}

export default AppoitnmentInList