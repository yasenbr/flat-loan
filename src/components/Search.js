import React from "react";
import "../css/Search.css";
import "react-date-range/dist/styles";
import "react-date-range/dist/theme/default";
import { DateRangePicker } from "react-date-range";

//Date picker
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSlection(range) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return <div className="search"></div>;
}

export default Search;
