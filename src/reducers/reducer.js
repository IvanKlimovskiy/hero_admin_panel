const initialState = {
  heroes: [],
  filteredHeroes: [],
  isFilteredHeroes: false,
  heroesLoadingStatus: "idle",
  filters: [],
  activeButton: "",
  inputValueNewHeroName: "",
  inputValueHeroDescription: "",
  inputSelectHeroElement: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HERO_DELETED":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => {
          return hero.id !== action.payload;
        }),
      };
    case "HERO_SET_NAME":
      return {
        ...state,
        inputValueNewHeroName: action.payload,
      };
    case "HERO_SET_DESCRIPTION":
      return {
        ...state,
        inputValueHeroDescription: action.payload,
      };
    case "HERO_SET_ELEMENT":
      return {
        ...state,
        inputSelectHeroElement: action.payload,
      };
    case "HERO_ADD":
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };
    case "CLEAR_FORM":
      return {
        ...state,
        inputValueNewHeroName: "",
        inputValueHeroDescription: "",
        inputSelectHeroElement: action.payload,
      };
    case "ACTIVE_BUTTON":
      return {
        ...state,
        activeButton: action.payload,
      };
    case "ACTIVE_FILTER":
      return {
        ...state,
        isFilteredHeroes: action.payload !== "all",
        filteredHeroes: action.payload === "all" ? null :
          state.heroes.filter((hero) => {
            return hero.element === action.payload;
          })
      };
    default:
      return state;
  }
};

export default reducer;
