import './ShopCategoriesFilter.scss';

export default function ShopCategoriesFilter() {

    return (
        <section className='shop-categories-filter'>
            <h2 className='shop-categories-filter__heading'>Shop by</h2>
            <p className='shop-categories-filter__text'>Filter</p>
            <h3 className='shop-categories-filter__subheading'>Price</h3>
            <ul className='shop-categories-filter__list'>
                <li>
                    <button>&#163;0.00 - &#163;799.99 (x)</button>
                </li>
                <li>
                    <button>&#163;800.00 - &#163;999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;1,000.00 - &#163;1,499.99 (x)</button>
                </li>
                <li>
                    <button>&#163;1,500.00 - &#163;1,999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;2,000.00 - &#163;2,999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;3,000.00 - &#163;3,499.99 (x)</button>
                </li>
                <li>
                    <button>&#163;3,500.00 - &#163;4,999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;5,000.00 - &#163;7,999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;8,000.00 - &#163;11,999.99 (x)</button>
                </li>
                <li>
                    <button>&#163;12,000.00 and above (x)</button>
                </li>
            </ul>
            <h3 className='shop-categories-filter__subheading'>Manufacturer</h3>
            <ul className='shop-categories-filter__list'>
                <li>
                    <button>Manley (x)</button>
                </li>
                <li>
                    <button>Parasound (x)</button>
                </li>
                <li>
                    <button>Creek (x)</button>
                </li>
                <li>
                    <button>Pro_Ject (x)</button>
                </li>
                <li>
                    <button>Jolinda (x)</button>
                </li>
                <li>
                    <button>Exposure (x)</button>
                </li>
                <li>
                    <button>Boesendorfer (x)</button>
                </li>
                <li>
                    <button>Epos (x)</button>
                </li>
                <li>
                    <button>Harbeth (x)</button>
                </li>
            </ul>
        </section>
    )
}