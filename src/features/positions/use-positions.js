import {selectFilters} from "../filter/filter-slice";
import {selectVisiblePositions} from "./position-slice";
import {useSelector} from "react-redux";

export const usePositions = () => {

    const currentFilter = useSelector(selectFilters)
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilter));



    return positions;
}