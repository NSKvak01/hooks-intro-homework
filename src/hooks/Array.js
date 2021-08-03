import React,{useState} from 'react'

function HooksArray(initialState) {
    const [value, setValue] = useState(initialState)
    function onChange(e){
        setValue(e.target.value)
    }
    function clearInput(){
        setValue("")
    }
    return [value, onChange, clearInput]
}

export default HooksArray
