import './ShopCategoriesManufacturerMenu.scss';

export default function ShopCategoriesManufacturerMenu() {

    return (
        <section className='shop-categories-manufacturer-menu'>
            <h2 className='shop-categories-manufacturer-menu__heading'>Manufacturer</h2>
            <ul className='shop-categories-manufacturer-menu__list'>
                <li>
                    <button>Manley</button>
                </li>
                <li>
                    <button>Parasound</button>
                </li>
                <li>
                    <button>Creek</button>
                </li>
                <li>
                    <button>Pro_Ject</button>
                </li>
                <li>
                    <button>Jolinda</button>
                </li>
                <li>
                    <button>Exposure</button>
                </li>
                <li>
                    <button>Boesendorfer</button>
                </li>
            </ul>
            <button className='shop-categories-manufacturer-menu__all-button'>View All</button>
        </section>
    )
}