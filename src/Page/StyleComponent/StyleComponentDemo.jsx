import React from 'react'

//import file css module
import ObStyle from './StyleComponentDemo.module.css'

const StyleComponentDemo = () => {

    let obStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        fontSize: "20px"
    }
  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">
        StyleComponentDemo
      </div>
        <p style={{backgroundColor: "blue", color: "orange"}}>Lorem ipsum dolor sit amet.</p>
        <p style={obStyle}>Lorem ipsum dolor sit amet.</p>

        <p className={`${ObStyle.bgRed} fs-5 ${ObStyle.text-pink}`}>Lorem ipsum dolor sit amet consectetur.</p>
        </>
    )
}

export default StyleComponentDemo