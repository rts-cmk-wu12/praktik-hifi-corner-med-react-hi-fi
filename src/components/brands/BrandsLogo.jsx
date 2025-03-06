import './BrandsLogo.scss';
import Logo from '../header/Logo';
import { Link } from 'react-router';

export default function BrandsLogo() {

    return (
        <section className="brands-logo">
            <div className='brands-logo__container'>
                <h2 className="brands-logo__heading">Top brands</h2>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
        </section>
    )
}