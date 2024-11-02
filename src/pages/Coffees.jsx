import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";


const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState([])
    //  Set initial data when component mounts
    useEffect(() => {
        setCoffees(data);
    }, [data]);
    
    const handleSort = sortBy => {
        // sort by popularity
        if(sortBy === 'popularity'){
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted)

        }
        else if(sortBy === 'rating'){
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
            setCoffees(sorted)

        }
        
            
        
    }
    return (
        <>
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-thin ">Sort Coffee By Popularity And Rating</h1>
            </div>
            <div className="flex gap-2">
                <button onClick={() => handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                <button onClick={() => handleSort('rating')} className="btn btn-warning">Sort By Rating</button>

            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">

        {
            coffees.map((coffee) => <Cards key={coffee.id} coffee={coffee}></Cards>)
        }
    </div>
    </>
    );
};

export default Coffees;