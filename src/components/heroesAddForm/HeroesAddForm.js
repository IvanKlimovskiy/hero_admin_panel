import {useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {v4 as uuidv4} from "uuid";
import {useRef, useState} from "react";
import {heroCreate} from "../heroesList/HeroesSlice";
import {selectAll} from "../heroesFilters/FiltersSlice";
import store from "../../store/store";
const HeroesAddForm = () => {
  const [inputValueNewHeroName, setInputValueNewHeroName] = useState("")
  const [inputValueHeroDescription, setInputValueHeroDescription] = useState("")
  const [inputSelectHeroElement, setInputSelectHeroElement] = useState(null)

  const selectRef = useRef(null);
  const filters = selectAll(store.getState())
  const dispatch = useDispatch();
  const {request} = useHttp();

  const handleNameChange = (event) => {
    setInputValueNewHeroName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setInputValueHeroDescription(event.target.value);
  };
  const handleHeroElement = (event) => {
    setInputSelectHeroElement(event.target.value);
  };

  const addHero = (evt) => {
    evt.preventDefault();
    request(
      "http://localhost:3001/heroes/",
      "POST",
      JSON.stringify({
        id: uuidv4(),
        name: inputValueNewHeroName,
        description: inputValueHeroDescription,
        element: inputSelectHeroElement,
      })
    ).then((heroData) => {
      dispatch(heroCreate(heroData));
      setInputValueNewHeroName("")
      setInputValueHeroDescription("")
      setInputSelectHeroElement(selectRef.current.selectedIndex = 0);
    });
  };

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
          style={{height: "130px"}}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          ref={selectRef}
          required
          className="form-select"
          id="element"
          name="element"
          onChange={handleHeroElement}>
          <option>Я владею элементом...</option>
          {filters.map(({element, label}, index) => {
            if (element === "all") {
              return true
            } else {
              return <option value={element} key={index}>{label}</option>
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
