import React from "react";
import {
    FaGithub,
    FaLink,
    FaMailBulk,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import ayush from "../../assets/ayush.png";

import "./footer.scss";

const Footer = () => {
    const handleClick = () => {
        window.location.href = 'https://ayushverse.vercel.app/';
      };
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                <img src={ayush}  onClick={handleClick}  style={{ cursor: 'pointer' }}alt="" />
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <Link to="https://github.com"><FaGithub style={{color:"aliceblue"}}/></Link>
                    </span>
                    <span className="icon">
                       <Link to="https://www.ayushverse.vercel.app"><FaLink style={{color:"aliceblue"}} /></Link> 
                    </span>
                    <span className="icon">
                       <Link to="https://www.linkedin.com"><FaLinkedin style={{color:"aliceblue"}} /></Link> 
                    </span>
                    <span className="icon">
                        <Link to="mailto:ayushsingh8107@gmail.com"> <FaMailBulk style={{color:"aliceblue"}}/></Link>
                       
                    </span>
                </div>
                <div className="copyright">
                All Rights Reserved. © 2025 Cinemix 
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;