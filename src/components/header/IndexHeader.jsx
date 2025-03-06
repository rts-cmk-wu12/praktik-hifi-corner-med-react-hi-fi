import './IndexHeader.scss';
import HeaderMenu from './HeaderMenu';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Logo from './Logo';

export default function IndexHeader() {

    return (
        <header className='index-header'>
            <div className="index-header__links-container">
                <div className="index-header__icon-container">
                    <a className="index-header__icon" href="#"><IoLocationOutline /></a>
                    <a className="index-header__icon" href="#"><BsTelephone /></a>
                    <a className="index-header__icon" href="#"><BsEnvelope /></a>
                </div>
                <a className="index-header__icon index-header__icon-button-style" href="#"><FaEnvelope />Subscribe</a>
            </div>
            <HeaderMenu />
            <section className="index-header__logo-container">
                <Logo />
            </section>
        </header>
    )
}
