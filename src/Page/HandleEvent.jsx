import React from 'react'

const HandleEvent = () => {

    //callback function
    const handleClick = (e) => {
        alert("Hello Cybersoft");
    }
  return (
    <div className="container">
        <h1 className="text-center text-primary">HandleEvent </h1>

        <button className="btn btn-success" onClick={handleClick}>Click me!</button>

        <button className="btn btn-danger" onClick={(event) => {
            console.log('helloo các bạn');

            //event.target: dom ngược lại thẻ button
            event.target.className = "btn btn-dark ";
        }}>Click đi nây</button>


        </div>
  )
}

export default HandleEvent