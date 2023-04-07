import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {filterActiveChange, fetchFilters, selectAll} from "./FiltersSlice";
import store from "../../store/store";
const HeroesFilters = () => {

  const {activeFilter} = useSelector(state => state.filters);
  const filters = selectAll(store.getState())
  const dispatch = useDispatch();
  const filterHeroes = (filterType) => {
    dispatch(filterActiveChange(filterType))
  }

  useEffect(() => {
    dispatch(fetchFilters())
    // eslint-disable-next-line
  }, []);

  return <div className="card shadow-lg mt-4">
    <div className="card-body">
      <p className="card-text">Отфильтруйте героев по элементам</p>
      <div className="btn-group">
        {filters.map(({element, label, classname}, index) => {
          return <button
            className={classNames(classname, {active: activeFilter === element})}
            onClick={() => {
              filterHeroes(element)
            }}
            key={index}
            value={element}
          >
            {label}
          </button>;
        })}
      </div>
    </div>
  </div>;
};

export default HeroesFilters;
