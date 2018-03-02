export const GET_DREAMS = 'GET_DREAMS'
export const ADD_DREAM = 'ADD_DREAM'

export default function reducer(state=[], action) {
  switch (action.type) {
    case GET_DREAMS:
      return action.dreams
    case ADD_DREAM:
      return [...state, action.dream]
  }
  return state
}