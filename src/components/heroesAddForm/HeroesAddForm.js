import { useDispatch, useSelector } from "react-redux";
import {
  setHeroName,
  setHeroDescription,
  setHeroElement,
  addHeroToState,
  fetchedFilters,
} from "../../actions/actions";
import { useHttp } from "../../hooks/http.hook";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const HeroesAddForm = () => {
  const {
    inputValueNewHeroName,
    inputValueHeroDescription,
    inputSelectHeroElement,
    filters,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(setHeroName(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(setHeroDescription(event.target.value));
  };

  const { request } = useHttp();

  const handleHeroElement = (event) => {
    dispatch(setHeroElement(event.target.value));
  };

  useEffect(() => {
    request("http://localhost:3001/filters").then((filters) => {
      dispatch(fetchedFilters(filters));
    });
  }, []);

  const addHero = (evt) => {
    evt.preventDefault();
    request(
      `http://localhost:3001/heroes/`,
      "POST",
      JSON.stringify({
        id: uuidv4(),
        name: inputValueNewHeroName,
        description: inputValueHeroDescription,
        element: inputSelectHeroElement,
      })
    ).then((heroData) => {
      dispatch(addHeroToState(heroData));
    });
  };

  const filteredFilters = filters.filter((filter) => filter !== "all");

  return (
    <form onSubmit={addHero} className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          onChange={handleNameChange}
          value={inputValueNewHeroName}
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          onChange={handleDescriptionChange}
          value={inputValueHeroDescription}
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          onChange={handleHeroElement}
        >
          <option>Я владею элементом...</option>
          {filteredFilters.map((element, index) => {
            switch (element) {
              case "fire":
                return (
                  <option key={index} value={element}>
                    Огонь
                  </option>
                );
              case "water":
                return (
                  <option key={index} value={element}>
                    Вода
                  </option>
                );
              case "wind":
                return (
                  <option key={index} value={element}>
                    Воздух
                  </option>
                );
              case "earth":
                return (
                  <option key={index} value={element}>
                    Земля
                  </option>
                );
              default:
                return null;
            }
          })}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
