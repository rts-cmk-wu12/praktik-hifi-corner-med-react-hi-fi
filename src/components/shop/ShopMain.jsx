import { Link } from 'react-router';
import './ShopMain.scss';
import { useState } from 'react'

export default function ShopMain() {

    const [category, setCategory] = useState('');

    return (
        <main className="shop-main">
            <ul className="shop-main__list">
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Shop by brand</a>
                </li>
                <li className="shop-main__list-item">
                    <Link onClick={() => setCategory('amplifiers')} to={`/shop/${category}`} className="shop-main__link">Amplifiers</Link>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Speakers</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Turntables</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">CD Players</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Streamers</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Cables</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Furniture</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Headphones</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Home Cinema</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Outlet - save up to 50%</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Ebay Shop</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Ceiling Speakers</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">TVs</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Vinyl LPs</a>
                </li>
                <li className="shop-main__list-item">
                    <a href="#" className="shop-main__link">Shop Now</a>
                </li>
            </ul>
        </main>
    )
}