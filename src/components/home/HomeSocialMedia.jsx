import './HomeSocialMedia.scss';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function HomeSocialMedia() {

    return (
        <div className="home-social-media">
            <a href="#" className="home-social-media__icon-container home-social-media__left-image">
                <FaFacebook />
            </a>
            <a href="#" className="home-social-media__icon-container home-social-media__middle-image">
                <FaSquareInstagram />
            </a>
            <a href="#" className="home-social-media__icon-container home-social-media__right-image">
                <AiFillTwitterCircle />
            </a>
        </div>
    )
}