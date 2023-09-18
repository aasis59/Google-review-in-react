import "./slide.scss";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

function Slide() {
  return (
    <>
      <div className="slide-section ms-3 ">
        <div className="d-flex">
          <div className="slide-img">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjVpjP4tOyt3yk0GV6S9n3WJTAAJihEin2N-um3QCAb9zqU=s128-c0x00000000-cc-rp-mo"
              alt="asdf"
            />
          </div>
          <div className="ms-2 mt-1">
          <div className="slide-name-01">
                Binaya Chaudahary
            </div>
            <div className="slide-name-02">
                september 6,3023
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
            it's a good place for anyone who is seeking to make a better career in the IT industry.
            </div>
            


        </div>

      </div>
    </>
  );
}
export default Slide;
