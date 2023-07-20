import React from 'react'

function Button({text,className,onClick}) {
  return (
    <button class={`inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button 
