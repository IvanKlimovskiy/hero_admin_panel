// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setActiveButton, setActiveFilter} from "../../actions/actions";

const HeroesFilters = () => {

  const {filters, activeButton} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClickButton = (buttonType) => {
    dispatch(setActiveButton(buttonType));
  };

  const filterHeroes = (filterType) => {
    dispatch(setActiveFilter(filterType))
  }

  return <div className="card shadow-lg mt-4">
    <div className="card-body">
      <p className="card-text">Отфильтруйте героев по элементам</p>
      <div className="btn-group">
        {filters.map((filter, index) => {
          switch (filter) {
            case "all":
              return <button
                className={classNames("btn btn-outline-dark", {active: activeButton === "all"})}
                onClick={() => {
                  handleClickButton("all");
                  filterHeroes("all")
                }}
                key={index}
                value={filter}
              >
                Все
              </button>;
            case "fire":
              return <button
                onClick={() => {
                  handleClickButton("fire");
                  filterHeroes("fire");
                }}
                className={classNames("btn btn-danger", {active: activeButton === "fire"})}
                key={index}
                value={filter}
              >
                Огонь
              </button>;
            case "water":
              return <button
                onClick={() => {
                  handleClickButton("water");
                  filterHeroes("water");
                }}
                className={classNames("btn btn-primary", {active: activeButton === "water"})}
                key={index}
                value={filter}
              >
                Вода
              </button>;
            case "wind":
              return <button
                onClick={() => {
                  handleClickButton("wind");
                  filterHeroes("wind");
                }}
                className={classNames("btn btn-success", {active: activeButton === "wind"})}
                key={index}
                value={filter}
              >
                Ветер
              </button>;
            case "earth":
              return <button
                onClick={() => {
                  handleClickButton("earth");
                  filterHeroes("earth");
                }}
                className={classNames("btn btn-secondary", {active: activeButton === "earth"})}
                key={index}
                value={filter}
              >
                Земля
              </button>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  </div>;
};

export default HeroesFilters;
