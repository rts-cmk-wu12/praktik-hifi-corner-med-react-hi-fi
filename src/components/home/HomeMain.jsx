import HomeInfo from "./HomeInfo";
import HomeNews from "./HomeNews";
import HomeProducts from "./HomeProducts";
import HomeSocialMedia from "./HomeSocialMedia";

export default function HomeMain() {

    return (
        <main>
            <HomeNews />
            <HomeProducts />
            <HomeSocialMedia />
            <HomeInfo />
        </main>
    )
}