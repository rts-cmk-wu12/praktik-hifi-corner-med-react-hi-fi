import { useState } from 'react';
import './ShopCategoriesMain.scss';
import ShopCategoriesProductMenu from './ShopCategoriesProductMenu';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import ShopCategoriesFilter from './ShopCategoriesFilter';
import ShopCategoriesManufacturerMenu from './ShopCategoriesManufacturerMenu';
import ShopCategoriesProductOverview from './ShopCategoriesProductOverview';

export default function ShopCategoriesMain() {

    const [amplifiersData, setAmplifiersData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const params = useParams();
    const currentCategory = params.category;
    
    const fileUrlAmplifiers = 'amplifiers.json';
    const fileUrlCategories = 'categories.json';
    const options = {
        headers : {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    }

    useEffect(() => {

        fetch(fileUrlAmplifiers, options)
        .then(function(response) {
            //console.log(response);
            return response.json();
        })
        .then(function(amplifiersData) {
            //console.log(data);
            setAmplifiersData(amplifiersData);
        });

        fetch(fileUrlCategories, options)
        .then(function(response) {
            //console.log(response);
            return response.json();
        })
        .then(function(data) {
            //console.log(data);
            setCategoriesData(data);
        });
        
        
    }, []);
    //console.log(amplifiersData);
    //console.log(categoriesData);
    
    return (
        <main className="shop-categories-main">
            <div className='shop-categories-main__category-navigation'>
                <Link to="/shop" className='shop-categories-main__shop-link'>Home</Link>
                <p> / </p>
                <Link to={`/shop/${currentCategory}`} className='shop-categories-main__current-category-link'>{currentCategory}</Link>
            </div>
            <ShopCategoriesProductMenu amplifersData={amplifiersData} categoriesData={categoriesData} />
            <ShopCategoriesFilter/>
            <ShopCategoriesProductOverview />
            <ShopCategoriesManufacturerMenu />
        </main>
    )
}