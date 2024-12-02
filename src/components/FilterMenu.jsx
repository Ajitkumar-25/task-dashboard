import { useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";
import { Select, MenuItem } from "@mui/material";

const FilterMenu = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Select
      onChange={handleFilterChange}
      defaultValue="all"
      style={{ margin: "10px 0" }}
    >
      <MenuItem value="all">All Tasks</MenuItem>
      <MenuItem value="completed">Completed Tasks</MenuItem>
      <MenuItem value="pending">Pending Tasks</MenuItem>
      <MenuItem value="overdue">Overdue Tasks</MenuItem>
    </Select>
  );
};

export default FilterMenu;
