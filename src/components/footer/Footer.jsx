import './Footer.scss';
import { GiWireframeGlobe } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa";
import { PiPaypalLogoLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className='footer'>
            <small className="footer__left">
                <address className="footer__address">Hi-Fi Corner <span className='line-break'>Edinburgh 2 Joppa Road EH15 2EU</span><span className='line-break'>Falkirk 44 Cow Wynd FK1 1PU</span></address>
                <div className="footer__links">
                    <a href="#" className="footer__link-left">Returns & Refunds</a>
                    <a href="#" className="footer__link-right">Privacy Policy</a>
                </div>
            </small>
            <div className="footer__right">
                <div className="footer__icons-left">
                    <a className='footer__icon-text-left' href="#"><GiWireframeGlobe />worldpay</a>
                    <a className='footer__icon-left' href="#"><RiVisaLine /></a>
                    <a className='footer__icon-left' href="#"><FaCcMastercard /></a>
                    <a className='footer__icon-text-left' href="#">Maestro</a>
                    <a className='footer__icon-left' href="#"><FaCcJcb /></a>
                    <a className='footer__icon-text-left cursive' href="#"><PiPaypalLogoLight />PayPal</a>
                </div>
                <div className="footer__icons-right">
                    <a href="#" className="footer__icon-right"><FaFacebookF /></a>
                    <a href="#" className="footer__icon-right"><FaYoutube /></a>
                    <a href="#" className="footer__icon-right"><FaTwitter /></a>
                    <a href="#" className="footer__icon-right"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    )
}