//import React from 'react'

type ButtonProps = {
  children : string,
  classname ?: string
}

function Button({children,classname}: ButtonProps) {
  return (
    <div>
      <button className={`px-5 py-1 justify-center  h-10 lg:h-14  bg-orange-500 text-white text-2xl  italic  rounded ${classname}`}>{children}</button>
    </div>
  ) 
}

export default Button