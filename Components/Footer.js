import React from 'react'

export default function footer() {
  let style = {
    position: "relative",
    width: "100%",
    top: "70vh"
  }
  return (
    <footer className='bg-dark text-light py-1' style={style}>
      <p className='text-center'>
        Copyright &copy; ProgrammingNinjas
      </p>
    </footer>
  )
}
