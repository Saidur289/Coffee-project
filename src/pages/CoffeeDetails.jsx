import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../utility";


const CoffeeDetails = () => {
    const {id} = useParams()
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({})
    // declare state for disabled favorite button
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
        // get all data from local storage for disabled favorite btn
        const favorite = getAllFavorites()
        //check it from ls 
        const isExists = favorite.find(item => item.id == singleData.id)
        if(isExists){
            // if available it then disabled true korbo
            setIsFavorite(true)
        }
    }, [data, id])
    const {description, image, ingredients} = coffee;
    //handle favorite button for add locale storage
    const handleFavorite = coffee => {
        addFavorite(coffee)
        //after add to local storage then disabled favorite button
        setIsFavorite(true)
    }

    return (
        <div className="my-12 p-8 space-y-3 border-2 shadow-sm rounded-lg">
            <h1 className="font-bold text-3xl">coffee details: {description}</h1>
            <img src={image} className="w-[500px] h-[300px]" alt="" />
            {/* <ul className="ml-3">
                {
                    ingredients.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)
                }
            </ul> */}
            <button disabled = {isFavorite} onClick={() => handleFavorite(coffee)} className="btn btn-warning">Add Favorites</button>
        </div>
    );
};

export default CoffeeDetails;