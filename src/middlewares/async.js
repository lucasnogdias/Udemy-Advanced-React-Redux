const async = ({ dispatch }) => next => action => {
  // Check for promise on the action 'payload'.

  if (!action.payload || !action.payload.then) {
    // No payload, or payload is not a promise (Doesn't have 'then' property)
    return next(action);
  }

  // We have a promise, wait for promise to resolve
  // Create new action with data and dispatch it.
  action.payload.then( response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default async;