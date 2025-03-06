import './HomeProducts.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import HomeProductCard from './HomeProductCard';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/getData';

export default function HomeProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {

        getAllProducts();
        console.log(data)
        
    }, []);

    return (
        <section className="home-products">
            <button className='home-products__button home-products__previous-button'><FaChevronLeft /></button>
            <div className='home-products__products-container'>
                <HomeProductCard />
            </div>
            <button className='home-products__button home-products__next-button'><FaChevronRight /></button>
        </section>
    )
}