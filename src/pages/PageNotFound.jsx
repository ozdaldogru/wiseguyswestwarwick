import ErrorImage from "../images/404.jpg";
import { NavLink } from "react-router-dom";
import "../styles/PageNotFound.css"


const PageNotFound = () => {
  return (
    <>
    <div className="backGround">

        <div className="errorImage">
          <img src={ErrorImage}  alt="error page" className="errorImage"/>
          <NavLink activeClassName="active" to={"/"}>
            <button className="homeButton">Home</button>      
          </NavLink>

        </div>

    </div>
    </>
  );
};

export default PageNotFound;
