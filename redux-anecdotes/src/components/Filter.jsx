import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '20px' }}>
      <span style={{ marginRight: '10px' }}>Filter</span>
      <input onChange={({ target }) => dispatch(filterChange(target.value))} />
    </div>
  )
}

export default Filter;