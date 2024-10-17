import "../../src/styles/Form.css";

const contactForm = () => {

return (
<>

<form>
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" name="firstName" placeholder="Your name.."/>

    <label htmlFor="lastName">Last Name</label>
    <input type="text" id="lastName" name="lastName" placeholder="Your last name.."/>

    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Your subject.."/>


    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
  
</>


);
};
export default contactForm;