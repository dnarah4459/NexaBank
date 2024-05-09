import React from 'react'

const ComponentsThatUseSideBar  = ( {children}: {children: React.ReactNode} ) => {
  return (
    <div>

        SIDEBAR
      {children}
    </div>
  )
}

export default ComponentsThatUseSideBar 
