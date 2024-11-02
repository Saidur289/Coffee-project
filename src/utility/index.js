import toast from "react-hot-toast";


// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorite')
    if(all){
        const allPr = JSON.parse(all)
        return allPr
    }
    return []
}


//add a coffee to local storage 

const addFavorite = (coffee) => {
    const favorite = getAllFavorites()
    const isExists = favorite.find(item => item.id == coffee.id)
    if(isExists){
        return toast.error('Coffee already exists')
    }

    // console.log(coffee);
    
    favorite.push(coffee)
    const favoriteStr = JSON.stringify(favorite)
    localStorage.setItem('favorite', favoriteStr)
    toast.success('successfully added')
}




//remove a coffee from local storage
const removeFavorites = id => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id !== id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.success('Successfully Remove')
}
export {addFavorite, getAllFavorites, removeFavorites}