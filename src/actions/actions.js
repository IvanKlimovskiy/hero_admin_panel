export const fetchingHeroes = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const fetchedHeroes = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const fetchedFilters = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const fetchingErrorHeroes = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const deleteHero = (id) => {
  return {
    type: "HERO_DELETED",
    payload: id,
  };
};

export const setHeroName = (heroName) => {
  return {
    type: "HERO_SET_NAME",
    payload: heroName,
  };
};

export const setHeroDescription = (heroDescription) => {
  return {
    type: "HERO_SET_DESCRIPTION",
    payload: heroDescription,
  };
};

export const setHeroElement = (heroElement) => {
  return {
    type: "HERO_SET_ELEMENT",
    payload: heroElement,
  };
};

export const addHeroToState = (hero) => {
  return {
    type: "HERO_ADD",
    payload: hero
  };
};
