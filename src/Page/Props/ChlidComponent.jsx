import React from 'react'

const ChlidComponent = (props) => {
  return (
    <div className="text-white bg-primary my-2 text-center p-4  rounded fs-4">
        {props.title} - <i className="fa fa-eye"></i>{props.view}</div>
  )
}

export default ChlidComponent