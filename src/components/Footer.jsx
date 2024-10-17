import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import "../styles/Footer.css";



const Footer = () => {
  return (
    <>
      <div className="footer">

          <div className="store">
              <div>
                <h2>Store Details</h2>   
                <p>Wise Guys Deli & Pizza</p>     
                <p>289 Cowesett Ave West Warwick, RI 02893 </p>    
              </div>

              <div>
              <h2>Contact </h2> 
              <p>(401) 822-0690 </p>   
              <p> wiseguysdelihouse@gmail.com </p>   
              </div>              

              <div>
                <h2>Opening Hours</h2>   
                <p>Everyday:</p>  
                <p>11:00 am - 09:00 pm</p>   
              </div>
              
              <div className="socialMedia">
                  <h2>Social Media </h2> 
                  <a href="https://www.instagram.com/wiseguyswestwarwick/" target="blank" className="icons">Instagram<InstagramIcon/></a>
                  <br />
                  <a href="https://www.facebook.com/wiseguysdeliwestwarwick/photos/"  target="blank" className="icons">Facebook<Facebook /></a>
              </div>
          </div>


          <div className="copyright"> All Rights Reserved &copy;2024 </div>

      </div>
    </>
  );
};

export default Footer;
