import "./slide.scss";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { AppContext } from "../contextapi";
import { useContext, useState } from "react";

function Slide({ item }) {
  const { users } = useContext(AppContext);
  console.log(users);

  const comment = item.description;
  return (
    <>
      <div className="slide-section ms-3 ">
        <div className="d-flex">
          <div className="slide-img">
            {users.includes("value-03") ? (
              <img
                src="data:image/jpeg;base64,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"
                alt="no photo"
              />
            ) : (
              <img src={item.imageLink} alt="asdf" />
            )}
          </div>
          <div className="ms-2 mt-1">
            <div className="slide-name-01">  {users.includes("value-04") ? (
              <p></p>
            ) : (
              item.name
            )}</div>
            <div className="slide-name-02">{item.date}</div>
          </div>

          <div className="ms-auto me-2 mt-2 slide-google ">
            <FcGoogle size={30} />
          </div>
        </div>
        <div className="star-section mt-3 ms-4">
          <AiFillStar color="gold" size={30} />
          <AiFillStar color="gold" size={30} />
          <AiFillStar color="gold" size={30} />
          <AiFillStar color="gold" size={30} />
          <AiFillStar color="gold" size={30} />
          <div className="text-start mt-3">  {users.includes("value-02") ? (
              <p></p>
            ) : (
              comment
            )} </div>
        </div>
      </div>
    </>
  );
}
export default Slide;
