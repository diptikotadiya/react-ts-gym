//import React from 'react'

type Props = {
  placeholder : string ,
  classname ?: string,
  options ?: string[],
  value: string|number
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>, property: string) => void;
}

function Input(
  {placeholder,
    classname,
    handleChange,
    value,
  }: Props) {
  return (
    <div>
      <input
      
      type="text"
      value={value} 
      onChange={(e) => handleChange && handleChange(e, placeholder)}
      placeholder={placeholder}
      className={`w-full p-1 h-10 rounded-sm text-black text-lg ${classname}`}
       />
    </div>
  )
}

export default Input