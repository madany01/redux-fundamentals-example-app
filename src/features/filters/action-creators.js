import FiltersActions from './FiltersActions'

const filterStatusChanged = newStatus => ({
  type: FiltersActions.statusChanged,
  payload: newStatus,
})

const filterColorToggled = color => ({
  type: FiltersActions.colorToggled,
  payload: color,
})

export { filterStatusChanged, filterColorToggled }
