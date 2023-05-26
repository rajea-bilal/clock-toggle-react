import React from 'react'
import { format } from 'date-fns'

const Clock = () => {
    const [ time, setTime ] = React.useState(new Date())

    React.useEffect(() => {
        const intervalId = window.setInterval(() => {
            console.log('tick')
            setTime(new Date())
        }, 1000)

        return(() => {
            clearInterval(intervalId)
        })
    }, [])

    return (
      <p className="timeDisplay">
          {format(time, 'hh:mm:ss a')}
        </p>
    )
}

export default Clock
