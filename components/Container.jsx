import React, { Children } from 'react'

function Container({children, widthDesktop}) {
  return (
    <div className={`w-full md:max-w-[1195px] mx-auto`}>
        {children}
    </div>
  )
}

export default Container