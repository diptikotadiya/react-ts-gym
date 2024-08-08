//import React from 'react'

type Props = {
  placeholder : string 
  classname ?: string
}

function Input({placeholder,classname}: Props) {
  return (
    <div>
      <input placeholder={placeholder} className={`w-full p-1 h-10 rounded-sm ${classname}`}/>
    </div>
  )
}

export default Input