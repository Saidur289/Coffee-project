import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const navigate = useNavigate()
    const [coffees, setCoffees] = useState([])
    const data = useLoaderData();
    console.log(data);
    const {category} = useParams()
    useEffect(() => {
       if(category){
        const filterCoffeeData = [...data].filter(coffee => coffee.category === category)
        setCoffees(filterCoffeeData)
       }
       else{
        setCoffees(data.slice(0, 6))
       }
    }, [data, category])
    // console.log(obj);
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">

            {
                coffees.map((coffee) => <Cards key={coffee.id} coffee={coffee}></Cards>)
            }
        </div>
        <button onClick={() => navigate('/coffees')} className="btn btn-warning">View All</button>
        </>
    );
};

export default CoffeeCards;