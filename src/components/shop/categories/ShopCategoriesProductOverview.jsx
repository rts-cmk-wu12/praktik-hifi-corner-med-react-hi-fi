import './ShopCategoriesProductOverview.scss';
import { FaLongArrowAltUp } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";
import ShopCategoriesProductCard from './ShopCategoriesProductCard';

export default function ShopProductOverview() {

    return (
        <section className='shop-categories-product-overview'>
            <h2 className='shop-categories-product-overview__heading'>Amplifiers</h2>
            <div className='shop-categories-product-overview__display'>
                <div className='shop-categories-product-overview__filter'>
                    <label htmlFor="filter-select" className='shop-categories-product-overview__text'>Sort by:</label>
                    <select name="filters" id="filter-select" className='shop-categories-product-overview__select'>
                        <option value="price">Price</option>
                        <option value="price">filter2</option>
                        <option value="price">filter3</option>
                    </select>
                    <button className='shop-categories-product-overview__button'><FaLongArrowAltUp /></button>
                </div>
                <div className='shop-categories-product-overview__view'>
                    <p className='shop-categories-product-overview__text'>View as:</p>
                    <button className='shop-categories-product-overview__button'><PiSquaresFourFill /></button>
                    <button className='shop-categories-product-overview__button'><IoMenuSharp /></button>
                </div>
                <div className='shop-categories-product-overview__number'>
                    <p className='shop-categories-product-overview__fat-text'>x item(s)</p>
                    <label htmlFor="number-select" className='shop-categories-product-overview__text'>Show:</label>
                    <select name="numbers" id="number-select" className='shop-categories-product-overview__select'>
                        <option value="300">300</option>
                        <option value="300">xxx</option>
                        <option value="300">xxx</option>
                    </select>
                </div>
            </div>
            <ul className='shop-categories-product-overview__products-container'>
                <ShopCategoriesProductCard />
                <ShopCategoriesProductCard />
                <ShopCategoriesProductCard />
                <ShopCategoriesProductCard />
                <ShopCategoriesProductCard />
                <ShopCategoriesProductCard />
            </ul>
        </section>
    )
}