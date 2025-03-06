import { useParams } from 'react-router';
import './ShopCategoriesProductMenu.scss';

export default function ShopCategoriesProductMenu({ amplifiersData, categoriesData }) {

    const params = useParams();
    const currentCategory = params.category;
    const allCategories = categoriesData.categories;
    const allAmplifiers = amplifiersData;
    console.log(amplifiersData);
    console.log(categoriesData)

    return (
        <ul  className="shop-categories-product-menu">
{/*             {data && allCategories?.map(category => {
                return (
                    <li key={category[1]?.map(subCategory => {
                        subCategory?.map(cat => cat.id);
                        return cat.id;
                        }) || category[1]?.map(cat => cat.id)}>
                        <button>{category}</button>
                    </li>
                )
            })} */}
            <li>
                    <button>Amplifiers</button>
                <ul className="shop-categories-product-menu__list">
                    <li>
                        <button>Integrated Amplifiers</button>
                    </li>
                    <li>
                        <button>Power Amplifiers</button>
                    </li>
                    <li>
                        <button>Preamplifiers</button>
                    </li>
                    <li>
                        <button>Tube Amplifiers</button>
                    </li>
                </ul>
            </li>
            <li>
                <button>Speakers</button>
            </li>
            <li>
                <button>Turntables</button>
            </li>
            <li>
                <button>CD Players</button>
            </li>
            <li>
                <button>DVD Players</button>
            </li>
        </ul>
    )
}