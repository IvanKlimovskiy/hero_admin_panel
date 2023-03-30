export const fetchingHeroes = () => {
  return {
    type: 'HEROES_FETCHING'
  }
}

export const fetchedHeroes = (heroes) => {
  return {
    type: 'HEROES_FETCHED',
    payload: heroes
  }
}

export const fetchingErrorHeroes = () => {
  return {
    type: 'HEROES_FETCHING_ERROR'
  }
}

export const deleteHero = () => {
  return {
    type: 'HERO_DELETED'
  }
}
