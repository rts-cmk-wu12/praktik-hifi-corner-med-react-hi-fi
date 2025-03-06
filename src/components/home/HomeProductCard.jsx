import './HomeProductCard.scss';
import { Link } from "react-router";

export default function HomeProductCard() {

    return (
        <Link to="/" className='home-product-card'>
            <h2 className="home-product-card__heading">Primaluna sounds</h2>
            <img className='home-product-card__image' src="/images/page_images/Prima-Luna-Amp.png" alt="Placeholder image" />
        </Link>
    )
}