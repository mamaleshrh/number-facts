import { AiFillFacebook,AiFillInstagram ,AiFillTwitterSquare,AiFillGithub} from "react-icons/ai";
import React from "react";

function Footer() {
    return(

        <div className="centre ">
        <p className="footersec">

        Created by Mamalesh Rajkumar Hake,reach me at :
        </p>
           <a href="https://ne-np.facebook.com/people/Mamalesh-Hake/100073334319522/"><AiFillFacebook className="footersize"/></a>
           <a href="https://www.instagram.com/mamaleshhake/?hl=en"><AiFillInstagram className="footersize"/></a>
           <a href="https://twitter.com/MamaleshH"><AiFillTwitterSquare className="footersize"/></a>

           <a href="https://github.com/mamaleshrh"><AiFillGithub className="footersize"/></a>

        </div>
    )
}
export default Footer;