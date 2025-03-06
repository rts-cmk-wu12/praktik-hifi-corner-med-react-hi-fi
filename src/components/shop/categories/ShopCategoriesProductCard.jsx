import { Link } from 'react-router';
import './ShopCategoriesProductCard.scss';

export default function ShopCategoriesProductCard() {

    return (
        <li>
            <article className='shop-categories-product-card'>
                <Link to="#" className='shop-categories-product-card__link'>
                    <img className='shop-categories-product-card__image' src="/images/cd_afspillere/creek_classic_cd.jpg" alt="Image of product" />
                    <h3 className='shop-categories-product-card__heading'>Creed Classic CD Player</h3>
                    <p className='shop-categories-product-card__text'>&#163;800</p>
                </Link>
                    <button className='shop-categories-product-card__button'>Add to cart</button>
            </article>
        </li>
    )
}