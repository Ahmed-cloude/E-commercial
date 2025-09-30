import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact =()=>{
    return(
        <div className="Contact">
            <p className="contactTitle">Contact</p>
            <div className="contactShape">
                <h2>
                    Connect with the Owener directly <br/>
                    if you want to ask something, <br/>
                    built the same Application for yourself<br/>
                    or to complain about issues...<br/><br/><br/><br/>
                    <div>
                        <button> <FontAwesomeIcon icon={faFacebook} /> </button>
                        <button> <FontAwesomeIcon icon={faGithub} /> </button>
                        <button> <FontAwesomeIcon icon={faWhatsapp} /> </button>
                    </div>
                </h2>
                <form>
                    
                    <label>Name</label> <br/>
                    <input type="text" required/><br/>

                    <label>Email Address</label> <br/>
                    <input type="email" required/><br/>

                    <label>Reason for connect</label><br/>
                    <select>
                        <option>Ask for new Item</option>
                        <option>Complaint</option>
                    </select> <br/>

                    <label>Your message</label><br/>
                    <textarea></textarea><br/>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;