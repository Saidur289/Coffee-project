import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
           
            {/* banner */}
            <Banner></Banner>
             {/* heading */}
            <Heading title= 'Browse Coffees by Category' subtitle= 'Choose your coffee category to browse through specipic coffees that fit in your taste.'></Heading>

           
            {/* categories */}
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            {/* dynamic */}
        </div>
    );
};

export default Home;