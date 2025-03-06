import { NavLink } from 'react-router';
import './HeaderMenu.scss';

export default function HeaderMenu({ className }) {

    return (
        <nav className={`header-menu ${className}`}>
            <ul className='header-menu__list'>
                <li>
                    <NavLink to='/' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/brands' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Brands
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blog' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/events' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shop' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                        Contact us
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}