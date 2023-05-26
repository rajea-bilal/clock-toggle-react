import React from 'react'

function useToggle(initialValue) {
    const [ value, setValue ] = React.useState(initialValue)

    function toggleValue() {
        setValue(!value)
    }

    return [ value, toggleValue ]
}

export default useToggle