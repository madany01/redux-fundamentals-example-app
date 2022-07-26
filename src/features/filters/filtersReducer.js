const FiltersStatus = {
  ALL: 'All',
  COMPLETED: 'Completed',
  ACTIVE: 'Active',
}

const FiltersActions = {
  statusChanged: 'filters/statusChanged',
  colorToggled: 'filters/colorToggled',
}

const initialState = {
  status: FiltersStatus.ALL,
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
export { FiltersStatus, FiltersActions }
