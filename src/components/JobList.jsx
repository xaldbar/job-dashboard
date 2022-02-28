import {useSelector} from "react-redux";
import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from "../store/positions/position-selectors";
import {useDispatch} from "react-redux";
import {addFilter} from "../store/filters/filter-actions";
import {selectFilters} from "../store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters)
  const visiblePositions = useSelector((state) => selectVisiblePositions(state, currentFilter));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {visiblePositions.map(item => (
        <JobPosition
            key={item.id}
            handleAddFilter={handleAddFilter}
            {...item} />
      ))}
    </div>
  )
}

export {JobList};