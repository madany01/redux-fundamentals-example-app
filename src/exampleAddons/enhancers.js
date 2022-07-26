const sayHiOnDispatch = createStore => {
  return (...args) => {
    const store = createStore(...args)

    function newDispatch(action) {
      console.group('sayHiOnDispatch')

      console.log('Hi!')
      const result = store.dispatch(action)

      console.groupEnd('sayHiOnDispatch')

      return result
    }

    return {
      ...store,
      dispatch: newDispatch,
    }
  }
}

const sayHelloOnDispatch = createStore => {
  return (...args) => {
    const store = createStore(...args)

    function newDispatch(action) {
      console.log('Hello!')
      const result = store.dispatch(action)

      console.groupEnd('sayHelloOnDispatch')

      return result
    }

    return {
      ...store,
      dispatch: newDispatch,
    }
  }
}

const includeMeaningOfLife = createStore => {
  return (...args) => {
    const store = createStore(...args)

    function newGetState() {
      return {
        ...store.getState(),
        meaningOfLife: 42,
      }
    }

    return {
      ...store,
      getState: newGetState,
    }
  }
}

export { sayHiOnDispatch, sayHelloOnDispatch, includeMeaningOfLife }
