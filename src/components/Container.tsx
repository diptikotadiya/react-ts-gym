import React from 'react'

type ContainerProps = {
  children : React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='mt-[66px] lg:mt-[110px]
    
    
    
    '>
      {children}
    </div>
  )
}

export default Container