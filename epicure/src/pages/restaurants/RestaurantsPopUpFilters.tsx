import PopupFilter from "../../components/PopupFilter"
import { filterRestaurantsByDistance, filterRestaurantsByPrice, filterRestaurantsByRating } from "../../features/restaurantsSlicer"


const RestaurantsPopUpFilters = () => {
  return (
    <div className="popup-filters-container">
        <PopupFilter name="Price Range" slicer={filterRestaurantsByPrice}  filter="price"/>
        <PopupFilter name="Distance" slicer={filterRestaurantsByDistance}  filter= "distance"/>
        <PopupFilter name="Rating" slicer={filterRestaurantsByRating} filter= "rating"/>
    </div>
  )
}
export default RestaurantsPopUpFilters