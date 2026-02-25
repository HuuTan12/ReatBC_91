import React, { useState } from 'react'

const ChangeFontSize = () => {

    const [fSize, setfSize] = useState(16);

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">
        ChangeFontSize
      </div>

      <p style={{fontSize:fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, perspiciatis?</p>
      <button className="btn btn-success me-2" onClick={(e) => setfSize(fSize + 2)}>Zoom in</button>
      <button className="btn btn-danger me-2" onClick={(e) => setfSize(fSize - 2)}>Zoom out</button>
      {/* <img src="/img/products/black-car.jpg" alt="..."/> */}
    </>
  )
}

export default ChangeFontSize