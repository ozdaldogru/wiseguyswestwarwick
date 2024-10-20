import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ContactForm from "../components/Form";
import "../styles/Contact.css"


const Contact = () => {
  return (
    <>
      <Box sx={{ my: 5, ml: 10, textAlign: "center", "& h2": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h2">Contact Us</Typography>
        <p>
          Do You wanna organize any Party, Catering,or Chit Chat or report a delicious Crime? 
          No Problem at ALL, We Would Like To Hear From You.
        </p>
        <p>
          Just Keep It Your Mind We are Open Between 11:00am to 11:00pm
        </p>
      </Box>

     <Box className= "contact">
              <Box className= "contact1">
                <TableContainer component={Paper}>
                  <Table aria-label="contact table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tableCell">
                          <h1>Contact Details</h1>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <MailIcon sx={{ color: "skyblue", pt: 1 }} /> 
                          <a href="email:wiseguysdelihouse@gmail.com">wiseguysdelihouse@gmail.com</a>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <CallIcon sx={{ color: "green", pt: 1 }} /><a href="tlf:+1-401-822-06-90">401-822-06-90</a>
                        </TableCell>
                      </TableRow>
                      <TableRow >
                            <div className="googleMAp">
                              <h1>Location</h1>

                              <iframe title="GoogleMap" className="googleMap" width="700" height="455"  src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=289%20Cowesett%20Ave,%20West%20Warwick,%20RI%2002893+(Wise%20Guys%20Deli%20Pizza%20West%20Warwick)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                              <a href="https://www.gps.ie/">gps systems</a>
                              </iframe>

                            </div>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <div></div>
              <Box className="contact2" >
                  <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                      <TableHead>
                        <TableRow s > 
                          <TableCell className="tableCell" >
                            <h1>Contact Form</h1>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell >
                              <ContactForm/>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>


      </Box>



    </>


  );
};

export default Contact;
