import { Link, useLocation } from "react-router-dom";
import { CiTrash } from "react-icons/ci";


const Cards = ({coffee, handleRemove}) => {

    const {name, image, category, origin, type, id, rating, popularity} = coffee || {};
    const {pathname} = useLocation()

    return (
       
         <div className="flex relative">
            <Link to = {`/coffee/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">

            <figure className="w-full h-48 overflow-hidden">
                <img src={image} alt="" />
            </figure>
            <div className="p-4">
           <h1 className="text-xl">Name: {name}</h1>
           <p>Category: {category}</p>
           <p>Type: {type}</p>
           <p>Origin: {origin}</p>
           <p>Rating: {rating}</p>
           <p>Popular: {popularity}</p>
            </div>

            </Link>
            {
                pathname === '/dashboard' && (
                    <div onClick={() => handleRemove(id)} className="absolute -top-5 p-3 bg-warning rounded-full cursor-pointer -right-5"><CiTrash size={20}></CiTrash></div>
                )
            }
          
        </div>
       
       
       
    );
};

export default Cards;