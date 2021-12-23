export const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) {
      state = reducers[i](state, action);
    }

    return state;
  };
