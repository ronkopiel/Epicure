import PopupFilter from "../../components/PopupFilter"

const RestaurantsPopUpFilters = () => {
  return (
    <div className="popup-filters-container">
        <PopupFilter name="Price Range"/>
        <PopupFilter name="Distance"/>
        <PopupFilter name="Rating"/>
    </div>
  )
}
export default RestaurantsPopUpFilters