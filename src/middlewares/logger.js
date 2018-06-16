export default store => next => action => {
    //state before action implement
    next(action)
    // state after action implement
}