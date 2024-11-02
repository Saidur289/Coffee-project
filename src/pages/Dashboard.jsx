import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorites } from "../utility";
import Cards from "../components/Cards";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    // remove from localstorage clicking trash btn make a handle button 
    const handleRemove = id => {
        removeFavorites(id)
        // after click trash button amar teke ui teke remove korte hobe 
        const favorites = getAllFavorites()
        setCoffees(favorites)
    }
    useEffect(() => {
        const favorites = getAllFavorites()
        setCoffees(favorites)
    }, [])
    return (
        <div>
            <Heading title='Welcome to Dashboard' subtitle= 'Manage coffees that you have previusly added as favorite. You can view or remove them from here'></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    coffees.map(coffee => <Cards handleRemove = {handleRemove} key={coffee.id} coffee={coffee} ></Cards>)
                }
            </div>
        </div>
    );
};

export default Dashboard;