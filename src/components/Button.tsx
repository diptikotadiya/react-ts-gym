//import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
  type: "button" | "submit" | "reset";
}

function Button({children,classname,type}: ButtonProps) {
  return (
    <div>
      <button 
      className={`px-5 py-1 justify-center  h-10 lg:h-14  bg-orange-500 text-white text-2xl  italic  rounded ${classname}`}
      type = {type}
      >{children}</button>
    </div>
  ) 
}

export default Button