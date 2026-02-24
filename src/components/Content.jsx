import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="bg-primary text-white p-5 text-center ">
      <div className="row">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Content;
