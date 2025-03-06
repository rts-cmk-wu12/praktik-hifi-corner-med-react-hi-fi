import './ShopHeader.scss';
import HeaderMenu from './HeaderMenu';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { Link } from 'react-router';

export default function ShopHeader() {

    return (
        <header className='shop-header'>
            <div className='shop-header__upper-row'>
                <Link to="/" className='shop-header__logo'>
                    <img className='shop-header__logo-image' src="/images/page_images/logo_sml.gif" alt="Logo for Hi-Fi Club" />
                    <p className='shop-header__logo-text'>Hificorner.co.uk</p>
                </Link>
                <div className='shop-header__icons'>
                    <form className='shop-header__search-bar'>
                        <input type="text" placeholder='Search entire store here...' className='shop-header__search-bar-input' />
                        <button className='shop-header__search-bar-button'><FaMagnifyingGlass /></button>
                    </form>
                    <a className='shop-header__icon-container' href='#'>
                        <FaUserLarge />
                        <p className='shop-header__icon-text'>Account</p>
                    </a>
                    <a href='#' className='shop-header__icon-container'>
                        <FaShoppingCart />
                        <p className='shop-header__icon-text'>Cart</p>
                    </a>
                    <a className='shop-header__icon' href="#"><IoLocationOutline /></a>
                    <a className='shop-header__icon' href="#"><BsTelephone /></a>
                    <a className='shop-header__icon' href=""><BsEnvelope /></a>
                </div>
            </div>
            <HeaderMenu className='shop-header__menu' />
        </header>
    )
}