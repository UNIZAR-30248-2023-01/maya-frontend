'use client'

import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'

export function CalendarDemo ({ project, dict }) {
  const deadlineDate = new Date(project.deadline)
  const [selectedDate, setSelectedDate] = React.useState(deadlineDate)

  const handleDateClick = (date) => {
    setSelectedDate(deadlineDate)
  }

  return (
    <div>
      <div className="flex justify-center items-center w-auto mx-auto mb-2">
        <div className="border rounded-full p-4">
          <p className="text-center"> {dict.project.end} {project.deadline}</p>
        </div>
      </div>
      <Calendar
      mode='single'
      selected={selectedDate}
      onSelect={handleDateClick}
      className='rounded-md border shadow'
      />
    </div>
  )
}
