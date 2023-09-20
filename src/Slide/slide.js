import "./slide.scss";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

function Slide({item}) {
  const comment = item.description;
  return (
    <>
      <div className="slide-section ms-3 ">
        <div className="d-flex">
          <div className="slide-img">
            <img
              src={item.imageLink}
              alt="asdf"
            />
          </div>
          <div className="ms-2 mt-1">
          <div className="slide-name-01">
                {item.name}
            </div>
            <div className="slide-name-02">
                {item.date}
          </div>
            </div>

            
          <div className="ms-auto me-2 mt-2 slide-google ">
            <FcGoogle size={30}/>
            
          </div>
        </div>
        <div className="star-section mt-3 ms-4">
            <AiFillStar color="gold" size={30}/>
            <AiFillStar color="gold" size={30}/>
            <AiFillStar color="gold" size={30}/>
            <AiFillStar color="gold" size={30}/>
            <AiFillStar color="gold" size={30}/>
            <div className="text-start mt-3">

            {comment}
            </div>
            


        </div>

      </div>
    </>
  );
}
export default Slide;
