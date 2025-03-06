import './SmallHeader.scss';
import HeaderMenu from './HeaderMenu';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function SmallHeader() {

    return (
        <header className='small-header'>
                <div className="small-header__icon-container">
                    <a className="small-header__icon" href="#"><IoLocationOutline /></a>
                    <a className="small-header__icon" href="#"><BsTelephone /></a>
                    <a className="small-header__icon" href="#"><BsEnvelope /></a>
                </div>
            <HeaderMenu className="small-header__menu" />
        </header>
    )
}