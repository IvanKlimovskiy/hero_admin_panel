const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  inputValueNewHeroName: "",
  inputValueHeroDescription: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
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
    default:
      return state;
  }
};

export default reducer;
