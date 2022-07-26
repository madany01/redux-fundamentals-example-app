const print1 = storeAPI => next => action => {
  console.log('1')
  return next(action)
}

const print2 = storeAPI => next => action => {
  console.log('2')
  return next(action)
}

const print3 = storeAPI => next => action => {
  console.log('3')
  return next(action)
}

function loggerA(storeApi) {
  return nextMiddleware => action => {
    console.group('loggerA')

    console.log('loggerA.dispatch called with', action)
    console.log('will call it')
    const ret = nextMiddleware(action)
    console.groupEnd('loggerA')

    return ret
  }
}

function loggerB(storeApi) {
  return nextMiddleware => action => {
    console.group('loggerB')

    console.log('loggerB.dispatch called with', action)
    const ret = nextMiddleware(action)

    console.groupEnd('loggerB')

    return ret
  }
}

export { print1, print2, print3, loggerA, loggerB }
