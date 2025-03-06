import { Link } from 'react-router';
import './HomeInfo.scss';

export default function HomeInfo() {

    return (
        <div className="home-info">
            <div className="home-info__container">
                <article className="home-info__card">
                    <Link to="/about" className="home-info__link">
                        <h3 className="home-info__heading">History</h3>
                    </Link>
                    <p  className="home-info__text">Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, servicing customers across the UK.</p>
                </article>
                <article className="home-info__card">
                    <Link to="/events" className="home-info__link">
                        <h3 className="home-info__heading">News</h3>
                    </Link>
                    <p className="home-info__text">Check out our latest news stories for all the up to date hi-fi corner products and launches.</p>
                </article>
                <article className="home-info__card">
                    <Link to="/shop" className="home-info__link">
                        <h3 className="home-info__heading">Shop</h3>
                    </Link>
                    <p className="home-info__text">Have a look in our online shop for great products and deals.</p>
                </article>
            </div>
        </div>
    )
}