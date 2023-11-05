import "./App.css";
import "./Result";
import "./League";
import "./Table";
import "./Player";
import "./Contact";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="top">
      <div>
        <div id="header">
          <Link to="/"><img id="logo" src="/Logo.png" width="150px" alt="RTF_logo" /></Link>
          <h1>Contact</h1>
        </div>
      </div>

      <div id="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/result">Result</Link>
            </li>
            <li>
              <Link to="/league">League</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/player">Player</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="background-container">
          <div id="contact">
            <h1>Contact Us</h1>
            <p>
              We are welcome to answer all your questions.
            </p>
          </div>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRdqRSCSBjvQJxrwwfHxwzsTfJnGsstcJmZCXcxXCxjCtXPGwRpsRskBDZnJhMWrzHtLrL" target="_blank">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
          <a href="https://www.linkedin.com/in/diamand-mean-9979a91b8/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a href="https://www.facebook.com/diamond.the.conqueror" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare}/>
          </a>
          <a href="https://www.instagram.com/_md___diamond_/" target="_blank">
            <FontAwesomeIcon icon={faInstagramSquare}/>
          </a>
          <a href="https://www.google.com/maps/place/BME+Q+Building/@47.4733817,19.0572847,17z/data=!3m1!4b1!4m6!3m5!1s0x4741ddaa3514e031:0x22ab4283e147d415!8m2!3d47.4733781!4d19.059865!16s%2Fg%2F12613y1gp?entry=ttu" target="_blank">
            <FontAwesomeIcon icon={faMap}/>
          </a>
          <div 
            dangerouslySetInnerHTML={{  
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.232957463464!2d19.059637009011087!3d47.47297357711617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddaa3514e031%3A0x22ab4283e147d415!2sBME%20Q%20Building!5e0!3m2!1sen!2shu!4v1697713457683!5m2!1sen!2shu" width="900" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
          }} 
  />
      </div>
      <footer>
        <p>@2023 REAL-TIME FOOTBALL. Alll right reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
