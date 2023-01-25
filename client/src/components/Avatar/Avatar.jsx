
import React from 'react'


const Avatar = ({children, backgroundColor,px,py,cursor, padding,color,borderRadius,fontSize,textAlign,textDecoration}) => {
    const style = {
      backgroundColor,
      padding:`${py} ${px}`,
      color: color || 'black',
      borderRadius,
      fontSize,
      textAlign:'center',
      cursor: cursor || null,
      textDecoration: "none"
    }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
