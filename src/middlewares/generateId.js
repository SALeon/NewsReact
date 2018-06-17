export default store => next => action => {

    if (!action.generateId) {
       return next(action)
    }

    next({
             ...action,
             generateId: (Math.random() + Date.now()).toString()
         })
}