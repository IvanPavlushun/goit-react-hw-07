import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <label className={s.search}>
        <span>  Find contacts by name:</span>
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  )
}

export default SearchBox;
