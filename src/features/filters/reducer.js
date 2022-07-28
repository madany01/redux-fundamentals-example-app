import FiltersActions from './FiltersActions'
import FiltersStatus from './FiltersStatus'

const initialState = {
  status: FiltersStatus.All,
  colors: [],
}

// eslint-disable-next-line default-param-last
function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case FiltersActions.statusChanged:
      return {
        ...state,
        status: action.payload,
      }

    case FiltersActions.colorToggled: {
      const { colors } = state
      const color = action.payload

      return {
        ...state,
        colors: colors.includes(color)
          ? colors.filter(c => c !== color)
          : [...colors, color],
      }
    }

    default:
      return state
  }
}

export default filtersReducer
