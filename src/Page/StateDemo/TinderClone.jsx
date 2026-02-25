import React, { useState } from "react";

const TinderClone = () => {

    const [people, setpeople] = useState(`1`);

    const randomPeople = () => {
        const randomId = Math.floor(Math.random() * 99) + 1;
        setpeople(randomId);
    }

  return (
    <>
      <div className="text-white bg-dark text-center p-4 fs-4">TinderClone</div>
      <div className="container mt-3">
        <div className="card w-50 mx-auto">
          <div className="card-header">Tinder Clone</div>
           <img
              src={`https://i.pravatar.cc?u=${people}`}
              alt="..."
              
            />
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet .</p>
            <p>Lorem ipsum amet .</p>
           
          </div>
          <div className="card-footer">
            
            <button className="btn btn-success" onClick={randomPeople}>Like</button>
            <button className="btn btn-danger mx-4  " onClick={randomPeople}>Dislike</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TinderClone;
