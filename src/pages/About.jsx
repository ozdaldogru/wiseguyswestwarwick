import AboutUs from "../images/about.jpg";
import Logo from "../images/logo2.png";
import "../styles/About.css"

const About = () => {
  return (
    <>
        <div className="about">

          <div className="logo"><img src={Logo}  alt="" /></div>
          <h1>Who We Are</h1>
          <div className="paragraphs">
              <p>
              We started our business in 2018 with one goal in mind: providing an enjoyable experience to West Warwick, Warwick, Coventry, East and West Greenwich. 
              </p>
              <p>
              Thanks to our experience and dedication, we offer you a wide range of fast food choices, so you can get your meal quickly and easily. 
              </p>
              <p>
              Providing dishes that are fresh, hearty and simply unforgettable. 
              </p>

              <p>So all we love to eat, Please Leave The Gun and Take the Sandwich</p>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div className="image"><img src={AboutUs}  alt="A sliced pizza image on a table" /></div>

        </div>
    
    </>



  );
};

export default About;
