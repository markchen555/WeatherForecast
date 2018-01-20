import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // Most people will do state.push(action.payload.data)
      // NOTE: Do not mutate the state in Reducer and Redux
      // HINT: Concate does not mutate the array, it's a better approach 
      // ES5: state.concat([action.payload.data]);
      // ES6: [ action.payload.data, ...state];
      return [ action.payload.data, ...state ];
  }
  return state;
}